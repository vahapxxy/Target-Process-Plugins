define(["tau/components/component.creator","tau/core/component-base","tau/core/view-base","tau/components/extensions/application/extension.history","tau/components/extensions/application/extension.routing","tau/components/extensions/application/extension.routing.patterns","tau/components/extensions/application/extension.integration","tau/components/extensions/application/extension.navigation","tau/components/extensions/error/extension.errorBar","tau/ui/extensions/popup/ui.extension.popup","tau/components/extensions/application/extension.controller.entity","tau/ui/templates/application/ui.template.application"],function(a,b,c,d,e,f,g,h,i,j,k,l){return{create:function(a){a=a||{onCreate:function(){}};var m={name:"application component",template:l},n=new b(m);return n.attach(e,a).attach(f,a).attach(d,a).attach(g,a).attach(h,a).attach(i,a).attach(k,a).attach(c),a.integration&&a.integration.showInPopup===!0&&n.attach(j,a),n.bus}}})