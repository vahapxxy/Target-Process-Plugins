﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using System.Linq;
using NServiceBus;
using Tp.BugTracking.ImportToTp;
using Tp.Integration.Messages.Ticker;
using Tp.Integration.Plugin.Common;
using Tp.Integration.Plugin.Common.Activity;
using Tp.Integration.Plugin.Common.Domain;

namespace Tp.Bugzilla.ImportToTp
{
	public class BugsSynchronizer : IHandleMessages<TickMessage>
	{
		private readonly ILocalBus _bus;
		private readonly IStorageRepository _storageRepository;
		private readonly IBugzillaService _bugzillaService;
		private readonly IBugChunkSize _bugChunkSize;
		private readonly IActivityLogger _logger;

		public BugsSynchronizer(ILocalBus bus, IStorageRepository storageRepository, IBugzillaService bugzillaService,
		                        IBugChunkSize bugChunkSize, IActivityLogger logger)
		{
			_bus = bus;
			_storageRepository = storageRepository;
			_bugzillaService = bugzillaService;
			_bugChunkSize = bugChunkSize;
			_logger = logger;
		}

		public void Handle(TickMessage message)
		{
			_logger.Info("Checking changes in Bugzilla");

			ProcessFailedChunks();
			ProcessNewlyChanges(message.LastSyncDate);
		}

		private IStorage<FailedSyncDate> FailedSyncDates
		{
			get { return _storageRepository.Get<FailedSyncDate>(); }
		}

		private IStorage<FailedChunk> FailedChunks
		{
			get { return _storageRepository.Get<FailedChunk>(); }
		}

		private void ProcessNewlyChanges(DateTime? lastSyncDate)
		{
			var dateValue = GetSyncDate(lastSyncDate);

			int[] changedIds;

			if (TryGetChangedIds(dateValue, out changedIds))
			{
				if (changedIds.Length > 0)
				{
					_logger.InfoFormat("{0} changed bugs found", changedIds.Length);
				}

				ProcessChangedBugIds(changedIds);
			}
			else
			{
				FailedSyncDates.ReplaceWith(new FailedSyncDate(dateValue));
			}
		}

		private void ProcessChangedBugIds(int[] changedIds)
		{
			FailedSyncDates.Clear();

			var lastIndex = 0;

			var bugIdsChunk = changedIds.Skip(lastIndex).Take(_bugChunkSize.Value).ToArray();

			while (bugIdsChunk.Any())
			{
				_bus.SendLocal(new ImportBugsChunk {ThirdPartyBugsIds = bugIdsChunk});

				lastIndex += _bugChunkSize.Value;
				bugIdsChunk = changedIds.Skip(lastIndex).Take(_bugChunkSize.Value).ToArray();
			}
		}

		private void ProcessFailedChunks()
		{
			if (!FailedChunks.Any()) return;

			_logger.Info("Processing failed bugs");

			foreach (var failedChunk in FailedChunks)
			{
				_bus.SendLocal(new ImportBugsChunk {ThirdPartyBugsIds = failedChunk.Chunk});
			}

			FailedChunks.Clear();
		}

		private DateTime? GetSyncDate(DateTime? lastSyncDate)
		{
			var lastFailedDate = FailedSyncDates.FirstOrDefault();

			return lastFailedDate != null ? lastFailedDate.GetValue() : lastSyncDate;
		}

		private bool TryGetChangedIds(DateTime? dateValue, out int[] ids)
		{
			try
			{
				ids = _bugzillaService.GetChangedBugIds(dateValue).Distinct().ToArray();
				return true;
			}
			catch (Exception e)
			{
				_logger.Error(string.Format("Retrieving changed bugs failed: {0}", e.Message), e);
				ids = new int[] {};

				return false;
			}
		}
	}
}