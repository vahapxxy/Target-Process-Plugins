define(["Underscore","jQuery","tau/core/class","tau/app.resolver","tau/components/component.video-intro.popup"],function(t,e,i,r,o){return i.extend({init:function(t,e){this.configurator=t,this.applicationId=e},process:function(){var t=this.configurator.getWindow(),e=!t.appIsInDebugMode&&t.tauUserInfo&&t.tauUserInfo.isFirstTimeTp3Login;return e?this.firstTimeLogin():this.notFirstTimeLogin()},notFirstTimeLogin:function(){var i=this.configurator.getHashService(),o=!i.getHash();if(o&&t.has(i.getHrefParsed().queryKey,"start"))this.setHash("start/start");else if(o&&t.has(i.getHrefParsed().queryKey,"invite"))this.setHash("invite");else{var n=this.applicationId;r.resolvePageInfo({appId:this.applicationId,configurator:this.configurator},{type:"board",id:"last"},function(t){this.setHashParam(n,t.type+"/"+t.id)})}return e.Deferred().resolve()},showCallAdminPopup:function(){var t=this.configurator.getGlobalBus();o.create({url:"//www.youtube.com/embed/Lxl2sTEyYaE",showNextButton:!1}),t.fire("contentRendered")},firstTimeLogin:function(){var i=e.Deferred(),r=this.configurator.getLoggedUser().isAdministrator,o=window.tauUserInfo&&window.tauUserInfo.Tp3Available,n=e.Deferred();return i.fail(n.reject),i.done(function(){var t=this.configurator.getGlobalSettingsService();t.sendRequest("GlobalSettingsService","FirstTimeLoginTP3",null).done(n.resolve).fail(function(){throw new Error("First time login operation is failed")})}.bind(this)),r||o||(this.showCallAdminPopup(),i.reject()),this.getPublicBoardsCount().then(t.bind(function(e){e>0?(this.setHash("invite"),i.resolve()):this.getPrivateBoardsCount().then(t.bind(function(t){t>1?(this.setHash("invite"),i.resolve()):r?(this.setHash("start/start"),i.resolve()):(this.showCallAdminPopup(),i.reject())},this))},this)),n},getBoardsCount:function(t){var i=e.Deferred();return this.configurator.getRestStorage().select("boards",{$where:'(publicData.isShared == "'+t+'")',$fields:["key"]}).done(function(t){i.resolve((t.data||[]).length)}),i},getPublicBoardsCount:function(){return this.getBoardsCount(!0)
},getPrivateBoardsCount:function(){return this.getBoardsCount(!1)},setHash:function(t){this.configurator.getHashService().setHash(this.applicationId+"="+t)}})});