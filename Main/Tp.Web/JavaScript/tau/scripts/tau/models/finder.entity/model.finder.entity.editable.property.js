define(["Underscore","tau/core/model.editable.base"],function(e,i){return i.extend({"bus entitySelected":function(e,i){var t=this.config.propertyName;if(t){var n={};n[t]=null;var r=i.entity;r&&r.id&&(n[t]={id:r.id});var a=["id","name"],d={};d[t]=["id","name",{entityType:["id","name"]}],a.push(d);var o=this.config.context.entity;this.config.store.evictProperties(o.id,o.entityType.name,[t]),this.fire("save",{$set:n,$include:a})}}})});