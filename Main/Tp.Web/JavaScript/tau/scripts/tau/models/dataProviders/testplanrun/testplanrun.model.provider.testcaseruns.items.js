define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/configurator"],function(_,a,b){return a.extend({fetch:function(a){this._fetch("testCaseRuns","testCaseRun","priority",a)},_createDetailCommand:function(a){var b={};return b[a]=["id","passed","executed","runDate",{testCases:["id","name","tags","numericPriority",{priority:["id","name","importance"]}]}],b},_convertData:function(a){return a=this._super(a),a=_.compact(a),_.sortBy(a,function(a){var b=a.testcase.numericPriority||0;return b})},_convertItem:function(a){var b=this;if(a.testCases.length==0)return null;var c=a.testCases[0];c.priority.kind=this.importanceProcessor.getKind(c.priority.importance);var d={id:a.id,__type:a.__type,name:c.name,testcase:{id:c.id,__type:c.__type,name:c.name,tags:this._processTags(c),priority:c.priority,numericPriority:c.numericPriority},passed:a.passed,runDate:a.runDate,executed:a.executed,status:a.passed===!0?"Passed":a.passed===!1?"Failed":"Skipped"};return d}})})