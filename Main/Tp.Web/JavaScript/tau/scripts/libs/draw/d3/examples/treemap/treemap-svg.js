var w=960,h=500,color=d3.scale.category20c(),treemap=d3.layout.treemap().padding(4).size([w,h]).value(function(a){return a.size}),svg=d3.select("body").append("svg").attr("width",w).attr("height",h).append("g").attr("transform","translate(-.5,-.5)");d3.json("../data/flare.json",function(a){var b=svg.data([a]).selectAll("g").data(treemap).enter().append("g").attr("class","cell").attr("transform",function(a){return"translate("+a.x+","+a.y+")"});b.append("rect").attr("width",function(a){return a.dx}).attr("height",function(a){return a.dy}).style("fill",function(a){return a.children?color(a.data.name):null}),b.append("text").attr("x",function(a){return a.dx/2}).attr("y",function(a){return a.dy/2}).attr("dy",".35em").attr("text-anchor","middle").text(function(a){return a.children?null:a.data.name})})