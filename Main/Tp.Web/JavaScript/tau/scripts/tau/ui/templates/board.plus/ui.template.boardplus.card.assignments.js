define(["tau/core/templates-factory","app.path"],function(a,b){var c={name:"boardplus.card.assignments",engine:"jqote2",customFunctions:{getAppPath:function(){return b.get()}},markup:[['<span class="tau-avatar"><img  alt="<%= this.generalUser.firstName + \' \' + this.generalUser.lastName %>" title="<%= this.generalUser.firstName + \' \' + this.generalUser.lastName %>"  src="<%= fn.getAppPath() %>/Avatar.ashx?UserID=<%= this.generalUser.id%>&size=24" /></span>'].join("")]};return a.register(c)})