require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.scale.ordinal");suite.addBatch({ordinal:{topic:function(){return d3.scale.ordinal},domain:{"defaults to the empty array":function(a){assert.isEmpty(a().domain())},"new input values are added to the domain":function(a){var b=a().range(["foo","bar"]);assert.equal(b(0),"foo"),assert.deepEqual(b.domain(),["0"]),assert.equal(b(1),"bar"),assert.deepEqual(b.domain(),["0","1"]),assert.equal(b(0),"foo"),assert.deepEqual(b.domain(),["0","1"])},"setting the domain forgets previous values":function(a){var b=a().range(["foo","bar"]);assert.equal(b(1),"foo"),assert.equal(b(0),"bar"),assert.deepEqual(b.domain(),[1,0]),b.domain(["0","1"]),assert.equal(b(0),"foo"),assert.equal(b(1),"bar"),assert.deepEqual(b.domain(),["0","1"])},"uniqueness is based on string coercion":function(a){var b=a().domain(["foo"]).range([42,43,44]);assert.equal(b(new String("foo")),42),assert.equal(b({toString:function(){return"foo"}}),42),assert.equal(b({toString:function(){return"bar"}}),43)},"orders domain values by the order in which they are seen":function(a){var b=a();b("foo"),b("bar"),b("baz"),assert.deepEqual(b.domain(),["foo","bar","baz"]),b.domain(["baz","bar"]),b("foo"),assert.deepEqual(b.domain(),["baz","bar","foo"]),b.domain(["baz","foo"]),assert.deepEqual(b.domain(),["baz","foo"]),b.domain([]),b("foo"),b("bar"),assert.deepEqual(b.domain(),["foo","bar"])},"does not coerce domain values to strings":function(a){var b=a().domain([0,1]);assert.deepEqual(b.domain(),[0,1]),assert.typeOf(b.domain()[0],"number"),assert.typeOf(b.domain()[1],"number")},"does not barf on object built-ins":function(a){var b=a().domain(["__proto__","hasOwnProperty"]).range([42,43]);assert.equal(b("__proto__"),42),assert.equal(b("hasOwnProperty"),43),assert.deepEqual(b.domain(),["__proto__","hasOwnProperty"])}},range:{"defaults to the empty array":function(a){var b=a();assert.isEmpty(b.range()),assert.isUndefined(b(0))},"setting the range remembers previous values":function(a){var b=a();assert.isUndefined(b(0)),assert.isUndefined(b(1)),b.range(["foo","bar"]),assert.equal(b(0),"foo"),assert.equal(b(1),"bar")},"recycles values when exhausted":function(a){var b=a().range(["a","b","c"]);assert.equal(b(0),"a"),assert.equal(b(1),"b"),assert.equal(b(2),"c"),assert.equal(b(3),"a"),assert.equal(b(4),"b"),assert.equal(b(5),"c"),assert.equal(b(2),"c"),assert.equal(b(1),"b"),assert.equal(b(0),"a")}},"maps distinct values to discrete values":function(a){var b=a().range(["a","b","c"]);assert.equal(b(0),"a"),assert.equal(b("0"),"a"),assert.equal(b([0]),"a"),assert.equal(b(1),"b"),assert.equal(b(2),"c"),assert.equal(b(new Number(2)),"c")},rangePoints:{"computes discrete points in a continuous range":function(a){var b=a().domain(["a","b","c"]).rangePoints([0,120]);assert.deepEqual(b.range(),[0,60,120]),assert.equal(b.rangeBand(),0);var b=a().domain(["a","b","c"]).rangePoints([0,120],1);assert.deepEqual(b.range(),[20,60,100]),assert.equal(b.rangeBand(),0);var b=a().domain(["a","b","c"]).rangePoints([0,120],2);assert.deepEqual(b.range(),[30,60,90]),assert.equal(b.rangeBand(),0)},"can be set to a descending range":function(a){var b=a().domain(["a","b","c"]).rangePoints([120,0]);assert.deepEqual(b.range(),[120,60,0]),assert.equal(b.rangeBand(),0);var b=a().domain(["a","b","c"]).rangePoints([120,0],1);assert.deepEqual(b.range(),[100,60,20]),assert.equal(b.rangeBand(),0);var b=a().domain(["a","b","c"]).rangePoints([120,0],2);assert.deepEqual(b.range(),[90,60,30]),assert.equal(b.rangeBand(),0)}},rangeBands:{"computes discrete bands in a continuous range":function(a){var b=a().domain(["a","b","c"]).rangeBands([0,120]);assert.deepEqual(b.range(),[0,40,80]),assert.equal(b.rangeBand(),40);var b=a().domain(["a","b","c"]).rangeBands([0,120],.2);assert.deepEqual(b.range(),[7.5,45,82.5]),assert.equal(b.rangeBand(),30)},"setting domain recomputes range bands":function(a){var b=a().rangeRoundBands([0,100]).domain(["a","b","c"]);assert.deepEqual(b.range(),[1,34,67]),assert.equal(b.rangeBand(),33),b.domain(["a","b","c","d"]),assert.deepEqual(b.range(),[0,25,50,75]),assert.equal(b.rangeBand(),25)},"can be set to a descending range":function(a){var b=a().domain(["a","b","c"]).rangeBands([120,0]);assert.deepEqual(b.range(),[80,40,0]),assert.equal(b.rangeBand(),40);var b=a().domain(["a","b","c"]).rangeBands([120,0],.2);assert.deepEqual(b.range(),[82.5,45,7.5]),assert.equal(b.rangeBand(),30)}},rangeRoundBands:{"computes discrete rounded bands in a continuous range":function(a){var b=a().domain(["a","b","c"]).rangeRoundBands([0,100]);assert.deepEqual(b.range(),[1,34,67]),assert.equal(b.rangeBand(),33);var b=a().domain(["a","b","c"]).rangeRoundBands([0,100],.2);assert.deepEqual(b.range(),[7,38,69]),assert.equal(b.rangeBand(),25)},"can be set to a descending range":function(a){var b=a().domain(["a","b","c"]).rangeRoundBands([100,0]);assert.deepEqual(b.range(),[67,34,1]),assert.equal(b.rangeBand(),33);var b=a().domain(["a","b","c"]).rangeRoundBands([100,0],.2);assert.deepEqual(b.range(),[69,38,7]),assert.equal(b.rangeBand(),25)}},rangeExtent:{"returns the continuous range":function(a){var b=a().domain(["a","b","c"]).rangePoints([20,120]);assert.deepEqual(b.rangeExtent(),[20,120]);var b=a().domain(["a","b","c"]).rangeBands([10,110]);assert.deepEqual(b.rangeExtent(),[10,110]);var b=a().domain(["a","b","c"]).rangeRoundBands([0,100]);assert.deepEqual(b.rangeExtent(),[0,100]);var b=a().domain(["a","b","c"]).range([0,20,100]);assert.deepEqual(b.rangeExtent(),[0,100])},"can handle descending ranges":function(a){var b=a().domain(["a","b","c"]).rangeBands([100,0]);assert.deepEqual(b.rangeExtent(),[0,100])}},copy:{"changes to the domain are isolated":function(a){var b=a().range(["foo","bar"]),c=b.copy();b.domain([1,2]),assert.deepEqual(c.domain(),[]),assert.equal(b(1),"foo"),assert.equal(c(1),"foo"),c.domain([2,3]),assert.equal(b(2),"bar"),assert.equal(c(2),"foo"),assert.deepEqual(b.domain(),["1","2"]),assert.deepEqual(c.domain(),["2","3"])},"changes to the range are isolated":function(a){var b=a().range(["foo","bar"]),c=b.copy();b.range(["bar","foo"]),assert.equal(b(1),"bar"),assert.equal(c(1),"foo"),assert.deepEqual(c.range(),["foo","bar"]),c.range(["foo","baz"]),assert.equal(b(2),"foo"),assert.equal(c(2),"baz"),assert.deepEqual(b.range(),["bar","foo"]),assert.deepEqual(c.range(),["foo","baz"])},"changes to the range type are isolated":function(a){var b=a().domain([0,1]).rangeBands([0,1],.2),c=b.copy();b.rangePoints([1,2]),assert.inDelta(b(0),1,1e-6),assert.inDelta(b(1),2,1e-6),assert.inDelta(b.rangeBand(),0,1e-6),assert.inDelta(c(0),1/11,1e-6),assert.inDelta(c(1),6/11,1e-6),assert.inDelta(c.rangeBand(),4/11,1e-6),c.rangeBands([0,1]),assert.inDelta(b(0),1,1e-6),assert.inDelta(b(1),2,1e-6),assert.inDelta(b.rangeBand(),0,1e-6),assert.inDelta(c(0),0,1e-6),assert.inDelta(c(1),.5,1e-6),assert.inDelta(c.rangeBand(),.5,1e-6)}}}}),suite.export(module)