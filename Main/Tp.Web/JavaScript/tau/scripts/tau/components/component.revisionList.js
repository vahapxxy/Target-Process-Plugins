define(["tau/components/component.list.creator","tau/models//model.revisionList","tau/ui/extensions/testCaseList/ui.extension.testCaseList","tau/ui/templates/revisionList/ui.template.revisionList","tau/ui/extensions/revisionList/ui.extension.revisionList.showDiff","tau/ui/templates/common/ui.template.entityLink"],function(a,b,c,d,e){return{create:function(f){var g={template:d,extensions:[b,c,e],message:"No revisions found"};return a.create(g,f)}}})