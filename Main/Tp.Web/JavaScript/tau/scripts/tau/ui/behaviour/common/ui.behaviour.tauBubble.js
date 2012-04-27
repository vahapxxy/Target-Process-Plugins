define(["Underscore","jQuery"],function(_,$){var a=[];return $.widget("ui.tauBubble",{_isInit:!1,$popup:null,$closeEl:null,$arrows:{top:null,bottom:null},$target:null,$alignTo:null,options:{viewport:"body",alignTo:null,collision:"fit flip",onShow:$.noop,showOnCreation:!1,closeOnEscape:!0},_create:function(){this.$target=this.element,this.options.alignTo&&(this.$alignTo=$(this.options.alignTo)),this.$alignTo=this.$alignTo&&this.$alignTo.length?this.$alignTo:this.$target;if(this.options.showOnCreation==1)this.show();else{var a=this.onTargetClickDelegate=$.proxy(this._onTargetClick,this);this.$target.bind("click",a)}},_onTargetClick:function(a){var b=$(a.target);if(b.is("a")||b.parent().is("a"))return!0;a.preventDefault(),a.stopPropagation(),this.toggle()},_initInstance:function(b){var c=this,d,e=this.$target.parents(".ui-popup-content:first"),f=null;e.length?(d=e,f=d.parent()):(d=$("body"),f=d);var g=$('<div class="tau-bubble popup-container"><div class="tau-bubble__inner" role="content"></div></div>');g.appendTo(f),this.$popup=g,c.$arrows={top:$('<div class="tau-bubble__arrow-top"></div>'),bottom:$('<div class="tau-bubble__arrow-bottom"></div>')},c.$arrows.top.prependTo(g),c.$arrows.bottom.prependTo(g),_(a).include(c)||a.push(c);var h=$.proxy(this.hide,this);g.mouseenter(function(a){g.data("focus",!0)}),g.mouseleave(function(a){g.data("focus",!1)}),d.scroll(function(){h(),c.$target.trigger("externalClose",{})}),this._initInstance=function(){}},show:function(){this._initInstance();var b=this;b.$popup.zIndex(b.$target.zIndex()+1),b.$target.trigger("show.before",{}),b.adjustPosition(),b.options.onShow.call(b,b.$popup);for(var c=0;c<a.length;c++){var d=a[c];d!=b&&(d.$target.trigger("externalClose",{}),d.hide())}b._signUpForCloseEvents(),b._windowResizeDelegate||(b._windowResizeDelegate=_.bind(function(){this.adjustPosition()},this)),$(window).bind("resize",b._windowResizeDelegate);var e={api:b,target:b.$target,popup:b.$popup};b.$target.trigger("show",e),b.$popup.trigger("show",e)},hide:function(a){var b=this,c=b.$popup;if(!c.is(":visible"))return;c.hide(),b._documentKeyDown&&($(document).unbind("keydown",b._documentKeyDown),delete b._documentKeyDown),b._documentClickDelegate&&($(document).unbind("click",b._documentClickDelegate),delete b._documentClickDelegate),b._windowResizeDelegate&&($(window).unbind("resize",b._windowResizeDelegate),delete b._windowResizeDelegate),b.$target.trigger("close",{event:a})},_onKeyDown:function(a){if(a.keyCode!=$.ui.keyCode.ESCAPE)return;this.$target.trigger("externalClose",{}),this.hide(a)},_signUpForCloseEvents:function(){var a=this;a.options.closeOnEscape&&!a._documentKeyDown&&(a._documentKeyDown=function(b){a._onKeyDown(b)},$(document).keydown(a._documentKeyDown)),a._documentClickDelegate||(a._documentClickDelegate=function(b){a._onDocumentClick(b)},$(document).click(a._documentClickDelegate))},_processArrows:function(){var a=this,b=a.$alignTo,c=a.$popup;a.$arrows.top.hide(),a.$arrows.bottom.hide();var d=a.$arrows.top,e=b.offset(),f=c.offset();f.top<e.top&&(d=a.$arrows.bottom);if(f.left<e.left){var g=b.width(),h=e.left-f.left-($.browser.webkit?17:24)+g/2;d.css("left",h+"px")}this.options.adjustArrow&&this.options.adjustArrow(d,c),d.show()},toggle:function(){var a=this;!a.$popup||!a.$popup.is(":visible")?a.show():a.hide()},widget:function(){return this.$popup||$()},adjustPosition:function(){var a=this,b=a.$alignTo,c=a.$popup;c.show();var d="-20 9";b.width()>=20&&(d="0 9");var e={of:b,my:"left top",at:"left bottom",offset:d,collision:a.options.collision};a.options.onPosition&&a.options.onPosition(e),c.position(e);var f=b.position(),g=c.position();g.top<0&&(e.collision="none",c.position(e),g=c.position()),a._processArrows();var h=a.element},_onDocumentClick:function(a){var b=this,c=$(a.target);if(!b.$popup.is(":visible"))return;if(c.hasClass("tau-bubble-target")||c.parents(".tau-bubble-target,.ui-menu-item").length>0)return;if(c.hasClass("tau-bubble")||c.parents("div.tau-bubble").length>0)return;if(b._justActivated){b._justActivated=!1;return}b._trigger("hide"),b.$target.trigger("externalClose",{}),b.hide()},activate:function(){this._justActivated=!0,this.show()},destroy:function(){var b=this,c=b.element;b.$popup&&(b.hide(),b.$popup.remove(),b.$arrows.top.remove(),b.$arrows.bottom.remove()),c.unbind("click",b.onTargetClickDelegate),a=_(a).without(b),$.Widget.prototype.destroy.apply(this,arguments)},empty:function(){var a=this;a.hide(),a.$popup.find(".tau-bubble__inner").empty()}}),$.fn.tauBubble})