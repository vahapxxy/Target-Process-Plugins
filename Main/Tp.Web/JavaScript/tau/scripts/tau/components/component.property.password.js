define(["Underscore","tau/components/component.creator","tau/models/model.property.password","tau/models/model.property.text.editable","tau/models/model.property.text.validation","tau/components/extensions/property/extension.property.password.editable","tau/ui/templates/property/ui.template.property.password"],function(_,creator,ModelPassword,ModelEditable,ModelValidation,ExtensionPasswordEditable,templatePassword){return{create:function(config){var creatorConfig={ModelType:ModelPassword,extensions:_.concat([config.extensions,ModelEditable,ModelValidation,ExtensionPasswordEditable]),template:templatePassword};return creator.create(creatorConfig,config)}}})