define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,a){return a.extend({"bus afterRender":function(a){var b=a.data.element,c=b.find("[role=filter]"),d=c.find(":input"),e=c.find(":button"),f=this;this.state="clear",e.prop("disabled","disabled"),e.addClass("disable"),d.bind("change keyup",function(){f.state="dirty",e.prop("disabled",!1),e.removeClass("disable")});var g=function(a){var b={};d.each(function(){var a=$(this),c=_.trim(a.val());b[a.attr("name")]=c}),b.action=a,f.bus.fire("search.parametersBound",{parameters:b})};d.bind("keydown",function(a){switch(a.keyCode){case $.ui.keyCode.ENTER:g("search"),a.stopPropagation(),a.preventDefault();break;case $.ui.keyCode.DOWN:$(this).is("input")?$(this).blur():(a.stopPropagation(),a.preventDefault())}}),e.eq(0).click(function(){g($(this).val())}),e.eq(1).click(function(){var a={};d.each(function(){var b=$(this);b.val(null);var c=_.trim(b.val());a[b.attr("name")]=c}),a.action=$(this).val(),f.bus.fire("search.parametersBound",{parameters:a}),e.prop("disabled","disabled"),e.addClass("disable"),d.filter("[data-autofocus]").focus()});var h=d.filter("[name=companyId]"),i=d.filter("[name=type]"),j=function(){i.val()=="User"?(h.val(null),h.prop("disabled","disabled")):h.prop("disabled",!1)};j(),i.on("change",j)}})})