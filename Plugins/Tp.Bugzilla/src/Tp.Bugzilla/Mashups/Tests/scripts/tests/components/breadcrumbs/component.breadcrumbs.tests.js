define(["tau/core/tau","tau/components/component.breadcrumbs","tau/configurator","tests/components/component.specs","tests/common/testData","tests/components/common/common.setup","tests/common/applicationContext"],function(a,b,c,d,e,f,g){var h=function(){var a=[{name:"should render valid UI for term",test:function(){var a=this.$el,b=this.$el;equal(b.length,0,"Render breadcrumbs area");var d=b.find(".ui-breadcrumbs__item");equal(d.length,0,"No breadcrumbs items"),c.getHistory().push({title:"Preved",url:"#medved/preved"}),this.component.getGlobalBus().fire("history.changed",c.getHistory()),b=this.$el,d=b.find(".ui-breadcrumbs__item"),equal(d.length,1,"Add breadcrumb"),equal(d.eq(0).text(),"Preved","Render breadcrumb item"),equal(d.eq(0).find("a").attr("href"),"#medved/preved","Render breadcrumb item"),d.eq(0).click(),c.getHistory().stack=[],this.component.getGlobalBus().fire("history.changed",c.getHistory()),b=this.$el,d=b.find(".ui-breadcrumbs__item"),equal(d.length,0,"Return to history start")}}],h={context:{type:"bug",id:15}},i=e.getTestDataForTitle(),j=f.create("[component.breadcrumbs]",i,b),k=new g(h),l=k.processes[0],m=k.selectedProjects[0],n={entity:{__type:"bug",id:15,name:"BugName"},process:l,project:m,subPath:"Project/QA/Bug",appPath:"/TP"},o={editable:!0,deletable:!0};d.create(j,h).viewShouldFollowDataComponentLifeCycle().viewShouldPassTests(a).done()};return{run:h}})