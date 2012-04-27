require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.mean");suite.addBatch({mean:{topic:function(){return d3.mean},"returns the mean value for numbers":function(a){assert.equal(a([1]),1),assert.equal(a([5,1,2,3,4]),3),assert.equal(a([20,3]),11.5),assert.equal(a([3,20]),11.5)},"ignores null, undefined and NaN":function(a){assert.equal(a([NaN,1,2,3,4,5]),3),assert.equal(a([1,2,3,4,5,NaN]),3),assert.equal(a([10,null,3,undefined,5,NaN]),6)},"can handle large numbers without overflowing":function(a){assert.equal(a([Number.MAX_VALUE,Number.MAX_VALUE]),Number.MAX_VALUE),assert.equal(a([-Number.MAX_VALUE,-Number.MAX_VALUE]),-Number.MAX_VALUE)},"returns undefined for empty array":function(a){assert.isUndefined(a([])),assert.isUndefined(a([null])),assert.isUndefined(a([undefined])),assert.isUndefined(a([NaN])),assert.isUndefined(a([NaN,NaN]))},"applies the optional accessor function":function(a){assert.equal(d3.mean([[1,2,3,4,5],[2,4,6,8,10]],function(a){return d3.mean(a)}),4.5),assert.equal(d3.mean([1,2,3,4,5],function(a,b){return b}),2)}}}),suite.export(module)