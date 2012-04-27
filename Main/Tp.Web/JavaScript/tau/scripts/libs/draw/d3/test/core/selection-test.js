require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.selection");suite.addBatch({selection:{topic:function(){return d3.selection()},"selects the document":function(a){assert.equal(a.length,1),assert.equal(a[0].length,1),assert.equal(a[0][0],document)},"is an instanceof d3.selection":function(a){assert.instanceOf(a,d3.selection)},"subselections are also instanceof d3.selection":function(a){assert.instanceOf(a.select("body"),d3.selection),assert.instanceOf(a.selectAll("body"),d3.selection)},"selection prototype can be extended":function(a){d3.selection.prototype.foo=function(a){return this.attr("foo",a)},a.select("body").foo(42),assert.equal(document.body.getAttribute("foo"),"42"),delete d3.selection.prototype.foo}}}),suite.export(module)