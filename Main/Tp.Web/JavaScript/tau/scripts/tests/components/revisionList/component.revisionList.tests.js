define(["jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.revisionList","tests/common/testData.Generator","tp/plugins/pluginsRepository"],function($,a,b,c,d,e,f){var g=function(){var a=new e;a.initDefaultData();var g=a.getData(),h=a.getBugs()[0],i=new c;i.setEntityIDAndType(h.id,h.__type),i.setSelectedProjects([g.selectByType("project")[0]]),i.setProcesses(g.selectByType("process"));var j=i.getConfig();j.editable=!0;var k=new b("[component.revisionList]");k.initModule({componentConfig:j,data:g},d,function(){this.old=f.pluginStartedAndHasAtLeastOneProfile,f.pluginStartedAndHasAtLeastOneProfile=function(){}},function(){f.pluginStartedAndHasAtLeastOneProfile=this.old}),k.test("should render valid markup",function(){var b=this.element,c=b.find("table.ui-revisionList > tbody");equal(c.size(),5,"Count of revisions");var d=_.sortBy(a.getRevisions(),function(a){return-a.id}),e=String.fromCharCode(160),f=new Date(1309542300192),g=(new Date(1309542300192)).toString("d-MMM-yyyy")+String.fromCharCode(32)+f.toString("HH:mm"),h=[[g,"by","unknown"].join(e),[g,"by","Andrew Gray"].join(e),[g,"by","Tod Black"].join(e),[g,"by","John Brown"].join(e),[g,"by","Administrator Administrator"].join(e)];c.each(function(a){var b=$(this),c=b.children("tr").eq(0),f=b.children("tr").eq(1),g=c.children("td");equal(g.eq(1).text().trim(),"#"+e+d[a].sourceControlId.toString(),"SourceControlId id"),equal(g.eq(2).text(),h[a],"Info text"),equal(g.eq(3).text(),d[a].description,"Info text");var i=f.find("td.files"),j=f.find("td.actions"),k=d[a].revisionFiles,l=_.pluck(k,"fileName"),m=_.map(_.pluck(k,"fileAction"),function(a){return a==="Add"?"Added":a==="Delete"?"Deleted":"Modified"});equal(i.size(),k.length,"Files count"),i.each(function(a){equal($(this).text().trim(),l[a],"File Name")}),equal(j.size(),k.length,"Files count"),j.each(function(a){equal($(this).text().trim(),m[a],"File Action")})})})};return{run:g}})