define(["Underscore","tests/common/datapoint/rest.data/entityStates","tests/common/datapoint/rest.data/projects"],function(a,b,c){return{getBugs:function(){var d=c.getProjects(),e=function(b){return a(d).detect(function(a){return a.id===b})},f=b.getEntityStates(),g=[{id:41,name:"Bug Name1",__type:"bug",tags:"bug, wtf",entityState:a(f).detect(function(a){return a.name=="Planned"&&a.entityType.name=="Bug"}),severity:{id:5,__type:"severity",name:"Enhancement",importance:5},effort:56,effortCompleted:8,effortToDo:48,timeSpent:9,timeRemain:41,roleEfforts:[{id:318,role:{id:1,name:"Developer",__type:"role"}}],assignments:[{id:311,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:3,firstName:"Alex",lastName:"Petrov"}},{id:312,role:{id:1,name:"Developer",__type:"role"},generalUser:{id:4,firstName:"Petr",lastName:"Ivanov"}}],project:e(279)}];return g}}})