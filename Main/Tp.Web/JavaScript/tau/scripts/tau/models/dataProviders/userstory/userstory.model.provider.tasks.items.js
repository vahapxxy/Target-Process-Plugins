define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(_,a){return a.extend({fetch:function(a){this._fetch("tasks","task","priority",a)},_createDetailCommand:function(a){var b={};return b[a]=["id","name","numericPriority","tags","effort","effortCompleted","effortToDo","timeSpent","timeRemain",{userStory:["id"]},{entityState:["id","name","isInitial","isFinal","numericPriority","isCommentRequired",{nextStates:["id"]}]},{roleEfforts:["id","effort","effortToDo",{role:["id","name","isPair","hasEffort"]}]},{owner:["id","firstName","lastName"]},{assignments:["id",{role:["id"]},{generalUser:["id","firstName","lastName"]}]},{priority:["id","name","importance"]},{project:["id"]}],b},_convertData:function(a){return a=this._super(a),a=this._calculateEffortToMaximum(a),this._sortByPriority(a)},_convertItem:function(a){var b=this,c={id:a.id,name:a.name,numericPriority:a.numericPriority,__type:a.__type,entityState:{id:a.entityState.id,name:a.entityState.name,isInitial:a.entityState.isInitial,isFinal:a.entityState.isFinal,numericPriority:a.entityState.numericPriority},tags:this._processTags(a),effort:this._getEffortData(a),assignments:this._processAssignments(a),priority:null,projectId:a.project.id,entitiesCount:0};return c.visibleEntityState=c.entityState,c}})})