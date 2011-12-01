// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using System.Linq;
using Tp.Integration.Common;
using Tp.Integration.Plugin.Common.Mapping;
using Tp.Integration.Plugin.Common.Storage;
using Tp.Integration.Plugin.Common.Domain;

namespace Tp.Bugzilla.BugFieldConverters
{
	public class PriorityConverter : GuessConverter<PriorityDTO>
	{
		public PriorityConverter(IStorageRepository storageRepository) : base(storageRepository)
		{
		}

		protected override void SetValue(ConvertedBug dto, int id)
		{
			dto.BugDto.PriorityID = id;
		}

		protected override PriorityDTO GetFromStorage(string value)
		{
			return GetStorage().SingleOrDefault(s => s.Name.Equals(value, StringComparison.InvariantCultureIgnoreCase));
		}

		protected override string GetBugzillaValue(BugzillaBug bugzillaBug)
		{
			return bugzillaBug.priority;
		}

		protected override MappingContainer Map
		{
			get { return Profile.PrioritiesMapping; }
		}

		protected override BugField BugField
		{
			get { return BugField.PriorityID; }
		}
	}
}