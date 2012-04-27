function d3_layout_stackX(a){return a.x}function d3_layout_stackY(a){return a.y}function d3_layout_stackOut(a,b,c){a.y0=b,a.y=c}function d3_layout_stackOrderDefault(a){return d3.range(a.length)}function d3_layout_stackOffsetZero(a){var b=-1,c=a[0].length,d=[];while(++b<c)d[b]=0;return d}function d3_layout_stackMaxIndex(a){var b=1,c=0,d=a[0][1],e,f=a.length;for(;b<f;++b)(e=a[b][1])>d&&(c=b,d=e);return c}function d3_layout_stackReduceSum(a){return a.reduce(d3_layout_stackSum,0)}function d3_layout_stackSum(a,b){return a+b[1]}d3.layout.stack=function(){function g(h,i){var j=h.map(function(b,c){return a.call(g,b,c)}),k=j.map(function(a,b){return a.map(function(a,b){return[e.call(g,a,b),f.call(g,a,b)]})}),l=b.call(g,k,i);j=d3.permute(j,l),k=d3.permute(k,l);var m=c.call(g,k,i),n=j.length,o=j[0].length,p,q,r;for(q=0;q<o;++q){d.call(g,j[0][q],r=m[q],k[0][q][1]);for(p=1;p<n;++p)d.call(g,j[p][q],r+=k[p-1][q][1],k[p][q][1])}return h}var a=Object,b=d3_layout_stackOrderDefault,c=d3_layout_stackOffsetZero,d=d3_layout_stackOut,e=d3_layout_stackX,f=d3_layout_stackY;return g.values=function(b){return arguments.length?(a=b,g):a},g.order=function(a){return arguments.length?(b=typeof a=="function"?a:d3_layout_stackOrders.get(a)||d3_layout_stackOrderDefault,g):b},g.offset=function(a){return arguments.length?(c=typeof a=="function"?a:d3_layout_stackOffsets.get(a)||d3_layout_stackOffsetZero,g):c},g.x=function(a){return arguments.length?(e=a,g):e},g.y=function(a){return arguments.length?(f=a,g):f},g.out=function(a){return arguments.length?(d=a,g):d},g};var d3_layout_stackOrders=d3.map({"inside-out":function(a){var b=a.length,c,d,e=a.map(d3_layout_stackMaxIndex),f=a.map(d3_layout_stackReduceSum),g=d3.range(b).sort(function(a,b){return e[a]-e[b]}),h=0,i=0,j=[],k=[];for(c=0;c<b;++c)d=g[c],h<i?(h+=f[d],j.push(d)):(i+=f[d],k.push(d));return k.reverse().concat(j)},reverse:function(a){return d3.range(a.length).reverse()},"default":d3_layout_stackOrderDefault}),d3_layout_stackOffsets=d3.map({silhouette:function(a){var b=a.length,c=a[0].length,d=[],e=0,f,g,h,i=[];for(g=0;g<c;++g){for(f=0,h=0;f<b;f++)h+=a[f][g][1];h>e&&(e=h),d.push(h)}for(g=0;g<c;++g)i[g]=(e-d[g])/2;return i},wiggle:function(a){var b=a.length,c=a[0],d=c.length,e=0,f,g,h,i,j,k,l,m,n,o=[];o[0]=m=n=0;for(g=1;g<d;++g){for(f=0,i=0;f<b;++f)i+=a[f][g][1];for(f=0,j=0,l=c[g][0]-c[g-1][0];f<b;++f){for(h=0,k=(a[f][g][1]-a[f][g-1][1])/(2*l);h<f;++h)k+=(a[h][g][1]-a[h][g-1][1])/l;j+=k*a[f][g][1]}o[g]=m-=i?j/i*l:0,m<n&&(n=m)}for(g=0;g<d;++g)o[g]-=n;return o},expand:function(a){var b=a.length,c=a[0].length,d=1/b,e,f,g,h=[];for(f=0;f<c;++f){for(e=0,g=0;e<b;e++)g+=a[e][f][1];if(g)for(e=0;e<b;e++)a[e][f][1]/=g;else for(e=0;e<b;e++)a[e][f][1]=d}for(f=0;f<c;++f)h[f]=0;return h},zero:d3_layout_stackOffsetZero})