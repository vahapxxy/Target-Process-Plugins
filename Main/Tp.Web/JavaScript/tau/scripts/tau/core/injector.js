define(["require","Underscore","tau/core/class","tau/utils/utils.debug"],function(e){var r=e("Underscore"),s=e("tau/core/class"),t=e("tau/utils/utils.debug"),i=s.extend({init:function(){this._services={}},register:function(e,s){t.assertError(r.isString(e),"Service name should be a string"),t.assertError(""!==e,"Service error should not be empty"),t.assertWarn(function(){return!r.has(this._services,e)}.bind(this),'Re-assigning the service value for "'+e+'" service name could be an error'),t.assertError(null!==s&&void 0!==s,"Service should not be null or undefined"),this._services[e]=s},registerModule:function(e,r){this.register(e,this.createModule(r))},resolve:function(e){var r=this._services[e];if(!r)throw new Error('Service "'+e+'" is not registered');return r},release:function(e){t.assertWarn(function(){return r.has(this._services,e)}.bind(this),'Attempting to release an unregistered service by name "'+e+'".'),delete this._services[e]},releaseAll:function(){this._services={}},createModule:function(e){var s=e.__injectorDependencies;if(!s)return new e;var t=r.map(s,this.resolve,this);return e.apply({},t)}});return i.defineModule=function(e,s){var t=function(){return s.apply(this,arguments)};return t.__injectorDependencies=r.toArray(e),t},i});