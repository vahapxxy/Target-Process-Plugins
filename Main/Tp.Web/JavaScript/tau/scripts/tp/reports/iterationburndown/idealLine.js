define(["tp/date.utils"],function(a){var b=function(b){if(!b.startDate)return null;var c=$.grep(b.data,function(c){return a.sameDay(c.date,b.startDate)});return c.length>0?c[0]:null},c=function(a,c){var d=b(c);if(!d)return;a.createGroup("idealLine").append("line").attr("class","idealLine").attr("x1",a.x(c.getXValue(d))).attr("y1",a.y(c.getYValue(d))).attr("x2",a.x(a.xAxis.max)).attr("y2",a.y(0))};return{render:c}})