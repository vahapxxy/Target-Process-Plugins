define(["tau/core/extension.base.stateful"],function(ExtensionBase){return ExtensionBase.extend({"bus afterRender":function(evt){var $el=evt.data.element,store=this.config.context.configurator.getStore(),entity=this.config.context.entity,bus=this.bus,self=this;$el.delegate("[role=action-detach]","click",function(e){var $button=$(e.target);if(!confirm($button.data("confirmMessage")))return;var $item=$button.parents("[role=item]:first"),relatedData=$item.data();store.removeFromList("team",{id:entity.id,$set:{teamProjects:{id:relatedData.entityId}}}).done({success:function(){store.evictProperties(entity.id,"team",["teamProjects"]),self.fire("project.detached")}})})},"bus beforeInit:last + project.detached":function(evt,initConfig){var configurator=initConfig.config.context.configurator,entity=this.config.context.entity,store=configurator.getStore();store.get("team",{id:entity.id,fields:["id",{teamProjects:["id"]}]}).done({success:function(){},failure:function(){alert("You don't have access to this team now"),configurator.getHistory().exclude(entity.id),configurator.getGlobalBus().fire("redirectBack")}})}})})