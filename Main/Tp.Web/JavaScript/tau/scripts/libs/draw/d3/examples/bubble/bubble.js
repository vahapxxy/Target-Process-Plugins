function classes(a){function c(a,d){d.children?d.children.forEach(function(a){c(d.name,a)}):b.push({packageName:a,className:d.name,value:d.size})}var b=[];return c(null,a),{children:b}}var r=960,format=d3.format(",d"),fill=d3.scale.category20c(),bubble=d3.layout.pack().sort(null).size([r,r]),vis=d3.select("#chart").append("svg").attr("width",r).attr("height",r).attr("class","bubble");d3.json("../data/flare.json",function(a){var b=vis.selectAll("g.node").data(bubble.nodes(classes(a)).filter(function(a){return!a.children})).enter().append("g").attr("class","node").attr("transform",function(a){return"translate("+a.x+","+a.y+")"});b.append("title").text(function(a){return a.className+": "+format(a.value)}),b.append("circle").attr("r",function(a){return a.r}).style("fill",function(a){return fill(a.packageName)}),b.append("text").attr("text-anchor","middle").attr("dy",".3em").text(function(a){return a.className.substring(0,a.r/3)})})