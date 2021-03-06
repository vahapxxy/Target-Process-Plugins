﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using System.Linq;
using NServiceBus;
using NServiceBus.Saga;
using Tp.Integration.Common;
using Tp.Integration.Messages.EntityLifecycle;
using Tp.Integration.Messages.EntityLifecycle.Commands;
using Tp.Integration.Messages.EntityLifecycle.Messages;
using Tp.Integration.Messages.PluginLifecycle;
using Tp.Integration.Messages.TargetProcessLifecycle;
using Tp.Integration.Plugin.Common;

namespace Tp.PopEmailIntegration.Sagas
{
    public class CreateRequestersForMessageSaga : TpSaga<CreateRequestersSagaData>,
                                       IAmStartedByMessages<CreateRequestersForMessageCommandInternal>,
                                       IHandleMessages<RequesterCreatedMessage>,
                                       IHandleMessages<TargetProcessExceptionThrownMessage>
    {
        public override void ConfigureHowToFindSaga()
        {
            ConfigureMapping<RequesterCreatedMessage>(
                saga => saga.Id,
                message => message.SagaId
                );
            ConfigureMapping<TargetProcessExceptionThrownMessage>(
                saga => saga.Id,
                message => message.SagaId
                );
        }

        public void Handle(CreateRequestersForMessageCommandInternal message)
        {
            Data.OuterSagaId = message.OuterSagaId;
            Data.RequestersDto = message.RequestersDto;
			Log().Info("Create requesters for message");
            foreach (var requesterDto in message.RequestersDto)
            {
				Log().Info(string.Format("Create requester with email '{0}'", requesterDto.Email));
                Send(new CreateRequesterCommand(requesterDto));
            }
        }

        public void Handle(RequesterCreatedMessage message)
        {
			Log().Info(string.Format("Requester with email '{0}' created, id is {1}", message.Dto.Email, message.Dto.ID));
	        ProcessRequesterCreated();
        }

	    private void ProcessRequesterCreated()
	    {
		    Data.ProcessedRequestersCount++;
		    if (Data.ProcessedRequestersCount == Data.RequestersDto.Count())
		    {
			    SendLocal(new RequestersCreatedMessageInternal {SagaId = Data.OuterSagaId});
				MarkAsComplete();
		    }
	    }

	    public void Handle(TargetProcessExceptionThrownMessage message)
        {
            if (!message.ExceptionString.Contains("The requester with the same email already exists"))
            {
                Log().Error("Failed to create requesters.", message.GetException());
                SendLocal(new RequestersCreationFailedMessageInternal { SagaId = Data.OuterSagaId });
            }
            else
            {
				ProcessRequesterCreated();
            }
        }
    }

    [Serializable]
    public class CreateRequestersForMessageCommandInternal : IPluginLocalMessage
    {
        public RequesterDTO[] RequestersDto { get; set; }
        public Guid OuterSagaId { get; set; }
    }

    [Serializable]
    public class RequestersCreatedMessageInternal : SagaMessage, IPluginLocalMessage
    {
    }

    [Serializable]
    public class RequestersCreationFailedMessageInternal : SagaMessage, IPluginLocalMessage
    {
    }

    public class CreateRequestersSagaData : ISagaEntity
    {
        public Guid Id { get; set; }
        public string Originator { get; set; }
        public string OriginalMessageId { get; set; }
        public Guid OuterSagaId { get; set; }
        public RequesterDTO[] RequestersDto { get; set; }
        public int ProcessedRequestersCount { get; set; }
    }
}
