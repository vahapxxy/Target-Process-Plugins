define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/core/templates-factory"],function(_,$,a,b){return a.extend({"bus template.bind":function(a){var c=a.data,d=c.name,e=c.data,f=c.config||{},g=b.get(d),h=g.bind(f,e);c.element=h,this.fire("template."+d+".bound",c)},"bus template.pure.bind":function(a){var c=a.data,d=c.name,e=c.data,f=c.config||{},g=b.get(d),h=g.bindPure(f,e);c.html=h,this.fire("template."+d+".pure.bound",c)}})})