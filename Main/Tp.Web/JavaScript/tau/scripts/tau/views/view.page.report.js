define(["Underscore","jQuery","tau/core/view-base","tau/components/component.container","tau/configurations/reports.container.config","tp/reports/burndown/filterStorageShare","tau/core/tau"],function(e,t,n,i,r,a,o){return n.extend({initialize:function(){},configCollapseFieldName:"collapser_aside_collapsed","bus beforeInit":function(){var n=this.config.context.configurator,i=n.getRestStorage(),r=n.getSettingsManager(),a={};a[this.configCollapseFieldName]=!0,r.set({set:a}),this.fire("configurator.ready",n);var s=e.bind(i.data,i,"reports",this.config.id);s().then(function(e){return e.value?e:t.Deferred().reject(e.config.$key)}.bind(this)).done(this.initPageComponent.bind(this,this.config,n,s)).fail(function(t){var n=new o.Error(e.sprintf("Report with Id %s not found or access is forbidden",t));this.fire("loadingError.ready",n)}.bind(this))},"bus configurator.ready:last + loadingError.ready":function(e,t,n){t.getTitleManager().set(n.message);var i=t.getHistory().pop(),r=t.getTemplateFactory().get("page.error").bind({},{err:n,backLink:i?i.url:null});this["container afterRender"]({data:{element:r}})},initPageComponent:function(t,n,s,c){var d=new r(t),l=n.getLoggedUser(),u=l.isAdministrator||e.contains(c.data.ownerIds,l.id),f=c.value.reportType,g=d.getReportConfigByKey(f),h=n.getHistory();if(h.updateCurrent({url:"#report/"+c.data.key,title:d.getReportNameByKey(f)}),n.getTitleManager().setTitle(d.getReportNameByKey(f)),"burnDown"===f){var p=a;u||(p=a.extend({savePlannableFilter:o.empty})),g.storage=new p({groupName:"reports",key:this.config.id})}else g.modelOverride={getStorage:function(){return s},initialSettings:function(t){return t.data&&t.data.publicData?e.defaults(t.data.publicData,this.defaultData):this.defaultData},saveToStorage:function(e,t){u&&e({scope:"Public",publicData:t}).done()}};var y=e.extend(t,{type:"container",layout:"list",name:"reports container",cssClass:"tau-app tau-page-single tau-page-entity",children:[g]});this.container=i.create({name:"board page container",layout:y.layout,template:y.template,extensions:e.union([],y.extensions||[]),context:t.context});
var m=n.getAppStateStore();this.acidStore=m,m.unbind({listener:this}),m.bind({fields:["acid"],listener:this,callback:function(){this.container.fire("refresh")}}),this.container.on("afterInit",this["container afterInit"],this),this.container.on("afterRender",this["container afterRender"],this),this.container.on("componentsCreated",this["container componentsCreated"],this),this.container.initialize(y)},"container afterInit":function(){this.fireAfterInit()},"container componentsCreated":function(e){this.fire(e.name,e.data)},"container afterRender":function(e){this.fireBeforeRender(),this.element=e.data.element,this.fireAfterRender()},lifeCycleCleanUp:function(){this.destroyContainer(),this._super()},destroyContainer:function(){this.container&&(this.container.destroy(),this.container=null)},destroy:function(){this.acidStore&&this.acidStore.unbind({listener:this}),this.destroyContainer(),this._super()}})});