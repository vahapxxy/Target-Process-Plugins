function d3_layout_clusterY(a){return 1+d3.max(a,function(a){return a.y})}function d3_layout_clusterX(a){return a.reduce(function(a,b){return a+b.x},0)/a.length}function d3_layout_clusterLeft(a){var b=a.children;return b&&b.length?d3_layout_clusterLeft(b[0]):a}function d3_layout_clusterRight(a){var b=a.children,c;return b&&(c=b.length)?d3_layout_clusterRight(b[c-1]):a}d3.layout.cluster=function(){function d(d,e){var f=a.call(this,d,e),g=f[0],h,i=0,j,k;d3_layout_treeVisitAfter(g,function(a){var c=a.children;c&&c.length?(a.x=d3_layout_clusterX(c),a.y=d3_layout_clusterY(c)):(a.x=h?i+=b(a,h):0,a.y=0,h=a)});var l=d3_layout_clusterLeft(g),m=d3_layout_clusterRight(g),n=l.x-b(l,m)/2,o=m.x+b(m,l)/2;return d3_layout_treeVisitAfter(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=(1-(g.y?a.y/g.y:1))*c[1]}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=d3_layout_treeSeparation,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},d3_layout_hierarchyRebind(d,a)}