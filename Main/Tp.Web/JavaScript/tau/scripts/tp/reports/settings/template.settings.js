define(["tau/nls/translator","tau/core/templates-factory","tau/ui/templates/board.editor/ui.template.board.editor.filter","tau/extensions/extension.underscore"],function(T,templates,dummy,_){var config={name:"report.processControl.settings",engine:"jqote2",markup:_.flatten(['<div class="tau-chart-settings-controls">','	<span class="tau-inline-group tau-chart-time-switch _time-switch">','       <% _.forEach(this.times, function(item){ %><button type="button" data-val="<%= item.id %>" data-axislabel="<%= item.label %>" data-startdatefilter="<%= item.startDateFilter%>" class="tau-btn<% if (item.default) { %> tau-checked<% } %>"><%= item.name %></button><% }); %>',"    </span>",'    <span class="tau-chart-entities _entities">',"<% _.forEach(this.entities, function(item){ %>","			<label>",'				<input type="checkbox" name="entities" value="<%= item.id %>" <% if (item.default) { %> checked="checked" <% } %> style="position: absolute; left: -99999px;" />','               <button type="button" class="tau-btn tau-<%= item.id %><% if (item.default) { %> tau-checked<% } %>"><%= item.name %></button>',"            </label>","<% }); %>","    </span>",'<%= fn.sub("board.editor.filter", {name: "data", filter: this.filter}) %>',"</div>"]),dependencies:[]};return templates.register(config)})