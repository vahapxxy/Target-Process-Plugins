d3.json("../data/faithful.json",function(a){data=a;var b=800,c=400,d=d3.scale.linear().domain([30,110]).range([0,b]);bins=d3.layout.histogram().frequency(!1).bins(d.ticks(60))(data),max=d3.max(bins,function(a){return a.y}),y=d3.scale.linear().domain([0,.1]).range([0,c]),kde=science.stats.kde().sample(data);var e=d3.select("body").append("svg").attr("width",b).attr("height",c),f=e.selectAll("g.bar").data(bins).enter().append("g").attr("class","bar").attr("transform",function(a,b){return"translate("+d(a.x)+","+(c-y(a.y))+")"});f.append("rect").attr("fill","steelblue").attr("width",function(a){return d(a.dx+30)-1}).attr("height",function(a){return y(a.y)});var g=d3.svg.line().x(function(a){return d(a[0])}).y(function(a){return c-y(a[1])});e.selectAll("path").data(d3.values(science.stats.bandwidth)).enter().append("path").attr("d",function(a){return g(kde.bandwidth(a)(d3.range(30,110,.1)))})})