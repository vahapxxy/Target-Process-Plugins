define(["jQuery","tau/components/extensions/component.extension.base","tau/ui/extensions/board.plus/ui.board.plus.utils"],function($,a,b){return a.extend({"bus afterRender":function(a){var c=a.data.element,d=this,e=c.find(".i-role-grid"),f=c.find(".i-role-header"),g=f.find(".i-role-cellholder"),h=c.find("[role=action-focus]"),i=c.find("[role=action-unfocus]");f.delegate("[name=focus]","change",function(){var a=$(this).parents(".i-role-cellholder:first"),c=a.parents(".i-role-header:first").data("dimension"),d=b.dimension(e,a).add(a);d.toggleClass("tau-selected_"+c),d.each(function(){var a=$(this);a.toggleClass("tau-selected",a.hasClass("tau-selected_x")||a.hasClass("tau-selected_y"))});var g=f.find("[name=focus]:checked");g.length?h.prop("disabled",!1):h.prop("disabled",!0)}),h.on("click",function(){var a={};f.each(function(){var b=$(this),c=a[b.data("dimension")]=[];b.find(".i-role-cellholder:has([name=focus]:checked)").each(function(){c.push(this.id)})}),d.fire("view.axis.focus.executed",{focus:!0,values:a})}),i.on("click",function(){d.fire("view.axis.focus.executed",{focus:!1,values:[]})})},"bus afterRender:last+settings.focus.provided:last":function(a){var c=_.values(a)[0].data.element,d=_.values(a)[1].data||{},e=this,f=c.find(".i-role-grid"),g=c.find(".i-role-header");c.find(".i-role-cellholder").removeClass("tau-selected").removeClass("tau-selected_x").removeClass("tau-selected_y"),g.find("input[name=focus]").prop("checked",!1);var h=c.find("[role=action-focus]"),i=c.find("[role=action-unfocus]");if(!d.focus){var j={};g.each(function(){var a=$(this),c=a.attr("data-dimension"),d=a.find(".i-role-cellholder");d.each(function(){var a=$(this),d=b.isHidden(a);if(!d)return;a.attr("data-is-hidden",""),j[c]=!0;var e=b.dimension(f,a).add(a);e.show()})}),i.prop("disabled",!0),h.prop("disabled",!0),e.fire("view.axis.focus.executed.after",j)}else if(d.focus===!0){var j={},k=d.values;g.each(function(){var a=$(this),c=a.attr("data-dimension"),d=k[c];if(d&&d.length){var e=a.find(".i-role-cellholder");e.each(function(){var a=$(this),e=b.isHidden(a);if(!_.inArray(this.id,d)){a.attr("data-is-hidden","1"),j[c]=!0;var g=b.dimension(f,a).add(a);g.hide()}else if(e){a.attr("data-is-hidden",""),j[c]=!0;var g=b.dimension(f,a).add(a);g.show()}})}}),i.prop("disabled",!1),h.prop("disabled",!0),e.fire("view.axis.focus.executed.after",j)}}})})