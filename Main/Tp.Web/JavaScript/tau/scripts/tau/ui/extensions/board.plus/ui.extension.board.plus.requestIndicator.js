define(["jQuery","app.path","tau/components/extensions/component.extension.base"],function($,a,b){return b.extend({"bus afterRender":function(b){this.fire("template.bind",{name:"boardplus.request.indicator",data:{imageSrc:a.get()+"/JavaScript/tau/css/images/loader-yellow.gif"}})},"bus template.boardplus.request.indicator.bound+afterRender":function(a){var b=a["template.boardplus.request.indicator.bound"].data.element;a.afterRender.data.element.append(b)},"bus template.boardplus.request.indicator.bound:last+model.requestBegin":function(a){var b=a["template.boardplus.request.indicator.bound"].data.element;b.show()},"bus template.boardplus.request.indicator.bound:last+model.requestCompleted":function(a){var b=a["template.boardplus.request.indicator.bound"].data.element;b.hide()}})})