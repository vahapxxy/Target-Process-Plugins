require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.insert");suite.addBatch({"select(body)":{topic:function(){return d3.select("body").html("")},"inserts before the specified selector":function(a){var b=a.html("").append("span"),c=a.insert("div","span");assert.equal(c[0][0].tagName,"DIV"),assert.isNull(c[0][0].namespaceURI),assert.domEqual(c[0][0],document.body.firstChild),assert.domEqual(c[0][0].nextSibling,b[0][0])},"appends an HTML element":function(a){var b=a.insert("div");assert.equal(b[0][0].tagName,"DIV"),assert.isNull(b[0][0].namespaceURI),assert.domEqual(b[0][0],document.body.lastChild)},"appends an SVG element":function(a){var b=a.insert("svg:svg");assert.equal(b[0][0].tagName,"SVG"),assert.equal(b[0][0].namespaceURI,"http://www.w3.org/2000/svg"),assert.domEqual(b[0][0].parentNode,document.body),assert.domEqual(b[0][0],document.body.lastChild)},"propagates data to new element":function(a){var b=new Object,c=a.data([b]).insert("div");assert.strictEqual(c[0][0].__data__,b)},"returns a new selection":function(a){assert.isFalse(a.insert("div")===a)},"inherits namespace from parent node":function(a){var b=a.insert("svg:svg").insert("g");assert.equal(b[0][0].namespaceURI,"http://www.w3.org/2000/svg")}}}),suite.addBatch({"selectAll(div)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().insert("div")},"appends an HTML element":function(a){var b=a.insert("span");assert.equal(b[0].length,2),assert.equal(b[0][0].tagName,"SPAN"),assert.equal(b[0][1].tagName,"SPAN"),assert.isNull(b[0][0].namespaceURI),assert.isNull(b[0][1].namespaceURI),assert.domEqual(b[0][0].parentNode,a[0][0]),assert.domEqual(b[0][1].parentNode,a[0][1]),assert.domEqual(a[0][0].lastChild,b[0][0]),assert.domEqual(a[0][1].lastChild,b[0][1])},"appends an SVG element":function(a){var b=a.insert("svg:svg");assert.equal(b[0].length,2),assert.equal(b[0][0].tagName,"SVG"),assert.equal(b[0][1].tagName,"SVG"),assert.equal(b[0][0].namespaceURI,"http://www.w3.org/2000/svg"),assert.equal(b[0][1].namespaceURI,"http://www.w3.org/2000/svg"),assert.domEqual(b[0][0].parentNode,a[0][0]),assert.domEqual(b[0][1].parentNode,a[0][1]),assert.domEqual(a[0][0].lastChild,b[0][0]),assert.domEqual(a[0][1].lastChild,b[0][1])},"ignores null nodes":function(a){a.html("");var b=d3.selectAll("div");b[0][1]=null;var c=b.insert("span");assert.equal(c[0].length,2),assert.equal(c[0][0].tagName,"SPAN"),assert.domNull(c[0][1]),assert.domEqual(c[0][0].parentNode,a[0][0]),assert.domEqual(a[0][0].lastChild,c[0][0]),assert.domNull(a[0][1].lastChild)},"propagates data to new elements":function(a){var b=new Object,c=new Object,d=a.data([b,c]).insert("span");assert.strictEqual(d[0][0].__data__,b),assert.strictEqual(d[0][1].__data__,c)},"returns a new selection":function(a){assert.isFalse(a.insert("div")===a)}}}),suite.addBatch({"selectAll(div).data(…).enter()":{topic:function(){return d3.select("body")},"inserts before the specified selector":function(a){var b=a.html("").append("span"),c=a.selectAll("div").data(d3.range(2)).enter().insert("div","span");assert.equal(c.length,1),assert.equal(c[0].length,2),assert.domEqual(c[0][0],document.body.firstChild),assert.domEqual(c[0][1].previousSibling,c[0][0]),assert.domEqual(c[0][1].nextSibling,b[0][0])},"propagates data to new elements":function(a){var b=new Object,c=new Object,d=a.html("").selectAll("div").data([b,c]).enter().insert("div");assert.strictEqual(d[0][0].__data__,b),assert.strictEqual(d[0][1].__data__,c)},"ignores null nodes":function(a){a.html("").insert("div");var b=a.selectAll("div").data(d3.range(3)).enter().insert("div");assert.equal(b.length,1),assert.equal(b[0].length,3),assert.domNull(b[0][0]),assert.domEqual(b[0][1].parentNode,document.body),assert.domEqual(b[0][2].parentNode,document.body)},"returns a new selection":function(a){var b=a.html("").selectAll("div").data([0,1]).enter();assert.isFalse(b.insert("div")===b)}}}),suite.export(module)