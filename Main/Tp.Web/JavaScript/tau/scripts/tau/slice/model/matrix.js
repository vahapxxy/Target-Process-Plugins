define(["tau/core/model-base","tau/slice/data/service","Underscore"],function(a,b,_){var c=a.extend({onInit:function(){var a=this,c=new Date;b.getData(function(b){var d=new Date-c,e={renderTime:new Date,x:[null].concat(_.unique(_.pluck(b.x.items,"x"))),y:[null].concat(_.unique(_.pluck(b.y.items,"y")))};e.getDroppableAttribute=function(a,b){return a!=null&&b!=null?"droppable":""};var f=b.cells.items.length,g=0;for(var h=0;h<f;h++){var i=b.cells.items[h];g+=i.dynamic.items.length,e[i.x+"_"+i.y]={data:i.dynamic.items,info:[]}}f=b.x.items.length;for(h=0;h<f;h++)i=b.x.items[h],e[i.x+"_null"]={info:i.dynamic.items,data:[]};f=b.y.items.length;for(h=0;h<f;h++)i=b.y.items[h],e["null_"+i.y]={info:i.dynamic.items,data:[]};var j=e.x.length+" x "+e.y.length+" ["+g+"]";j+="<br/>server: "+d+"ms",e.null_null={info:[{data:{name:j}}],data:[]},a.bus.fire("dataBind",e)})},"bus move":function(a){var c=a.data,d=this;b.move(c,function(a){var b={saga:c,data:a};d.bus.fire("moveCompleted",b)},function(a){var b={saga:c,data:a};d.bus.fire("moveFailed",b)})}});return c})