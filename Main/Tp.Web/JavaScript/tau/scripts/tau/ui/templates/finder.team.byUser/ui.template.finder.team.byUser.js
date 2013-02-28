define(["tau/core/templates-factory","tau/ui/templates/board.context.filter/ui.template.board.context.filter.teams.list"],function(templates){var config={name:"finder.team.byUser",engine:"jqote2",markup:["<div>",'<div class="tau-actions i-role-tabheaders">','<div class="tau-assign-btn i-role-tabheader <% if (this.activeTab == "assign"){ %> tau-active <% } %>" data-tab="assign">',"<span></span>Assign to Team","</div>","</div>",'<div class="tau-tab-content">','<div class="tau-tab-pane tau-teams-list <% if (this.showSearch) { %>tau-teams-list_use_filter<% } %> i-role-tab-assign <% if (this.activeTab == "assign"){ %> tau-active <% } %> ">',"<% if (this.showSearch) { %>",'<div class="tau-search-team">','<span class="tau-inline-group tau-search">','<input name="filter" type="text" class="tau-in-text" placeholder="Search Teams" />','<button type="button" class="tau-btn tau-search"></button>',"</span>",'<i class="tau-pointer"></i>',"</div>","<% } %>",'<div class="tau-existing-team-holder">','<div class="tau-existing-team i-role-section-teams <% if (!this.teams.length) { %>tau-empty<% } %>">','<div class="tau-button-wrap">','<button class="tau-btn tau-primary" role="action-submit" type="button">Assign</button>',"</div>",'<ul class="tau-existing-team-list i-role-list">','<%= fn.sub("board.context.filter.teams.list", this.teams) %>',"</ul>",'<div class="tau-existing-team__message" data-text-nofound="No such team found" data-text-noitems="No available teams"></div>',"</div>","</div>","</div>","</div>","</div>"]};return templates.register(config)})