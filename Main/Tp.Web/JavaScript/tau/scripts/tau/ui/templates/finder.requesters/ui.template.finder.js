define(["tau/core/templates-factory","tau/ui/templates/finder.requesters/ui.template.finder.resultList","tau/ui/templates/finder.requesters/ui.template.finder.action","tau/ui/templates/finder.requesters/ui.template.finder.filter"],function(a){var b={name:"finder-requesters",markup:['<div class="ui-finder-placeHolder">','<div class="ui-finder-header">','<div class="visual-search ui-drop-down" role="filter">','{{tmpl() "finder-requesters-filter"}}',"</div>","</div>",'{{tmpl(result) "finder-requesters-resultList"}}',"</div>"],dependencies:["finder-requesters-resultList","finder-requesters-action","finder-requesters-filter"]};return a.register(b)})