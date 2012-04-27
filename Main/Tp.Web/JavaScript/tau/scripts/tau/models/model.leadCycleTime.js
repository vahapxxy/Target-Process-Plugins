define(["Underscore","tau/core/model-base","tau/utils/utils.date"],function(_,a,b){var c=6e4,d=c*60,e=24*d,f=a.extend({name:"Lead Cycle Time Model",onInit:function(){var a=this,b=a.config.context,c=b.entity.entityType.name,d=b.entity.id,e={id:d,fields:["leadTime","cycleTime","createDate","startDate","endDate"]};a.store.unbind(a),a.store.on({eventName:"afterSave",type:c,fields:["entityState"],listener:a},function(){a.fire("refresh")}),a.store.get(c,e,{scope:a,success:a.onEntityRetrieved}).done()},getTime:function(a){var b="d",c="min",d="h";return this.getTimeWithAbbreviation(a,b,d,c)},getTimeWithAbbreviation:function(a,b,f,g){a*=e;if(a<d)return(a/c).toFixed(0)+g;if(a<e)return(a/d).toFixed(0)+f;var h=parseInt(a/e);a%=e;var i=(a/d).toFixed(0);return h+b+" "+(i>0?i+f:"")},convertDayToMinutes:function(a){return a*24*60},getLongTime:function(a){return this.getTimeWithAbbreviation(a," days"," hours"," minutes")},onEntityRetrieved:function(a){var c=a.data,d=b.parse(c.startDate),e=b.parse(c.createDate),f=b.parse(c.endDate),g="dd MMM yy",h=f?"End Date":"Today";f=f||new Date;var i=c.leadTime,j={leadTime:this.getTime(i),leadTimeTooltip:this.getLongTime(i),createDate:e.toString(g),endDateLabel:h,endDate:(f||new Date).toString(g)};if(_.isNumber(c.cycleTime)){var k=c.cycleTime;j.cyclePercentage=k/i,j.cycleTime=this.getTime(k),j.cycleTimeTooltip=this.getLongTime(k),j.startDate=d.toString(g),j.startDate==j.createDate&&(j.startDate="")}else j.cycleTime="",j.cyclePercentage=null;this.fire("dataBind",j)}});return f})