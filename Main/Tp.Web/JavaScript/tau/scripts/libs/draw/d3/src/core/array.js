function d3_arrayCopy(a){var b=-1,c=a.length,d=[];while(++b<c)d.push(a[b]);return d}function d3_arraySlice(a){return Array.prototype.slice.call(a)}var d3_array=d3_arraySlice;try{d3_array(document.documentElement.childNodes)[0].nodeType}catch(e){d3_array=d3_arrayCopy}var d3_arraySubclass=[].__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]}