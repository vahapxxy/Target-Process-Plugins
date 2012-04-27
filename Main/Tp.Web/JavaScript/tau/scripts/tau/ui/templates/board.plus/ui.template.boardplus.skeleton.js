define(["Underscore","tau/core/templates-factory","tau/ui/extensions/board.plus/ui.board.plus.utils"],function(_,a,b){var c={name:"boardplus.skeleton",engine:"jqote2",customFunctions:{generateId:b.generateId,generateCellData:b.generateElementData},markup:['<% var hasX = !(this.marksX.length === 1 && this.marksX[0].x === "-1"); %>','<% var hasY = !(this.marksY.length === 1 && this.marksY[0].y === "-1"); %>','<div class="tau-board tau-board_animate_false <% if (!hasX && !hasY) { %> tau-board-list<% } %>">','<div class="tau-board-header">','<div class="i-role-name tau-board-name"><%= this.name %></div>','<span class="tau-btn-group tau-focuser">','<button role="action-focus" disabled=""    class="tau-btn tau-focus-in">focus</button>','<button role="action-unfocus" disabled=""  class="tau-btn tau-close tau-focus-out"></button>',"</span>",'<span class="tau-zoomer ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">','<a href="#" class="ui-slider-handle ui-state-default ui-corner-all" style="left: 100%;"></a>',"</span>","</div>",'<div class="tau-board-body">','<div class="tau-board-grid-view">','<div role="board-body" class="i-role-board-body">',"<% if (hasX && hasY) { %>",'<div class="tau-x-header">',"</div>","<% } %>","<% if (hasY) { %>",'<div role="header" data-dimension="y" class="i-role-header tau-rows-header">',"<ul>","<% for (var y = 0; y < this.marksY.length; y++) { %>","<% var m = this.marksY[y]; %>",'<li role="cellholder" class="i-role-cellholder" id="ch_<%= fn.generateId(m) %>" <%= fn.generateCellData({y:m.y}) %>>','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(m) %>" <%= fn.generateCellData({y:m.y}) %>>',"</div>","</li>","<% } %>","</ul>","</div>","<% } %>","<% if (hasX) { %>",'<div role="header" data-dimension="x" class="i-role-header tau-cols-header">',"<ul>","<% for (var x = 0; x < this.marksX.length; x++) { %>","<% var m = this.marksX[x]; %>",'<li role="cellholder" class="i-role-cellholder" id="ch_<%= fn.generateId(m) %>" <%= fn.generateCellData({x:m.x}) %>>','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(m) %>" <%= fn.generateCellData({x:m.x}) %>>',"</div>","</li>","<% } %>","</ul>","</div>","<% } %>",'<div role="grid" class="i-role-grid tau-grid" id="grid_<%= _.uniqueId() %>">',"<table>","<tbody>","<% for (var y = 0; y < this.marksY.length; y++) { %>","<% var rowCoords = { y: this.marksY[y].y }; %>","<tr>","<% for (var x = 0; x < this.marksX.length; x++) { %>","<% var coords = { x: this.marksX[x].x, y: this.marksY[y].y }; %>",'<td role="cellholder" class="i-role-cellholder" id="ch_<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords) %> >','<div role="cell" class="i-role-cell tau-cell" id="<%= fn.generateId(coords) %>" <%= fn.generateCellData(coords) %>>',"</div>","</td>","<% } %>","</tr>","<% } %>","</tbody>","</table>","</div>","</div>","</div>","</div>","</div>"],dependencies:[]};return a.register(c)})