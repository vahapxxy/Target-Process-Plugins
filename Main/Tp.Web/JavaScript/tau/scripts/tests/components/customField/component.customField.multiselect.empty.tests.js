define(["jQuery","tests/common/testkit","tau/components/component.customField.multiselect","tau/components/component.customField.multiselect.list"],function($,a,b){var c=function(){var c=new a("[component.customField.multiselect]",b),d={us1:{name:"US1",customFields:[{name:"Multi",type:"MultipleSelectionList",value:"Aaren,Abahri"}]}},e=c.loadFixtures({userStories:d});return c.setData(e),c.setEntity(e.userStory.us1),c.selectDefaultProject(),c.appContext.processes[0].customFields=[{name:"Multi",type:"MultipleSelectionList",required:!1,listed:!1,value:null}],c.addTest({name:"should render valid markup",test:function(){var a=this.$el;equals(a.find(".ui-customfield__value").text(),"Aaren, Abahri","Correct process and output")}}),c.addTest({name:"should allow to edit",test:function(){var a=this.$el,b=a.find(".tau-bubble-target"),c=e.userStory.us1;b.click();var d=b.tauBubble("widget");equals(d.length,1,"Show popup");var f=d.find("[role=option]");equals(f.length,0,"Show optss");var g=d.find("[role=placeholder-empty]");equals(g.length,1,"Show empty"),equals(g.text(),"No items found","Show empty")}}),c.run({customField:{type:"MultipleSelectionList",name:"Multi"}})};return{run:c}})