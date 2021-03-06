define([
    'Underscore'
    , 'tau/core/extension.base'
], function(_, ExtensionBase) {
    return ExtensionBase.extend({
        'bus afterInit': function(evtData, initConfig){
            var configurator = initConfig.config.context.configurator;
            var service = configurator.service('mashup.manager');
            service.getProfile().done(_.bind(function(profile){
                this.fire('dataBind', profile.Settings.MashupNames);
            }, this))
        }
    });
});