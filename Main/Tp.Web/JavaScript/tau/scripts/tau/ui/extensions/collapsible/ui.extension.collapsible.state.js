define(["tau/components/extensions/component.extension.base"],function(a){return a.extend({"bus beforeInit":function(a){var b=this.config=a.data.config;if(b.hasOwnProperty("stateName")){var c=b[b.stateName];if(_.isNull(c)||_.isUndefined(c))return;var d=c.toString().toLowerCase()=="true";b.collapsed=d,this.collapsed=d}},getStateName:function(){return this.config.stateName},onStateChanged:function(a){var b=a[this.getStateName()];if(_.isNull(b)||_.isUndefined(b))b=this.collapsed;var c=b.toString().toLowerCase()=="true",d=c?"collapse":"expand",e=this.config;e.collapsed=c;var f=e.stateName;f&&(e[f]=c),this.fire(d)},"bus childrenRendered":function(a){var b=a.data.children,c=b[0],d=b[1],e=this;c.on("expanded",this.onExpanded,this),c.on("collapsed",this.onCollapsed,this)},onCollapsed:function(){this.saveState(!0)},onExpanded:function(){this.saveState(!1)},saveState:function(a){var b=this.getStateName();if(b&&this.config[b]!=a){var c=this,d=c.config.context.componentSettings;if(d){var e={};e[b]=a,d.set({set:e})}}},"bus destroy+childrenRendered":function(a){var b=a.childrenRendered.data.children,c=b[0],d=b[1],e=this},"bus initialize":function(a){var b=this,c=b.config.context.componentSettings;c&&c.bind({fields:[this.getStateName()],listener:b,callback:b.onStateChanged})}})})