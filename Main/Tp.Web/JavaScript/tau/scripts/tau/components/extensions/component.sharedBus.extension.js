define(["Underscore","tau/components/extensions/component.extension.base"],function(e,i){var n=/^(public\.|parent\.)(.+)/i,r=/^(public\.)(.+)/i;return i.extend({"bus beforeComponentsInitialize":function(i,n){var r=e.pluck(n,"component");this.wrapChildrenBuses(r),this.wrapOwnBus(r)},wrapChildrenBuses:function(i){var r=this;return e.each(i,e.bind(function(a){a.originalFire=a.fire,a.fire=function(t){var l=n.exec(t);if(null!=l)switch(l[1]){case"public.":r.fire.apply(r,arguments),e.each(i,function(e){e!==a&&e.originalFire.apply(e,arguments)});break;case"parent.":var u=Array.prototype.slice.call(arguments,0);u[0]="child."+a.name+"."+l[2],r.fire.apply(r,u)}a.originalFire.apply(a,arguments)}},this)),r},wrapOwnBus:function(i){var n=this.bus,a=n.fire;n.firePublicToChildren=function(){var n=arguments;e.each(i,function(e){e.originalFire.apply(e,n),e.firePublicToChildren&&e.firePublicToChildren.apply(e,n)})},n.fire=function(e){var i=r.exec(e);if(null!=i){var t=Array.prototype.slice.call(arguments,0);t[0]="public."+i[2],n.firePublicToChildren.apply(n,t)}a.apply(n,arguments)}}})});