define(["Underscore","tau/core/model-base"],function(_,a){var b=a.extend({"bus afterInit":function(a){this.fire("dataBind",{data:[1,2,3]})},"bus afterRender":function(a){this.fire("component.ready",a.data)}});return b})