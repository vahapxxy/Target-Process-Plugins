define(["Underscore","tests/components/list/specific/component.list.spec.base","tau/models/dataProviders/request/request.model.provider.related_entities.items","tau/ui/extensions/list/request/extension.related_entities.action.detach","tau/configurator","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity"],function(_,a,b,c,d){var e=function(){var e=a.Testcase.create("[list.request.related_entities]",b,null,function(){this.componentConfig={itemsDataProvider:this.providers.items,sortable:!1,extensions:[c],views:[{rowTemplateName:"list-grid-entity__row_related_entity",type:"grid.entity"}]};var a={request:"Request",us:"UserStory",bug:"Bug",feature:"Feature",task:"Task"},b={us_open:"Open",bug_open:"Open",task_open:"Open",feature_open:"Open"},d={kanban:"Kanban",scrum:"Scrum"},e={p_kanban:{name:"Project Kanban",process:"kanban"},p_scrum:{name:"Project Scrum",process:"scrum"}},f={r1:{name:"Do something",relatedEntities:["us2","us1","t2","b1","f1","f2"],project:"p_kanban",process:"kanban"}},g={us1:{name:"US1",entityType:"us",entityState:"us_open"},us2:{name:"US2",entityType:"us",entityState:"us_open"}},h={t1:{name:"Task1",entityType:"task",entityState:"task_open"},t2:{name:"Task2",entityType:"task",entityState:"task_open"}},i={b1:{name:"Bug1",entityType:"bug",entityState:"bug_open"},b2:{name:"Bug2",entityType:"bug",entityState:"bug_open"}},j={f1:{name:"Feature1",entityType:"feature",entityState:"feature_open"},f2:{name:"Feature2",entityType:"feature",entityState:"feature_open"}};this.loadFixtures({entityType:a,entityState:b,processes:d,projects:e,requests:f,features:j,userStories:g,tasks:h,bugs:i}),this.setProject(this.data.project.p_kanban),this.setEntity(this.data.request.r1)});e.add(new a.Test({name:"should render valid markup view",test:function(){var a=e.data,b=this.$el,c=[{items:["US2","US1","Task2","Bug1","Feature1","Feature2"]}],d=b.find("[role=group]");equals(d.length,c.length,"Groups amount");var f=b.find("[role=list]");for(var g=0;g<f.length;g++){var h=f.eq(g),i=h.find("[role=item]");equals(i.length,6,"Items correct");for(var j=0;j<i.length;j++){var k=i.eq(j).find(".tau-list__table__cell"),l=_.trim(k.eq(2).text()),m=c[g].items[j];equals(l,m,"Name Data column")}}}})),e.add(new a.Test({name:"should allow to detach",test:function(){var a=e.data,b=this.$el;equals(b.find("[role=item]").length,6,"Yip");var c=b.find("[role=item]:eq(0)"),f=c.find("[role=action-detach]");equals(f.length,1,"Has detach button"),d.getService().registerRemoveFromListCommand({config:{id:a.userStory.us2.id,$set:{relatedRequests:{id:a.request.r1.id}},fields:["id"]}}),d.getService().registerSaveCommand({config:{id:a.request.r1.id,$set:{relatedEntities:[]},fields:["id"]},returnedData:{id:a.request.r1.id,relatedEntities:[]}}),d.getService().registerGetCommand({config:{id:a.request.r1.id,nested:!0,fields:["id",{relatedEntities:["id","name","numericPriority","endDate",{entityType:["id","name"]}],list:!0}]},returnedData:[{id:a.request.r1.id,relatedEntities:[a.userStory.us1,a.task.t2,a.bug.b1,a.feature.f1,a.feature.f2]}]}),f.click(),ok(b!==this.$el,"Refresh"),equals(this.$el.find("[role=item]").length,5,"Detached"),d.getService().verify()}})),e.run()};return{run:e}})