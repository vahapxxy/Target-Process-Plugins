function d3_scaleExtent(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function d3_scaleRange(a){return a.rangeExtent?a.rangeExtent():d3_scaleExtent(a.range())}d3.scale={}