d3_transitionPrototype.duration=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].duration=Math.max(1,a.apply(this,arguments)|0)}:(a=Math.max(1,a|0),function(c,d,e){b[e][d].duration=a}))}