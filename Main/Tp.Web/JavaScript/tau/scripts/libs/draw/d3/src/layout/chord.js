d3.layout.chord=function(){function j(){var a={},j=[],l=d3.range(e),m=[],o,p,q,r,s;b=[],c=[],o=0,r=-1;while(++r<e){p=0,s=-1;while(++s<e)p+=d[r][s];j.push(p),m.push(d3.range(e)),o+=p}g&&l.sort(function(a,b){return g(j[a],j[b])}),h&&m.forEach(function(a,b){a.sort(function(a,c){return h(d[b][a],d[b][c])})}),o=(2*Math.PI-f*e)/o,p=0,r=-1;while(++r<e){q=p,s=-1;while(++s<e){var t=l[r],u=m[t][s],v=d[t][u],w=p,x=p+=v*o;a[t+"-"+u]={index:t,subindex:u,startAngle:w,endAngle:x,value:v}}c.push({index:t,startAngle:q,endAngle:p,value:(p-q)/o}),p+=f}r=-1;while(++r<e){s=r-1;while(++s<e){var y=a[r+"-"+s],z=a[s+"-"+r];(y.value||z.value)&&b.push(y.value<z.value?{source:z,target:y}:{source:y,target:z})}}i&&k()}function k(){b.sort(function(a,b){return i((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2)})}var a={},b,c,d,e,f=0,g,h,i;return a.matrix=function(f){return arguments.length?(e=(d=f)&&d.length,b=c=null,a):d},a.padding=function(d){return arguments.length?(f=d,b=c=null,a):f},a.sortGroups=function(d){return arguments.length?(g=d,b=c=null,a):g},a.sortSubgroups=function(c){return arguments.length?(h=c,b=null,a):h},a.sortChords=function(c){return arguments.length?(i=c,b&&k(),a):i},a.chords=function(){return b||j(),b},a.groups=function(){return c||j(),c},a}