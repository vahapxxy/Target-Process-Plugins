define(["jQuery","tau/components/extensions/component.extension.base","tau/ui/behaviour/common/ui.behaviour.tauBubble"],function($,a){var b=function(a){var b=null,c=a.target,d=a.caption,e=a.value;c.click(function(a){b={x:a.pageX,y:a.pageY}}),c.addClass("ui-link").tauBubble({onShow:function(){var b=this.$popup.find(".tau-bubble__inner");if(b.find(".tau-time-interval-header").size()>0)return;b.append(['<div class="tau-time-interval-container">',"<table>","<tr>","   <td>",'       <div class="tau-time-interval-header">',a.caption,":</div>","   </td>","   <td>",'       <div class="tau-time-interval-value">',e,"</div>","   </td>","</tr>","<tr>","   <td>",'       <div class="tau-time-interval-header">',a.startCaption,":</div>","   </td>","   <td>",'       <div class="tau-time-interval-value">',a.startDate,"</div>","   </td>","</tr>","<tr>","   <td>",'       <div class="tau-time-interval-header">',a.endCaption,":</div>","   </td>","   <td>",'       <div class="tau-time-interval-value">',a.endDate,"</div>","   </td>","</tr>","</table>","</div>"].join(""))},alignTo:c,adjustArrow:function(a,b){a.css("left",b.width()/2-35+"px")},onPosition:function(a){a.my="left top",a.at="left bottom";var c=this.target.offset();a.offset=b.x-c.left-70+" 15"},target:c})};return a.extend({extractDataFromEvent:function(a,b){return(a[b]||{}).data||{}},"bus afterRender+dataBind":function(a){var c=this.extractDataFromEvent(a,"dataBind"),d=$(this.extractDataFromEvent(a,"afterRender").element);b({target:d.find("svg.main-plot rect").eq(4),caption:"Cycle Time",value:c.cycleTimeTooltip,startCaption:"Start Date",startDate:(c.startDate||"").length>0?c.startDate:c.createDate,endCaption:c.endDateLabel,endDate:c.endDate}),b({target:d.find("svg.main-plot rect").eq(0),caption:"Lead Time",value:c.leadTimeTooltip,startCaption:"Create Date",startDate:c.createDate,endCaption:c.endDateLabel,endDate:c.endDate})}})})