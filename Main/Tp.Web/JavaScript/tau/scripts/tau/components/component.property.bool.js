define(["Underscore","tau/components/component.creator","tau/models/model.property.bool","tau/models/model.property.editable","tau/components/extensions/property/extension.property.refresher","tau/components/extensions/property/extension.property.bool.editable","tau/ui/templates/property/ui.template.bool"],function(a,b,c,d,e,f,g){return{create:function(h){var i=a.concat([h.extensions,e]);h.editable===!0&&(i=a.concat([i,f,d]));var j={ModelType:c,template:h.template||g,extensions:i};return b.create(j,h)}}})