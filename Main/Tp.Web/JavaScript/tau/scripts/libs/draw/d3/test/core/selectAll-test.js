require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.selectAll");suite.addBatch({selectAll:{topic:function(){var a=d3.select("body").html("");return a.append("span").attr("class","f00").attr("id","b4r").attr("name","b4z"),a.append("div").attr("class","foo").attr("id","bar").attr("name","baz"),a},"selects by element name":function(){var a=d3.selectAll("div");assert.equal(a[0][0].tagName,"DIV")},"selects by class name":function(){var a=d3.selectAll(".foo");assert.equal(a[0][0].className,"foo")},"selects by id":function(){var a=d3.select("div#bar");assert.equal(a[0][0].id,"bar")},"selects by attribute value":function(){var a=d3.selectAll("[name=baz]");assert.equal(a[0][0].getAttribute("name"),"baz")},"selects by array":function(){var a=d3.selectAll([document.body.lastChild]);assert.isTrue(a[0][0]===document.body.lastChild),assert.lengthOf(a,1),assert.lengthOf(a[0],1)},"groups are not instances of NodeList":function(){var a=d3.select("body").selectAll(function(){return this.getElementsByClassName("div")});assert.isFalse(a[0]instanceof window.NodeList)}}}),suite.export(module)