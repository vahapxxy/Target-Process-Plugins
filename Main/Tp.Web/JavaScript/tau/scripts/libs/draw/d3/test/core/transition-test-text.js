require("../env");var assert=require("assert");module.exports={topic:function(){return d3.select("body").append("div").text("foo").transition().text("bar")},"sets the text tween":function(a){assert.typeOf(a.tween("text"),"function")},start:{topic:function(a){var b=this.callback,c=a.tween("text");a.tween("text",function(){var d=c.apply(this,arguments);return b(null,{transition:a,tween:d}),d})},"sets the text content as a string":function(a){assert.equal(a.transition[0][0].node.textContent,"bar")},"does not interpolate text":function(a){assert.isTrue(!a.tween)}}}