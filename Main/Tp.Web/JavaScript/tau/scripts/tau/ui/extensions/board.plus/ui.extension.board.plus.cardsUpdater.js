define(["Underscore","jQuery","tau/core/event.emitter","tau/ui/extensions/board.plus/ui.board.plus.utils","tau/ui/templates/board.plus/ui.template.boardplus.cards"],function(_,$,a,b){var c=function(a){return"zoom-level-"+a};return a.extend({"bus view.skeleton.built:last+model.zoomLevelChanged:last":function(a){var b=a["view.skeleton.built"].data.element,d=b.attr("class");_.each(d.split(" "),function(a){a.indexOf("zoom-level-")==0&&b.removeClass(a)}),b.addClass(c(a["model.zoomLevelChanged"].data.zoomLevel))},"bus view.skeleton.built+model.cards.data.ready":function(a){var b=a["model.cards.data.ready"].data.cards;b.length>0&&this.fire("model.data.loader.registerItems",{items:_.pluck(b,"data")})},"bus model.dataUpdated:last+view.dom.ready:last+view.skeleton.built:last":function(a){var b=a["model.dataUpdated"].data,c=this,d=new Date;this.detachedElements=[],this.renderedItems=[],_.each(b.items,function(a){c.fire("template.pure.bind",{name:"boardplus.card.userstory",data:a})});var e=[];for(var f=0;f<this.renderedItems.length;f++){var g=this.renderedItems[f],h=g.card;h.innerHTML=g.html,this.fire("view.card.updated",{card:h})}_.each(e,function(a){a.parent.appendChild(a.child)})},"bus template.boardplus.card.userstory.pure.bound":function(a){var c=a.data,d=c.data,e=document.getElementById(b.generateCardId(d)),f=e.parentNode;e.innerHTML=c.html,this.renderedItems.push({card:e,html:c.html})}})})