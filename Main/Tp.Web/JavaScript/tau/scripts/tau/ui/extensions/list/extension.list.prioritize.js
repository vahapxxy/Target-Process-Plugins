define(["Underscore","jQuery","tau/configurator","tau/components/extensions/component.extension.base"],function(_,$,a,b){return b.extend({name:"extension.list.prioritize",category:"edit","bus afterRender":function(b){var c=b.data.element,d=this;this.$el=c,c.addClass("tau-list__sortable__true");var e=c.find("[role=group]");e.addClass("tau-list__group_sortable_true");var f={sensitivity:7,speed:12};a.getConfig("isPopup",!1)&&(f={sensitivity:20,speed:30}),e.addClass("tau-list__group_available_true"),e.sortable({scroll:!0,scrollSensitivity:f.sensitivity,scrollSpeed:f.speed,cursor:"move",connectWith:".tau-list__group_available_true[role=group]",items:".tau-list__list [role=item]",dropOnEmpty:!0,handle:"[role=sortable-handler]",forcePlaceholderSize:!0,placeholder:{element:function(a){var b=$('<li class="tau-list__list__item tau-list__sortable-placeholder ui-sortable-placeholder"></li>');return b.height(50),b},update:function(a,b){return}},helper:function(a,b){var c=b;return c}});var g=function(){$(this).data("sortable").refreshPositions()};c.mousedown(function(){e.bind("mousemove",g)}),c.mouseup(function(){e.unbind("mousemove",g)}),e.bind("sortstart",function(a,b){d.started=!0;var c=b.item,e=c.data("tmplItem").data||{},f=$(a.currentTarget);f.addClass("tau-list__group_sortover_true"),d.$group=f;var g=f.data("tmplItem")?f.data("tmplItem").data:{};d.fire("prioritize.start",{item:e,group:g})}),e.bind("sortstop",function(a,b){e.addClass("tau-list__group_available_true"),e.removeClass("tau-list__group_available_false"),e.removeClass("tau-list__group_sortover_true")}),e.bind("sortupdate",function(a,b){if(d.started)d.started=!1;else return;var c=b.item,e=c.prev("[role=item]"),f=c.next("[role=item]"),g=c.data("tmplItem").data||{},h=e.length?e.data("tmplItem").data:{},i=f.length?f.data("tmplItem").data:{},j=c.parents("[role=group]:first"),k=j.data("tmplItem")||null;k=k?k.data:null;var l=j.hasClass("tau-list__group_collapsed_true");j.addClass("i-target");var m=$(this),n=m.data("tmplItem")||null;n=n?n.data:null,d.fire("prioritize.checkAvailability",{$item:c,$prevGroup:m,$targetGroup:j,item:g,prev:h,next:i,group:k,prevGroup:n,isCollapsed:l})}),e.bind("sortchange",function(a,b){var c=e.find(".tau-list__sortable-placeholder").parents("[role=group]:first");c.length==1&&c.hasClass("tau-list__group_sortover_true")==0&&(e.removeClass("tau-list__group_sortover_true"),c.addClass("tau-list__group_sortover_true"))});var h=function(a,b,c,d){c?$(c[0]).find(".tau-list__list").append(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)};e.each(function(){var a=$(this);a.data("sortable")._rearrange=h})},"bus prioritize.checkAvailability":function(a){this.bus.fire("prioritize.isAvailable.default",{})},"bus prioritize.checkAvailability+prioritize.isNotAvailable":function(a){this.bus.fire("refresh")},"bus prioritize.checkAvailability+prioritize.isAvailable.default+prioritize.isAvailable.comment":function(a){var b=a["prioritize.checkAvailability"].data;this.fire("positionUpdated",b)},"bus prioritize.updateGroupsAvailability":function(a){var b=a.data,c=b.groups,d=this,e=this.$el.find("[role=group]");if(e.length<=1||e.length==c.length){e.addClass("tau-list__group_available_true").removeClass("tau-list__group_available_false"),this.$group.sortable("refresh");return}var f=_.filter(e.toArray(),function(a){var b=$(a).data("tmplItem").data;return _.any(c,function(a){return b===a})}),g=$(f);e.addClass("tau-list__group_available_false").removeClass("tau-list__group_available_true"),g.removeClass("tau-list__group_available_false").addClass("tau-list__group_available_true"),this.$group.sortable("refresh")},"bus beforeUpdate":function(){this.$el.find(".i-target [role=counter]").css("backgroundColor","#ffefd5")},"bus afterUpdate":function(a){this.$el.find("[role=group]").each(function(){$(this).find("[role=counter]").text($(this).find("[role=item]").length)}),this.$el.find(".i-target [role=counter]").animate({backgroundColor:"#ffffff"},200),this.$el.find(".i-target").removeClass("i-target");var b=a.data.changedItem,c=this.$el.find(".i-item-"+b.id),d=c.parents("[role=item]:first"),e=d.data("tmplItem").data;_.extend(e,b);if(this.$el.find("[role=group]").length>1){var f="tau-list__table__row_isfinalstate_true";e.entityState&&c.toggleClass(f,!!e.entityState.isFinal)}}})})