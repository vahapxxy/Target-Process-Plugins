define(["Underscore","tau/models/board.customize.units/const.entity.types.names"],function(s,t){var e=function(){this.entity={},this[t.GENERAL]={base:"entity"},this.assignable={base:t.GENERAL},this[t.US]={base:"assignable"},this[t.BUG]={base:"assignable"},this[t.FEATURE]={base:"assignable"},this[t.EPIC]={base:"assignable"},this[t.TASK]={base:"assignable"},this[t.REQUEST]={base:"assignable"},this[t.TEST_CASE]={base:t.GENERAL},this[t.TEST_CASE_RUN]={base:"entity"},this[t.IMPEDIMENT]={base:t.GENERAL},this[t.ASSIGNED_USER]={base:"entity"},this[t.USER]={base:"entity"},this[t.PROJECT]={base:t.GENERAL},this[t.PROGRAM]={base:t.GENERAL},this[t.TEAM]={base:t.GENERAL},this[t.ITERATION]={base:t.GENERAL},this[t.TEAM_ITERATION]={base:t.GENERAL},this[t.RELEASE]={base:t.GENERAL},this[t.TEST_PLAN]={base:"assignable"},this[t.TEST_PLAN_RUN]={base:"assignable"},this[t.BUILD]={base:t.GENERAL},this[t.PROJECT_MEMBER]={base:"entity"},this[t.INBOUND_RELATIONS]={base:t.GENERAL},this[t.OUTBOUND_RELATIONS]={base:t.GENERAL},this[t.TIME]={base:"entity"}};return e.prototype.isAssignable=function(s){return s&&this[s]&&("assignable"==s||this.isAssignable(this[s].base))},e.prototype.isGeneral=function(s){return s&&this[s]&&(s==t.GENERAL||this.isGeneral(this[s].base))},e.prototype.getParents=function(s){return s&&this[s]?this.getParents(this[s].base).concat([s]):[]},new e});