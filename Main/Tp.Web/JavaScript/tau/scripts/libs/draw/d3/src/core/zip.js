function d3_zipLength(a){return a.length}d3.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=d3.min(arguments,d3_zipLength),c=new Array(b);++a<b;)for(var d=-1,e,f=c[a]=new Array(e);++d<e;)f[d]=arguments[d][a];return c}