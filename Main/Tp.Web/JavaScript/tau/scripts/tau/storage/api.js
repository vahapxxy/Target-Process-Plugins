define(["tau/core/Class","jQuery","Underscore","./url.resolver"],function(a,$,_,b){var c=function(a){a=a||{};var b=["key","ownerId","scope","id","group","data","userData","publicData"],d=_.difference(_.keys(a),b);return _.each(d,function(b){a[b]=JSON.parse(a[b])}),a.publicData&&(a.publicData=c(a.publicData)),a.userData&&(a.userData=c(a.userData)),a},d=function(a){a=a||{};var b={};return _.each(_.keys(a),function(c){b[c]=JSON.stringify(a[c])}),b},e=function(a){if(!a)return null;var b=(a?JSON.parse(a):null)||{},d=[];return b.items?(_.each(b.items,function(a){d.push(c(a))}),d):c(b)};return a.extend({config:null,init:function(a){this.config=a||{},_.defaults(this.config,{service:$.ajax})},resolve:function(a){var c=c||a.$config,f=b.resolve(a.$config),g={url:f,dataType:"json",$scope:c,converters:{"text json":e}};if(c.$value){var h=_.clone(c.$value);h.userData=d(h.userData),h.publicData=d(h.publicData),g.type="POST",g.contentType="application/json; charset=utf-8",g.data=JSON.stringify(h)}var i={ajaxConfig:g,config:c};return this.config.service(g).done(function(b){i.data=b,b&&(b.publicData||b.userData)&&(i.value=_.extend(b.publicData||{},b.userData||{})),a.resolve(i)}).fail(function(b){i.data=b,a.reject(i)}),a},select:function(a,b){return b.$group=a,this.resolveDeferred(b)},data:function(a,b,c){_.isObject(b)&&(c=b,b=null),c&&!c.hasOwnProperty("publicData")&&!c.hasOwnProperty("userData")&&(c={userData:c});var d={$group:a,$key:b,$value:c};return this.resolveDeferred(d)},createDeferredCall:function(a){var b=$.Deferred();return b.$config=a,b},resolveDeferred:function(a){return this.resolve(this.createDeferredCall(a))}})})