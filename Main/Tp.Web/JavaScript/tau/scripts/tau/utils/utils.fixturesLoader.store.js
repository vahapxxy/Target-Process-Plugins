define(["Underscore","tau/core/class","tau/utils/utils.fixturesLoader","tau/extensions/extension.underscore.async"],function(_,a,b){var c=a.extend({_callbacks:function(a,b,c,d){b.failure&&b.success?c?b.failure.call(a,c):b.success.call(a,d):b(c,d)},init:function(a){this.store=a.store,this.real=a.real||!1;var c;this.real?c={generateId:!1,setType:!1,setBackRefs:!0}:c={generateId:!0,setType:!0,setBackRefs:!1},this.loader=a.loader||new b(c)},registerSchema:function(a){this.loader.registerSchema(a)},load:function(a,b){var c=this.store,d=null;try{d=this.loader.load(a)}catch(e){this._callbacks(this,b,e);return}if(this.real===!1){var a=[];_.forEach(d,function(b,c){a=a.concat(_.values(b))}),this.store.config.proxy.registerData(a),this._callbacks(this,b,null,{data:d});return}a=d;var f=[];_.forEach(a,function(a,b){_.forEach(a,function(a,c){var d={entityType:b,$set:{},fields:["id"],commandId:[b,c].join(":"),callbacks:{success:function(b){a.id=b.data.id}},after:[]};if(a.id)return;_.forEach(a,function(a,b){if((_.isString(a)||_.isNumber(a)||_.isBoolean(a))&&b!=="__type"||_.isArray(a)&&a.length&&a[0].hasOwnProperty("id")==0)d.$set[b]=a,d.fields.push(b)}),_.forEach(a,function(b,c){_.isObject(b)&&!_.isArray(b)?(d.$set[c]={id:function(a){return function(){return a[c].id}}(a)},d.after.push(c)):_.isArray(b)&&b.length&&b[0].hasOwnProperty("id")&&b[0].id&&(d.$set[c]=[],_.forEach(b,function(a){d.$set[c].push({id:function(a){return function(){return a.id}}(a)})}),d.after.push(c))}),f.push(d)})}),f=_.sortBy(f,function(a){return a.after.length});var g=[];_.forEach(f,function(a){g.push(function(b){_.forEach(a.$set,function(a){if(a.id&&_.isFunction(a.id)){var b=a.id();b&&(a.id=b)}else _.isArray(a)&&a.length&&_.isFunction(a[0].id)&&_.forEach(a,function(b,c){var d=b.id();d&&(a[c].id=d)})}),c.save(a.entityType,{$set:a.$set,fields:a.fields},a.callbacks).done({success:function(){b()},failure:function(a){b(a[0])}})})}),_.series(g,function(c,d){b(c,{data:a})})},clean:function(a,b){if(this.real===!1){var c=[];_.forEach(a,function(a,b){c=c.concat(_.values(a))});var d=this.store;_.forEach(c,function(a){d.config.proxy.evictPersistedObject(a.id,a.__type)}),b.success.call(this,{});return}var d=this.store,c=[];_.forEach(a,function(a,b){c=c.concat(_.values(a))});var e=[];_.forEach(c,function(a){e.push(function(b){d.remove(a.__type,{id:a.id}).done({success:function(){b()},failure:function(){b()}})})}),_.series(e,function(a,d){a?b.failure.call(this,a):b.success.call(this,{data:c})})}});return c})