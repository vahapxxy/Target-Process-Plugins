﻿using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class ProcessAdminCreatedMessage : EntityCreatedMessage<ProcessAdminDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProcessAdminDeletedMessage : EntityDeletedMessage<ProcessAdminDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProcessAdminUpdatedMessage : EntityUpdatedMessage<ProcessAdminDTO, ProcessAdminField>, ISagaMessage
	{
	}
}