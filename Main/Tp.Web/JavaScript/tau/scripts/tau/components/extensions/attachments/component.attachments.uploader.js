define(["Underscore","jQuery","tau/configurator","tau/components/extensions/component.extension.base","tau/utils/utils.date","libs/jquery/jquery.fileupload","libs/jquery/jquery.iframe-transport"],function(_,$,a,b,c,d,e){var f=/<title\b[^>]*>(.*?)<\/title>/;return b.extend({"bus permissionsReady+afterRender":function(a){if(!this._initialized){this._initialized=!0,this.element=a.afterRender.data.element;var b=a.permissionsReady.data;b.editable&&b.deletable&&this._initUploader()}},_initUploader:function(){this._createToolbar(),this._bindUploader()},_createToolbar:function(){var a=$('<div class="uploader-toolbar"></div>'),b=this._createFileBrowser();a.append(b).prependTo(this.element),this._$fileInput=b.find("input"),/\bapple\b/i.test(navigator.vendor)&&this._$fileInput.removeAttr("multiple")},_bindUploader:function(){this._$fileInput.fileupload({url:this._getUploadUrl(),formData:this._getFormData(),add:$.proxy(this,"_onFileAdd")})},_createFileBrowser:function(){return $('<span class="fileBrowser"><i>Attach files</i></span>').append($('<input type="file" multiple/>'))},_getUploadUrl:function(){return a.getApplicationPath()+"/UploadFile.ashx"},_getFormData:function(){return[{name:"generalId",value:this._getGeneralId()}]},_getGeneralId:function(){return this.config.context.entity.id},_getGeneralType:function(){return this.config.context.entity.entityType.name},_onFileAdd:function(a,b){var c=this;if(!b.files||b.files.length==0)return;var d=this._createAttachmentDummy(b.files[0].name);d.appendTo(this._getAttachmentsPlaceholder()),b.submit().success(function(a){var b=c._getResponseText(a);try{var e=c._parseResponse(b)}catch(f){c._onAttachmentUploadFail(d);return}c.bus.fire("attachmentUploaded",{element:c._updateAttachmentElement(d,e),data:e})}).error(function(a,b,e){var g=a.responseText.match(f),h="Looks like application is not available. Please check your connection or server availability";g&&g.length>0&&(h=g[1]),c._onAttachmentUploadFail(d,h)})},_updateAttachmentElement:function(a,b){var c=this._createAttachmentElement(b);return a.replaceWith(c),c},_onAttachmentUploadFail:function(a,b){this._deleteFailedAttachmentElement(a,b)},_getResponseText:function(a){var b="";return typeof a=="string"?b=a:a.jquery&&(b=a.text()),b},_createAttachmentDummy:function(a){var b=this._createAttachmentElement({name:a});return b.addClass("uploading").find(".toolbar").remove(),b},_deleteFailedAttachmentElement:function(a,b){b=b||"Upload failed",this.fire("error",{message:b}),a.addClass("failed");var c=$('<p class="error"></p>').insertAfter(a.find(".name"));c.text("Upload failed"),a.fadeOut(1500,function(){a.remove()})},_getAttachmentsPlaceholder:function(){return this.element.find(".ui-attachments-content")},_createAttachmentElement:function(a){return $.tmpl("attachments-attachment",a)},_parseResponse:function(a){var b;try{b=JSON.parse(a),b=b.items||b,b=b.pop()}catch(d){}var e=c.parse(c.convertToTimezone(b[1])),f={id:b[0],uri:b[4],thumbnailUri:b[5],mimeType:b[3],name:b[2],ownerName:b[6][1]+" "+b[6][2],date:c.format.date.short(e)};return f}})})