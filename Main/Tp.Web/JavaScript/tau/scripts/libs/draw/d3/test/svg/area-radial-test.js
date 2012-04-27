function testInterpolation(a){var b=[[10,0],[20,1],[20,2],[10,3]],c=d3.svg.area.radial().innerRadius(function(a){return a[0]}).outerRadius(function(a){return a[0]*2}).angle(function(a){return a[1]}),d=d3.svg.area().x0(function(a){return a[0]*Math.cos(a[1]-Math.PI/2)}).x1(function(a){return 2*a[0]*Math.cos(a[1]-Math.PI/2)}).y0(function(a){return a[0]*Math.sin(a[1]-Math.PI/2)}).y1(function(a){return 2*a[0]*Math.sin(a[1]-Math.PI/2)});return function(){assert.pathEqual(c.interpolate(a)(b),d.interpolate(a)(b))}}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.svg.area.radial");suite.addBatch({"area.radial":{topic:function(){return d3.svg.area.radial},"radius is an alias for setting innerRadius and outerRadius":function(a){function c(){}var b=a().radius(c);assert.equal(b.radius(),c),assert.equal(b.innerRadius(),c),assert.equal(b.outerRadius(),c)},"radius is an alias for getting outerRadius":function(a){function c(){}var b=a().outerRadius(c);assert.equal(b.radius(),c)},"angle is an alias for setting startAngle and endAngle":function(a){function c(){}var b=a().angle(c);assert.equal(b.angle(),c),assert.equal(b.startAngle(),c),assert.equal(b.endAngle(),c)},"angle is an alias for getting endAngle":function(a){function c(){}var b=a().endAngle(c);assert.equal(b.angle(),c)},"innerRadius defaults to a function accessor":function(a){var b=a();assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-10L0,-20L0,-20L0,-10Z"),assert.typeOf(b.innerRadius(),"function")},"innerRadius can be defined as a constant":function(a){var b=a().innerRadius(30);assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-30L0,-30L0,-30L0,-30Z"),assert.equal(b.innerRadius(),30)},"innerRadius can be defined as a function":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),30}var b=a().innerRadius(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-30L0,-30L0,-30L0,-30Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"outerRadius defaults to a function accessor":function(a){var b=a();assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-10L0,-20L0,-20L0,-10Z"),assert.typeOf(b.outerRadius(),"function")},"outerRadius can be defined as a constant":function(a){var b=a().outerRadius(30);assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-30L25.244130,-16.209069L27.278923,12.484405L4.233600,29.699775L0,-10L0,-20L0,-20L0,-10Z"),assert.equal(b.outerRadius(),30)},"outerRadius can be defined as a function":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),30}var b=a().outerRadius(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M0,-30L25.244130,-16.209069L27.278923,12.484405L4.233600,29.699775L0,-10L0,-20L0,-20L0,-10Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"startAngle defaults to zero":function(a){var b=a();assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-10L0,-20L0,-20L0,-10Z"),assert.equal(b.startAngle(),0)},"startAngle can be defined as a constant":function(a){var b=a().startAngle(Math.PI/2);assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L10,0L20,0L20,0L10,0Z"),assert.equal(b.startAngle(),Math.PI/2)},"startAngle can be defined as a function":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),Math.PI/2}var b=a().startAngle(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L10,0L20,0L20,0L10,0Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"endAngle defaults to a function accessor":function(a){var b=a();assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M0,-10L16.829420,-10.806046L18.185949,8.322937L1.411200,9.899925L0,-10L0,-20L0,-20L0,-10Z"),assert.typeOf(b.endAngle(),"function")},"endAngle can be defined as a constant":function(a){var b=a().endAngle(Math.PI/2);assert.pathEqual(b([[10,0],[20,1],[20,2],[10,3]]),"M10,0L20,0L20,0L10,0L0,-10L0,-20L0,-20L0,-10Z"),assert.equal(b.endAngle(),Math.PI/2)},"endAngle can be defined as a function":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),Math.PI/2}var b=a().endAngle(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M10,0L20,0L20,0L10,0L0,-10L0,-20L0,-20L0,-10Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"if innerRadius === outerRadius, radius is only evaluated once per point":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),30}var b=a().radius(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M0,-30L25.244130,-16.209069L27.278923,12.484405L4.233600,29.699775L0,-30L0,-30L0,-30L0,-30Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"if startAngle === endAngle, angle is only evaluated once per point":function(a){function g(a,b){return d.push(a),e.push(b),f.push(this),Math.PI/2}var b=a().angle(g),c={},d=[],e=[],f=[];assert.pathEqual(b.call(c,[[10,0],[20,1],[20,2],[10,3]]),"M10,0L20,0L20,0L10,0L10,0L20,0L20,0L10,0Z"),assert.deepEqual(d,[[10,0],[20,1],[20,2],[10,3]],"expected data, got {actual}"),assert.deepEqual(e,[0,1,2,3],"expected index, got {actual}"),assert.deepEqual(f,[c,c,c,c],"expected this, got {actual}")},"interpolate defaults to linear":function(a){assert.equal(a().interpolate(),"linear")},"interpolate can be defined as a constant":function(a){var b=a().interpolate("step-before");assert.pathEqual(b([[0,0],[1,1]]),"M0,0V-0.540302H0.841471L0,-1H0V0Z"),assert.equal(b.interpolate(),"step-before")},"tension defaults to .7":function(a){assert.equal(a().tension(),.7)},"tension can be specified as a constant":function(a){var b=a().tension(.5);assert.equal(b.tension(),.5)},"returns null if input points array is empty":function(a){assert.isNull(a()([]))},"interpolate(linear)":{"supports linear interpolation":testInterpolation("linear")},"interpolate(step)":{"supports step-before interpolation":testInterpolation("step-before"),"supports step-after interpolation":testInterpolation("step-after")},"interpolate(basis)":{"supports basis interpolation":testInterpolation("basis"),"supports basis-open interpolation":testInterpolation("basis-open")},"interpolate(cardinal)":{"supports cardinal interpolation":testInterpolation("cardinal"),"supports cardinal-open interpolation":testInterpolation("cardinal-open")},"interpolate(monotone)":{"supports monotone interpolation":testInterpolation("monotone")}}}),suite.export(module)