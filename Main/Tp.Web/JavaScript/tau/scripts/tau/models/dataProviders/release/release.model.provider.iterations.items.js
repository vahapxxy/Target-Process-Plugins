define(["Underscore","tau/models/dataProviders/model.provider.items.user_stories_bugs","tau/models/dataProviders/model.provider.items.user_stories","tau/models/dataProviders/model.provider.items.bugs"],function(_,a,b,c){return a.extend({init:function(a){this.config=a,a.additionalFields=["iteration"],this.providers=[new b(a)],this.config.context.isPracticeAvailable("Bug Tracking")&&this.providers.push(new c(a))},_convertData:function(b){return b=a.prototype._convertData.call(this,b),_.forEach(b,function(a){a.visibleEntityState=a.entityState}),this._sortByPriority(b)}})})