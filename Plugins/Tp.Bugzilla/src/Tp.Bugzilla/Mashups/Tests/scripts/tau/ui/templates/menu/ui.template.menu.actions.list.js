define(["tau/core/templates-factory","tau/ui/templates/menu/ui.template.menu.actions.item"],function(a){var b={name:"menu-actions-list",markup:['<div class="ui-menu-actions">','   <div class=" ui-drop-down drop-down-list">','   {{tmpl(items) "menu-actions-item"}}',"   </div>","</div>"],dependencies:["menu-actions-item"]};return a.register(b)})