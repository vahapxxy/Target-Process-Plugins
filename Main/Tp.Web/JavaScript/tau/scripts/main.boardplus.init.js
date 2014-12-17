define(["require","jQuery","Underscore","libs/parseUri","tau/service.container","tau/configurator","tau/services/service.navigator","tau/components/component.application.generic","tau/ui/extensions/application.generic/ui.extension.application.generic.boardSpecific","tau/components/extensions/extension.tracking.performance","tau/components/extensions/extension.views.menu.comet.listener","main.boardplus.login","main.boardplus.routes","tp/mashups.loader","Modernizr","tracking/tauspy"],function(e){function n(e){var n=new a;n._id=t.uniqueId("board_"),n.isBoardEdition=!0,n.setWindow(window),n.setFeaturesService(n.getWindow().tauFeatures),n.setLoggedUser(n.getWindow().loggedUser);var i=new s(n,{parameterName:e});return n.registerService("navigator",i),n}var i=e("jQuery"),t=e("Underscore"),o=e("libs/parseUri"),a=e("tau/service.container"),r=e("tau/configurator"),s=e("tau/services/service.navigator"),u=e("tau/components/component.application.generic"),c=e("tau/ui/extensions/application.generic/ui.extension.application.generic.boardSpecific"),p=e("tau/components/extensions/extension.tracking.performance"),d=e("tau/components/extensions/extension.views.menu.comet.listener"),l=e("main.boardplus.login"),g=e("main.boardplus.routes"),m=e("tp/mashups.loader");e("Modernizr"),e("tracking/tauspy"),r.isBoardEdition=!0,i(function(){var i="page",t=n(i),a=r.getGlobalBus();if(tauFeatures["load.progress"]){var s={},v=function(){a.removeAllListeners(s),setTimeout(function(){tauLoadProgress.activityEnd("app.init").remove()},4)};a.addEventListener("error",v,s),a.addEventListener("contentRendered",v,s)}new l(t,i).process().then(function(){var n={name:"application board",options:{applicationId:i},routes:g.createApplicationRoutes(),context:{configurator:t},extensions:[c,p,d]},a=u.create(n),r=function(){tauFeatures["load.progress"]&&tauLoadProgress.activityEnd("user.mashups").activity("app.init"),a.initialize(n)};o(location.href).hasQueryKey("nomashups")?r():t.getFeaturesService().isEnabled("mashups.loader")?m.initDeferred.done(function(){m.loadState.beforeAppInit.status.done(function(){r()
})}):e(["user/mashups"],function(){r()})})})});