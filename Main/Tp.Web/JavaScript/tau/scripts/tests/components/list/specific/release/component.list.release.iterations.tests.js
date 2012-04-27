define(["Underscore","tests/components/list/specific/component.list.spec.base","tau/models/dataProviders/release/release.model.provider.iterations.items","tau/models/dataProviders/release/release.model.provider.iterations.groups","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity"],function(_,a,b,c){var d=function(){var d=a.Testcase.create("[list.release.iterations]",b,c,function(){this.componentConfig={type:"list",itemsDataProvider:this.providers.items,groupsDataProvider:this.providers.groups,groupBy:"iteration.id",views:[{type:"grid.entity",group:{dataIndex:"id"}}]};var a={us:"UserStory",bug:"Bug"},b={kanban:"Kanban",scrum:"Scrum"},c={p1:"Good"},d={s1:"Good"},e={p1:{name:"Project1",process:"kanban"},p2:{name:"Project2"}},f={us_open:{name:"Open",nextStates:["us_inprogress","us_done"],entityType:"us",process:"kanban",isInitial:!0},us_inprogress:{name:"In Progress",nextStates:["us_done"],entityType:"us",process:"kanban"},us_done:{name:"Done",nextStates:[],entityType:"us",process:"kanban",isFinal:!0},bug_open:{name:"Open",nextStates:["bug_coded"],entityType:"bug",process:"kanban",isInitial:!0},bug_coded:{name:"Coded",nextStates:["bug_done"],isCommentRequired:!0,entityType:"bug",process:"kanban"},bug_done:{name:"Fixed",nextStates:[],isCommentRequired:!0,entityType:"bug",process:"kanban",isFinal:!0}},g={r1:{name:"Release",userStories:["us1","us2"],bugs:["bug1","bug2"],iterations:["i1","i2"]}},h={i1:{name:"Iter 1",startDate:"12-Dec-2010",endDate:"15-Dec-2010"},i2:{name:"Iter 2",startDate:"18-Dec-2010",endDate:"25-Dec-2010"}},i={us1:{name:"US1",entityState:"us_open",priority:"p1",project:"p1",iteration:"i1"},us2:{name:"US2",entityState:"us_open",priority:"p1",project:"p1",iteration:"i2"}},j={bug1:{name:"Bug1",entityState:"bug_open",priority:"p1",severity:"s1",project:"p1",iteration:"i1"},bug2:{name:"Bug2",entityState:"bug_done",priority:"p1",severity:"s1",project:"p1"}};this.loadFixtures({entityType:a,projects:e,entityStates:f,releases:g,iterations:h,userStories:i,bugs:j,priority:c,severity:d,processes:b}),this.setProject(this.data.project.p1),this.setEntity(this.data.release.r1)}),e=new a.Test;d.add(new a.Test({name:"dnd simple prioritize",test:function(){var a=this.$el.find("[role=group]:eq(2)");a.find("[role=title]").click();var b=a.find("[role=item]:eq(0)"),c=a.find("[role=item]:eq(1)"),f=d.data.userStory.us1,g=d.data.bug.bug1;e.registerPrioritize(f.id,{beforeId:null,afterId:g.id}),e.startMove(b),e.moveAfter(b,c),e.endMove()}})),d.add(new a.Test({name:"dnd change iteration",test:function(){var a=this.$el.find("[role=group]:eq(2)");a.find("[role=title]").click();var b=this.$el.find("[role=group]:eq(1)");b.find("[role=title]").click();var c=b.find("[role=item]:eq(0)"),f=a.find("[role=item]:eq(0)"),g=d.data.userStory.us1;e.registerPrioritize(g.id,{beforeId:null,afterId:d.data.userStory.us2.id}),e.service.registerSaveCommand({config:{id:g.id,$set:{release:{id:d.data.release.r1.id},iteration:{id:d.data.iteration.i2.id}},fields:["id",{iteration:["id"]}]},returnedData:{id:g.id,iteration:d.data.iteration.i2}}),e.service.registerGetCommand({config:{id:g.id,fields:["id",{iteration:["id"]}]},returnedData:{id:g.id,iteration:d.data.iteration.i2}}),e.$el=this.$el,e.checkGroupsAvailability(3,0),e.startMove(f),e.checkGroupsAvailability(3,0),e.moveAfter(f,c),e.endMove(),e.checkGroupsAvailability(3,0)}})),d.add(new a.Test({name:"dnd change iteration to backlog",test:function(){var a=this.$el.find("[role=group]:eq(1)"),b=this.$el.find("[role=group]:eq(0)");b.find("[role=title]").click();var c=a.find("[role=item]:eq(0)"),f=d.data.userStory.us2,g=d.data.bug.bug2;e.registerPrioritize(f.id,{beforeId:null,afterId:g.id}),e.service.registerSaveCommand({config:{id:f.id,$set:{release:{id:d.data.release.r1.id},iteration:null},fields:["id",{iteration:["id"]}]},returnedData:{id:f.id,iteration:null}}),e.service.registerGetCommand({config:{id:f.id,fields:["id",{iteration:["id","name","isFinal"]}]},returnedData:{id:f.id,iteration:null}}),e.$el=this.$el,e.checkGroupsAvailability(3,0),e.startMove(c),e.checkGroupsAvailability(3,0),e.moveAfter(c,b),e.endMove(),e.checkGroupsAvailability(3,0)}})),d.run()};return{run:d}})