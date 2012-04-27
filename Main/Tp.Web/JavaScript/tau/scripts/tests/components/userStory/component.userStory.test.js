define(["jQuery","Underscore","tau/components/component.property.userStory","tests/components/component.specs","tests/common/testData.Generator","tests/common/service.mock","tau/configurator","tests/components/common/common.setup"],function($,_,a,b,c,d,e,f){var g=function(){var d=new c;d.initDefaultData();var g=d.getData(),h=d.getProjects(),i=d.getBugs()[0],j=d.getUserStories(),k=h[1],l={manualContext:!0,context:{entity:{entityType:{name:i.__type},id:i.id},applicationContext:{selectedProjects:[k],culture:{name:"en-US",timePattern:"g:i A",shortDateFormat:"M/d/yyyy",longDateFormat:"dddd, MMMM dd, yyyy",decimalSeparator:".",__type:"culture"},processes:d.getProcesses()}}},m=i.userStory,n=j[2],o=f.create("[component.userStory]",g,a,l),p=[{name:"should render valid markup",test:function(){var a=this.$el;equal(a.find(".property-text span").text(),m.name,"story name"),equal(a.find("a").attr("href"),["#userstory",m.id].join("/"),"story name")}}];b.create(o,l).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests(p).done();var q=d.getBugs()[1],r={manualContext:!0,context:{entity:{entityType:{name:q.__type},id:q.id},applicationContext:{selectedProjects:[k],culture:{name:"en-US",timePattern:"g:i A",shortDateFormat:"M/d/yyyy",longDateFormat:"dddd, MMMM dd, yyyy",decimalSeparator:".",__type:"culture"},processes:d.getProcesses()}}},s=f.create("[component.userStory] empty",g,a,r);b.create(s,r).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests([{name:"should render valid markup for empty UserStory",preSetup:function(){e.getProxy().markRecordSetAsCompleteLoaded("userStory")},test:function(){var a=this.$el;equal(a.find(".property-text").text(),"","UserStory name")}}]).done(),d.clear(),d.initDefaultData(),d.removeUserStoriesFromProject();var g=_.select(d.getData(),function(a){return a.__type!=="userStory"}),t=f.create("[component.userStory] not user stories ",g,a,r)};return{run:g}})