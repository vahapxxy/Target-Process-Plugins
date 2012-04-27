require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.remove");suite.addBatch({"select(body)":{topic:function(){return d3.select("body")},"removes the matching elements":function(a){var b=a.append("div");b.remove(),assert.domNull(b[0][0].parentNode)},"does not remove non-matching elements":function(a){var b=a.append("div"),c=a.append("div");b.remove(),assert.domEqual(c[0][0].parentNode,document.body)},"ignores null nodes":function(a){var b=a.html("").selectAll("div").data([0,1]).enter().append("div"),c=d3.selectAll("div");c[0][0]=null,c.remove(),assert.domEqual(b[0][0].parentNode,document.body),assert.domNull(b[0][1].parentNode)},"returns the current selection":function(a){var b=a.append("div");assert.isTrue(b.remove()===b)}}}),suite.export(module)