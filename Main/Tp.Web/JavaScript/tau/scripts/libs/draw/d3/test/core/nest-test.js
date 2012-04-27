require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.nest");suite.addBatch({entries:{topic:function(){return d3.nest},"returns an array of each distinct key in arbitrary order":function(a){var b=a().key(function(a){return a.foo}).entries([{foo:1},{foo:1},{foo:2}]).map(function(a){return a.key}).sort(d3.ascending);assert.deepEqual(b,["1","2"])},"each entry is a key-values object, with values in input order":function(a){var b=a().key(function(a){return a.foo}).entries([{foo:1,bar:0},{foo:2},{foo:1,bar:1}]);assert.deepEqual(b,[{key:"1",values:[{foo:1,bar:0},{foo:1,bar:1}]},{key:"2",values:[{foo:2}]}])},"keys can be sorted using an optional comparator":function(a){var b=a().key(function(a){return a.foo}).sortKeys(d3.descending).entries([{foo:1},{foo:1},{foo:2}]).map(function(a){return a.key});assert.deepEqual(b,["2","1"])},"values can be sorted using an optional comparator":function(a){var b=a().key(function(a){return a.foo}).sortValues(function(a,b){return a.bar-b.bar}).entries([{foo:1,bar:2},{foo:1,bar:0},{foo:1,bar:1},{foo:2}]);assert.deepEqual(b,[{key:"1",values:[{foo:1,bar:0},{foo:1,bar:1},{foo:1,bar:2}]},{key:"2",values:[{foo:2}]}])},"values can be aggregated using an optional rollup":function(a){var b=a().key(function(a){return a.foo}).rollup(function(a){return d3.sum(a,function(a){return a.bar})}).entries([{foo:1,bar:2},{foo:1,bar:0},{foo:1,bar:1},{foo:2}]);assert.deepEqual(b,[{key:"1",values:3},{key:"2",values:0}])},"multiple key functions can be specified":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).entries([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,[{key:"0",values:[{key:"1",values:[[0,1]]},{key:"2",values:[[0,2],[0,2]]}]},{key:"1",values:[{key:"1",values:[[1,1]]},{key:"2",values:[[1,2]]}]}])},"the rollup function only applies to leaf values":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).rollup(function(a){return a.length}).entries([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,[{key:"0",values:[{key:"1",values:1},{key:"2",values:2}]},{key:"1",values:[{key:"1",values:1},{key:"2",values:1}]}])},"the value comparator only applies to leaf values":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).sortValues(function(a,b){return a[2]-b[2]}).entries([[0,1],[0,2,1],[1,1],[1,2],[0,2,0]]);assert.deepEqual(b,[{key:"0",values:[{key:"1",values:[[0,1]]},{key:"2",values:[[0,2,0],[0,2,1]]}]},{key:"1",values:[{key:"1",values:[[1,1]]},{key:"2",values:[[1,2]]}]}])},"the key comparator only applies to the last-specified key":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.descending).entries([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,[{key:"0",values:[{key:"2",values:[[0,2],[0,2]]},{key:"1",values:[[0,1]]}]},{key:"1",values:[{key:"2",values:[[1,2]]},{key:"1",values:[[1,1]]}]}]);var b=a().key(function(a){return a[0]}).sortKeys(d3.descending).key(function(a){return a[1]}).sortKeys(d3.ascending).entries([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,[{key:"1",values:[{key:"1",values:[[1,1]]},{key:"2",values:[[1,2]]}]},{key:"0",values:[{key:"1",values:[[0,1]]},{key:"2",values:[[0,2],[0,2]]}]}])},"if no keys are specified, the input array is returned":function(a){var b=[new Object];assert.strictEqual(a().entries(b),b)}}}),suite.addBatch({map:{topic:function(){return d3.nest},"returns a map of each distinct key":function(a){var b=a().key(function(a){return a.foo}).map([{foo:1,bar:0},{foo:2},{foo:1,bar:1}]);assert.deepEqual(b,{1:[{foo:1,bar:0},{foo:1,bar:1}],2:[{foo:2}]})},"values can be sorted using an optional comparator":function(a){var b=a().key(function(a){return a.foo}).sortValues(function(a,b){return a.bar-b.bar}).map([{foo:1,bar:2},{foo:1,bar:0},{foo:1,bar:1},{foo:2}]);assert.deepEqual(b,{1:[{foo:1,bar:0},{foo:1,bar:1},{foo:1,bar:2}],2:[{foo:2}]})},"values can be aggregated using an optional rollup":function(a){var b=a().key(function(a){return a.foo}).rollup(function(a){return d3.sum(a,function(a){return a.bar})}).map([{foo:1,bar:2},{foo:1,bar:0},{foo:1,bar:1},{foo:2}]);assert.deepEqual(b,{1:3,2:0})},"multiple key functions can be specified":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).map([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,{0:{1:[[0,1]],2:[[0,2],[0,2]]},1:{1:[[1,1]],2:[[1,2]]}})},"the rollup function only applies to leaf values":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).rollup(function(a){return a.length}).map([[0,1],[0,2],[1,1],[1,2],[0,2]]);assert.deepEqual(b,{0:{1:1,2:2},1:{1:1,2:1}})},"the value comparator only applies to leaf values":function(a){var b=a().key(function(a){return a[0]}).sortKeys(d3.ascending).key(function(a){return a[1]}).sortKeys(d3.ascending).sortValues(function(a,b){return a[2]-b[2]}).map([[0,1],[0,2,1],[1,1],[1,2],[0,2,0]]);assert.deepEqual(b,{0:{1:[[0,1]],2:[[0,2,0],[0,2,1]]},1:{1:[[1,1]],2:[[1,2]]}})},"if no keys are specified, the input array is returned":function(a){var b=[new Object];assert.strictEqual(a().map(b),b)},"handles keys that are built-in prototype properties":function(a){var b=a().key(String).map(["hasOwnProperty"]);assert.deepEqual(b,{hasOwnProperty:["hasOwnProperty"]})}}}),suite.export(module)