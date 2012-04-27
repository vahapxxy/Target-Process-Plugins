define(["Underscore","jQuery","tau/core/tau","tau/configurator","tau/components/component.application","tests/components/common/common.setup","tests/components/component.specs","tests/common/applicationContext","tau/components/component.title","tau/components/component.description"],function(_,$,a,b,c,d,e,f,g,h){var i=function(){var a={manualContext:!0,context:{entityType:{name:"UserStory"},id:15}},g=new f(a.context),h=null;b.getRouting().window=window,b.getRouting().options.encodeBy=function(a){return a},b.getRouting().options.decodeBy=function(a){return a};var i=d.create("[component.application]",[g],c,{executeOnStart:!1}),j=[{name:"Should create viewport",test:function(){equals(this.$el.length,1,"create viewport"),equals(this.$el.hasClass("ui-application-viewport"),!0,"create viewport")}},{name:"Should process routes",test:function(){b.getRouting().reset(),this.component.fire("registerRoute",{pattern:"preved/{name}",callback:function(a){h=a.name}}),this.component.fire("registerRouteNotFound",{callback:function(a){h=404}}),$(window).triggerHandler($.Event("hashchange",{hash:"preved/medved"})),equals(h,"medved","match and execute route"),$(window).triggerHandler($.Event("hashchange",{hash:"prevved"})),equals(h,404,"match and execute route")}}];e.create(i,a).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests(j).done()};return{run:i}})