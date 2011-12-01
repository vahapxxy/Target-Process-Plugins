define(["tau/core/model-base","tau/configurator","tau/core/dates","libs/date.format"],function(a,b,c){function e(a,b){this.model=a,this.filterCallback=b||d}var d=function(){return!0};e.prototype={getAssignableRetrievedCallback:function(){return{scope:this,success:this.onAssignableRetrieved}},onAssignableRetrieved:function(a){this.assignable=a.data;var b={items:this.getAttachments()},c=this.getSelected();c&&(b.selected=c),this.model.data=b,this.model.bus.fire("dataBind",b)},each:function(a){var b=this.assignable.attachments,c=b.length;for(var d=0;d<c;d++){var e=b[d];this.filterCallback(e)&&a(e)}},getAttachments:function(){var a=this,b=[],c=a.model.config.selected,d=function(d){var e=a.attachmentDTOToModelAttachment(d);b.push(e),c&&d.id==c.id&&(a.selected=e,e.selected=!0)};this.each(d);return b},attachmentDTOToModelAttachment:function(a){var b=c.fromStringToDate(a.date);return{id:a.id,name:a.name,mimeType:a.mimeType,ownerName:[a.owner.firstName," ",a.owner.lastName].join(""),date:dateFormat(b,this.model.config.context.applicationContext.culture.shortDateFormat),thumbnailUri:a.thumbnailUri,uri:a.uri}},getSelected:function(){return this.selected}};var f=a.extend({init:function(a,b,c){this.name="Attachment Model",this._super.apply(this,arguments),this.filter=this.config.filter||c},_getFields:function(){var a=[{attachments:["id","date","name","mimeType","uri","thumbnailUri",{owner:["id","firstName","lastName"]}]}];return a},onInit:function(){var a=this.config.context.entity,b=new e(this,this.filter),c=this._getFields();this.store.get(a.entityType.name,{id:a.id,fields:c},b.getAssignableRetrievedCallback()).done()},setSelected:function(a){if(this.config.selected.id!=a.id){var b=this.data.items,c=null;for(var d=0;d<b.length;d++)if(b[d].id==a.id){c=b[d];break}c&&(this.config.selected=c,this.fire("selectedChanged",{attachment:a}))}},next:function(){var a=this.data.items,b=null,c=this.config.selected;for(var d=0;d<a.length;d++)if(a[d].id==c.id){b=a[d];break}b&&(d==a.length-1&&(d=-1),this.setSelected(a[d+1]))},prev:function(){var a=this.data.items,b=null,c=this.config.selected;for(var d=0;d<a.length;d++)if(a[d].id==c.id){b=a[d];break}b&&(d==0&&(d=a.length),this.setSelected(a[d-1]))},close:function(){this.fire("close")},"bus attachmentUploaded":function(a){var b=this,c=[{general:["id"]}].concat(b._getFields()[0].attachments);b.store.save("attachment",{id:a.data.data.id,$set:{},fields:c}).done({success:function(){b.bus.fire("attachmentUploadCompleted",{element:a.data.element})}})}});return f})