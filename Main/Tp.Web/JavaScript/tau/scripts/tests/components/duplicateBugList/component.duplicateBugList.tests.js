function checkBug(a,b){var c=a.find(".tau-linkentity_type_icon");equal(c.text(),b.id.toString(),"Id is valid");var d=c;equal(d.attr("href"),"#bug/"+b.id,"url is valid"),equal(a.find(".name").text(),b.name,"Name is valid"),equal(a.find(".state").text(),b.entityState.name,"Name is valid")}define(["Underscore","jQuery","tau/components/component.duplicateBugList","tests/common/testData.Generator","tests/common/componentConfigCreator","tests/common/testCase"],function(_,$,a,b,c,d){var e=function(){var e=new b;e.initDefaultData();var f=e.getData(),g=e.getBugs(),h=g[0],i=e.getUsers()[0],j=e.getImpediments(),k=new c;k.setEntityIDAndType(h.id,h.__type),k.setSelectedProjects([f.selectByType("project")[0]]),k.setProcesses(f.selectByType("process")),k.setLoggedUser(i);var l=k.getConfig(),m=new d("[component.duplicateBugList]");m.initModule({componentConfig:l,data:f,loggedUser:i},a,function(){this.serviceMock.registerFindCommand({config:{fields:["id","name",{entityState:["id","name"]}],$query:{tags:{$contains:"duplicateOf#25"}}},returnedData:[g[0],g[1],g[2]]})}),m.test("should render valid markup",function(){var a=this.element,b=a.find("table.base-info-list tbody > tr");equal(b.size(),3,"Count of duplicate bug"),checkBug(b.eq(0),_.extend(_.clone(g[0]),{entityState:{name:"Planned"}})),checkBug(b.eq(1),_.extend(_.clone(g[1]),{entityState:{name:"Planned"}})),checkBug(b.eq(2),_.extend(_.clone(g[2]),{entityState:{name:"Done"}}))})};return{run:e}})