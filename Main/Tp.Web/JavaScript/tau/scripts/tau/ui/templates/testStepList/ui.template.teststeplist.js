define(["tau/core/templates-factory"],function(e){var t={engine:"jqote2",name:"test-step-list",markup:['<div class="test-case_list i-role-list">','<div class="test-case-description">','<div class="test-case-description_title ">','<div class="test-case-description_colom">Step</div>','<div class="test-case-description_colom">Expected result</div>',"</div>","<% _.each(this.items, function(item) { %>",'<div class="test-case-description_rows tau-teststep i-role-teststep" data-id="<%= item.id %>">','<div class="test-case-description_colom">','<div class="tau-in-text i-role-property i-role-editable"><%= fn.sanitize(item.description) %></div>',"</div>",'<div class="test-case-description_colom">','<div class="tau-in-text i-role-property i-role-editable"><%= fn.sanitize(item.result) %></div>',"</div>",'<span class="tau-icon-general tau-icon-list-lanes-gray"/>','<span class="tau-icon-general tau-icon-close-red i-role-remove"/>',"</div>","<% }); %>",'<div class="test-case-description_rows tau-teststep i-role-teststep">','<div class="test-case-description_colom">','<div class="tau-in-text disable i-role-property i-role-editable">Add step</div>',"</div>",'<div class="test-case-description_colom">','<div class="tau-in-text disable i-role-property i-role-editable">Add result</div>',"</div>",'<span class="tau-icon-general tau-icon-list-lanes-gray"/>','<span class="hidden tau-icon-general tau-icon-close-red i-role-remove"/>',"</div>","</div>","</div>"].join("")};return e.register(t)});