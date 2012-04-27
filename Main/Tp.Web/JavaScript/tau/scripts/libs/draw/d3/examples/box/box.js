function randomize(a){return a.randomizer||(a.randomizer=randomizer(a)),a.map(a.randomizer)}function randomizer(a){var b=d3.max(a)*.02;return function(a){return Math.max(min,Math.min(max,a+b*(Math.random()-.5)))}}function iqr(a){return function(b,c){var d=b.quartiles[0],e=b.quartiles[2],f=(e-d)*a,c=-1,g=b.length;while(b[++c]<d-f);while(b[--g]>e+f);return[c,g]}}function boxChart(){function i(i){i.each(function(i,j){i=i.map(e).sort(d3.ascending);var k=d3.select(this),l=i.length,m=i[0],n=i[l-1],o=i.quartiles=g(i),p=f&&f.call(this,i,j),q=p&&p.map(function(a){return i[a]}),r=p?d3.range(0,p[0]).concat(d3.range(p[1]+1,l)):d3.range(l),s=d3.scale.linear().domain(d&&d.call(this,i,j)||[m,n]).range([b,0]),t=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(s.range());this.__chart__=s;var u=k.selectAll("line.center").data(q?[q]:[]);u.enter().insert("svg:line","rect").attr("class","center").attr("x1",a/2).attr("y1",function(a){return t(a[0])}).attr("x2",a/2).attr("y2",function(a){return t(a[1])}).style("opacity",1e-6).transition().duration(c).style("opacity",1).attr("y1",function(a){return s(a[0])}).attr("y2",function(a){return s(a[1])}),u.transition().duration(c).style("opacity",1).attr("y1",function(a){return s(a[0])}).attr("y2",function(a){return s(a[1])}),u.exit().transition().duration(c).style("opacity",1e-6).attr("y1",function(a){return s(a[0])}).attr("y2",function(a){return s(a[1])}).remove();var v=k.selectAll("rect.box").data([o]);v.enter().append("svg:rect").attr("class","box").attr("x",0).attr("y",function(a){return t(a[2])}).attr("width",a).attr("height",function(a){return t(a[0])-t(a[2])}).transition().duration(c).attr("y",function(a){return s(a[2])}).attr("height",function(a){return s(a[0])-s(a[2])}),v.transition().duration(c).attr("y",function(a){return s(a[2])}).attr("height",function(a){return s(a[0])-s(a[2])});var w=k.selectAll("line.median").data([o[1]]);w.enter().append("svg:line").attr("class","median").attr("x1",0).attr("y1",t).attr("x2",a).attr("y2",t).transition().duration(c).attr("y1",s).attr("y2",s),w.transition().duration(c).attr("y1",s).attr("y2",s);var x=k.selectAll("line.whisker").data(q||[]);x.enter().insert("svg:line","circle, text").attr("class","whisker").attr("x1",0).attr("y1",t).attr("x2",a).attr("y2",t).style("opacity",1e-6).transition().duration(c).attr("y1",s).attr("y2",s).style("opacity",1),x.transition().duration(c).attr("y1",s).attr("y2",s).style("opacity",1),x.exit().transition().duration(c).attr("y1",s).attr("y2",s).style("opacity",1e-6).remove();var y=k.selectAll("circle.outlier").data(r,Number);y.enter().insert("svg:circle","text").attr("class","outlier").attr("r",5).attr("cx",a/2).attr("cy",function(a){return t(i[a])}).style("opacity",1e-6).transition().duration(c).attr("cy",function(a){return s(i[a])}).style("opacity",1),y.transition().duration(c).attr("cy",function(a){return s(i[a])}).style("opacity",1),y.exit().transition().duration(c).attr("cy",function(a){return s(i[a])}).style("opacity",1e-6).remove();var z=h||s.tickFormat(8),A=k.selectAll("text.box").data(o);A.enter().append("svg:text").attr("class","box").attr("dy",".3em").attr("dx",function(a,b){return b&1?6:-6}).attr("x",function(b,c){return c&1?a:0}).attr("y",t).attr("text-anchor",function(a,b){return b&1?"start":"end"}).text(z).transition().duration(c).attr("y",s),A.transition().duration(c).text(z).attr("y",s);var B=k.selectAll("text.whisker").data(q||[]);B.enter().append("svg:text").attr("class","whisker").attr("dy",".3em").attr("dx",6).attr("x",a).attr("y",t).text(z).style("opacity",1e-6).transition().duration(c).attr("y",s).style("opacity",1),B.transition().duration(c).text(z).attr("y",s).style("opacity",1),B.exit().transition().duration(c).attr("y",s).style("opacity",1e-6).remove()}),d3.timer.flush()}var a=1,b=1,c=0,d=null,e=Number,f=boxWhiskers,g=boxQuartiles,h=null;return i.width=function(b){return arguments.length?(a=b,i):a},i.height=function(a){return arguments.length?(b=a,i):b},i.tickFormat=function(a){return arguments.length?(h=a,i):h},i.duration=function(a){return arguments.length?(c=a,i):c},i.domain=function(a){return arguments.length?(d=a==null?a:d3.functor(a),i):d},i.value=function(a){return arguments.length?(e=a,i):e},i.whiskers=function(a){return arguments.length?(f=a,i):f},i.quartiles=function(a){return arguments.length?(g=a,i):g},i}function boxWhiskers(a){return[0,a.length-1]}function boxQuartiles(a){return[d3.quantile(a,.25),d3.quantile(a,.5),d3.quantile(a,.75)]}var w=120,h=500,m=[10,50,20,50],min=Infinity,max=-Infinity,chart=boxChart().whiskers(iqr(1.5)).width(w-m[1]-m[3]).height(h-m[0]-m[2]);d3.csv("../data/morley.csv",function(a){var b=[];a.forEach(function(a){var c=~~a.Expt-1,d=~~a.Run-1,e=~~a.Speed,f=b[c];f?f.push(e):f=b[c]=[e],e>max&&(max=e),e<min&&(min=e)}),chart.domain([min,max]);var c=d3.select("#chart").selectAll("svg").data(b).enter().append("svg").attr("class","box").attr("width",w).attr("height",h).append("g").attr("transform","translate("+m[3]+","+m[0]+")").call(chart);chart.duration(1e3),window.transition=function(){c.datum(randomize).call(chart)}})