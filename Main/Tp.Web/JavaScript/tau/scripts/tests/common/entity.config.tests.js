define(["Underscore","tau/configurations/factory.container.config","tests/common/componentConfigCreator","tests/common/testData.Generator"],function(_,a,b,c){function d(a,b,c,d){var e=new a,f=new b;f.clear(),f.initDefaultData();var g=f.getData();e.setEntityIDAndType(c.id,c.__type),e.setSelectedProjects([g.selectByType("project")[0]]),e.setProcesses(g.selectByType("process"));var h=this.factory.getConfig(e.getConfig());d=d||6,equal(h.children[0].children[1].children[d].name,"Lead Cycle Time","Lead time is present")}var e=function(){module("[entity.config] module tests",{setup:function(){this.factory=a},teardown:function(){delete this.mockControl}}),test("feature should contains lead cycle time",function(){var a={id:23,__type:"feature"};d.call(this,b,c,a)}),test("userStory should contains lead cycle time",function(){var a={id:23,__type:"userStory"};d.call(this,b,c,a,5)}),test("bug should contains lead cycle time",function(){var a={id:23,__type:"bug"};d.call(this,b,c,a)})};return{run:e}})