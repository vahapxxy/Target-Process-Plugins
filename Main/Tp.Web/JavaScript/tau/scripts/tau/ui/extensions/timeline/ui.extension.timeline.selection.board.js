define(["jQuery","tau/ui/extensions/board.plus/ui.extension.board.plus.selection.board"],function(e,t){var l=function(e){return e.find(".tau-timeline-canvas")[0]};return t.extend({createSelectableContainers:function(e){var t=function(){return l(e).scrollHeight},i=function(){return l(e).scrollTop},n=function(t){l(e).scrollTop+=t},r=[{element:e.find(".tau-backlog-body")[0],getScrollHeight:t,applyVerticalScrollOffset:n,getVerticalScrollPosition:i,clipVertical:!1,rectSelectTriggers:".footer-pillow"},{element:e.find(".tau-timeline-canvas")[0],rectSelectTriggers:".tau-timeline-flow, .i-role-timeline-track, .i-role-timeline-card-holder, .footer-pillow"}];return r},"bus $selectable.ready:last + card.unselect":function(e,t,l){t.tauSelectable("reset",l)},"bus $selectable.ready:last+$selectionScope.ready:last+cardsData.ready:last":function(t,l,i,n){i.find(".i-role-selectable").each(function(t,l){this._applySelection(e(l),i,n.cards,n.isInitial)}.bind(this))}})});