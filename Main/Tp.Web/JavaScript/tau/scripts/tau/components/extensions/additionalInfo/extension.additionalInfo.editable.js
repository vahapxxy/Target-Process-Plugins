define(["jQuery","tau/components/extensions/component.extension.base"],function($,a){return a.extend({category:"edit",editableIndexes:null,init:function(){this._super.apply(this,arguments),this.onRowClickProxy=$.proxy(this.onRowClick,this)},"bus beforeComponentsInitialize":function(a){this.editableIndexes=[],this.createComponentList(a.data),this.attachListeners()},"bus afterRender":function(a){this.$el=a.data.element,this.addEditableBehaviour()},"bus refresh":function(){this.clearComponent()},createComponentList:function(a){this.components=[];for(var b=1;b<a.length;b+=2)this.components.push(a[b].component)},addEditableBehaviour:function(){for(var a=0;a<this.editableIndexes.length;a++)this.doEditableRow(this.editableIndexes[a])},attachListeners:function(){var a=this.components;if(a)for(var b=0;b<a.length;b++)a[b].on("permissionsReady",this.onPermissionsReady,this,{index:b})},removeListeners:function(){var a=this.components;if(a)for(var b=0;b<a.length;b++)a[b].removeListener("permissionsReady",this.onPermissionsReady,this)},onRowClick:function(a){var b=$(a.target);if(b.is("a")==1||b.parent().is("a")==1)return!0;a.stopPropagation(),a.data.component.fire("edit")},doEditableRow:function(a){var b=this.$el.find(" > tbody > tr").eq(a),c=this.onRowClickProxy;b.unbind("click",c),b.bind("click",{component:this.components[a]},c),b.addClass("ui-additionalinfo_editable_true")},onPermissionsReady:function(a){if(a.data.editable){var b=a.listenerData.index;this.$el?this.doEditableRow(b):this.editableIndexes.push(b)}},clearComponent:function(){this.removeListeners(),delete this.components,delete this.editableIndexes,delete this.$el},destroy:function(){this.clearComponent(),this._super()}})})