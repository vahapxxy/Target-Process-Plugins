function d3_scale_pow(a,b){function e(b){return a(c(b))}var c=d3_scale_powPow(b),d=d3_scale_powPow(1/b);return e.invert=function(b){return d(a.invert(b))},e.domain=function(b){return arguments.length?(a.domain(b.map(c)),e):a.domain().map(d)},e.ticks=function(a){return d3_scale_linearTicks(e.domain(),a)},e.tickFormat=function(a){return d3_scale_linearTickFormat(e.domain(),a)},e.nice=function(){return e.domain(d3_scale_nice(e.domain(),d3_scale_linearNice))},e.exponent=function(a){if(!arguments.length)return b;var f=e.domain();return c=d3_scale_powPow(b=a),d=d3_scale_powPow(1/b),e.domain(f)},e.copy=function(){return d3_scale_pow(a.copy(),b)},d3_scale_linearRebind(e,a)}function d3_scale_powPow(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}d3.scale.pow=function(){return d3_scale_pow(d3.scale.linear(),1)}