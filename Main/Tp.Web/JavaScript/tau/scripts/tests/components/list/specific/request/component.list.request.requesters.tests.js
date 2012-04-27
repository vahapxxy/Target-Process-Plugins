define(["Underscore","tests/components/list/specific/component.list.spec.base","tau/models/dataProviders/request/request.model.provider.requesters.items","tau/ui/extensions/list/request/extension.requesters.action.detach","tau/configurator","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity"],function(_,a,b,c,d){var e=function(){var e=a.Testcase.create("[list.request.requesters]",b,null,function(){this.componentConfig={itemsDataProvider:this.providers.items,sortable:!1,extensions:[c],views:[{rowTemplateName:"list-grid-entity__row_requester",type:"grid.entity"}]};var a={request:"Request"},b={kanban:"Kanban",scrum:"Scrum"},d={p_kanban:{name:"Project Kanban",process:"kanban"},p_scrum:{name:"Project Scrum",process:"scrum"}},e={r1:{name:"Do something",requesters:["u1","u2","u3"],project:"p_kanban",process:"kanban"}},f={u1:{firstName:"Bree",lastName:"Olson",email:"bree@olson.com",login:"bbrree"},u2:{firstName:"Ron",lastName:"Jeremy",email:"25@inches.com",login:"ron"},u3:{firstName:"Annabel",lastName:"Chong",email:"251@10hours.com",login:"grace"}};this.loadFixtures({entityType:a,processes:b,projects:d,requests:e,generalUsers:f}),this.setProject(this.data.project.p_kanban),this.setEntity(this.data.request.r1)});e.add(new a.Test({name:"should render valid markup view",test:function(){var a=e.data,b=this.$el,c=[{items:["Bree Olson","Ron Jeremy","Annabel Chong"]}],d=b.find("[role=group]");equals(d.length,c.length,"Groups amount");var f=b.find("[role=list]");for(var g=0;g<f.length;g++){var h=f.eq(g),i=h.find("[role=item]");equals(i.length,3,"Items correct");for(var j=0;j<i.length;j++){var k=i.eq(j).find(".tau-list__table__cell");equals(k.eq(1).find("img").length,1,"Show userpic"),equals(k.eq(2).find("a").length,1,"Show link");var l=_.trim(k.eq(2).text()),m=c[g].items[j];equals(l,m,"Name Data column")}}}})),e.add(new a.Test({name:"should allow to detach",test:function(){var a=e.data,b=this.$el;equals(b.find("[role=item]").length,3,"Yip");var c=b.find("[role=item]:eq(0)"),f=c.find("[role=action-detach]");equals(f.length,1,"Has detach button"),d.getService().registerRemoveFromListCommand({config:{id:a.request.r1.id,$set:{requesters:{id:a.generalUser.u1.id}},fields:["id"]}}),d.getService().registerGetCommand({config:{id:a.request.r1.id,nested:!0,fields:["id",{requesters:["id","firstName","lastName","deleteDate","email","login","kind"],list:!0}]},returnedData:[{id:a.request.r1.id,requesters:[a.generalUser.u2,a.generalUser.u3]}]}),f.click(),ok(b!==this.$el,"Refresh"),equals(this.$el.find("[role=item]").length,2,"Detached")}})),e.run()};return{run:e}})