define(["Underscore","tau/core/event.emitter","tau/core/tau","tau/components/component.page.entity","tau/configurator","tau/utils/utils.redirect","tau/core/event","tau/store/types","tau/components/extensions/print.convert.extension"],function(_,a,b,c,d,e,f,g,h){return a.extend({init:function(a){this._super(a),this.config=a,this._initGlobalEvents()},_initGlobalEvents:function(){var a=this,b=function(b){var c=b.data,d={project:{id:c.project.id}},e={id:c.entity.id,changes:d,cmd:{config:{$set:d}}};a.bus.fire("application.reload",e)},c=function(b){var c=b.data,d={},e={id:c.bugId,changes:d,cmd:{config:{$set:d}}};a.bus.fire("application.reload",e)};a.bus.getGlobalBus().on("bugWasMarkedAsDuplicate",c,a),a.bus.getGlobalBus().on("entityWasMovedToProject",b,a),a.bus.getGlobalBus().on("processChanged",b,a);var e=["general","assignment","roleEffort"],f=d.getStore(),g=function(b){a.bus.fire("application.reload",b.data)};_.each(e,function(b){f.on({type:b,eventName:"afterSave",listener:a},g),f.on({type:b,eventName:"afterRemove",listener:a},g)})},"bus afterRender:last+innerContentRendered":function(a){var b=a.afterRender.data.element,c=a.innerContentRendered.data.element;b.append(c),this.fire("contentRendered",{element:c})},"bus beforeRender":function(a){},_getItemConfig:function(a,b){var c={entity:{id:a,type:b}};return c},"bus application.navigate.entity":function(a){var b=this,c=a.data,e=(c.action||"").toLocaleLowerCase(),f=e&&e!="demoview"&&e!="tpview"?e:"show";if(!c.id&&!c.entity){var g=d.getRouting(),h=g.getReferer()?g.getReferer().url:null;h&&h!=="#"?g.redirect("#"+h):this.bus.fire("application.exit");return}f="action"+f,this[f]||(f="actionshow"),this.bus.fire("controller.preExecute",{action:f,parameters:c}),this[f].call(this,c.id,c.entity),this.bus.fire("controller.postExecute")},actionshow:function(a,b){this._action(a,b),$("html").toggleClass("tau-html_action_view",!0).toggleClass("tau-html_action_print",!1)},actionprint:function(a,b){this._action(a,b,{extensions:[h]}),$("html").toggleClass("tau-html_action_view",!1).toggleClass("tau-html_action_print",!0),jQuery("body").addClass("print-mode")},_action:function(a,b,f){$("html").toggleClass("tau-html_action_view",!1).toggleClass("tau-html_action_print",!1),this.current&&(this.current.destroy(),d.getStore().evictData());var g=this;this.current=c.create(this._getItemConfig(a,b),f||{}),this.current.on("beforeDelete",function(a){g.bus.fire("initProgress")}),this.current.on("deleted",function(a){var b=d.getHistory(),c=new e,f=b.pop();f?(b.setCurrent(null),c.redirect(f.url)):g.bus.fire("application.exit")}),this.current.on("error",function(a){g.bus.fire("application.error")}),this.current.on("afterRender",function(a){g.fire("innerContentRendered",{element:a.data.element})}),this.current.initialize()},destroy:function(){this._super(),d.getStore().unbind(this),this.current&&this.current.fire("destroy"),delete this.current,delete this.$element,delete this.config}})})