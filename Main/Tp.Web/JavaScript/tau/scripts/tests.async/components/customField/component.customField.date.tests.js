define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.customField.date","tests/common/remoteConstants"],function($,a,b,c){var d=new a(b);d.registerSetup("fixtures",function(a,b){var d={us:{id:c.EntityTypes.USERSTORY.id,name:"userStory"}},e={planning:{id:c.Practices.PLANNING.id}},f={},g={scrum:{name:"scream"+parseInt(Math.random()*1e11),practices:["planning"],customFields:[{name:"Day of dead",fieldType:"Date",entityType:{id:c.EntityTypes.USERSTORY.id}},{name:"Dawn of dead",fieldType:"Date",entityType:{id:c.EntityTypes.USERSTORY.id}},{name:"NumberOfGod",fieldType:"Number",entityType:{id:c.EntityTypes.USERSTORY.id}}]}},h={p_scrum:{name:"Project Scrum"+parseInt(Math.random()*1e11),process:"scrum"}},i={us1:{name:"US1",entityType:"us",project:"p_scrum",customFields:[{name:"Day of dead",type:"Date",value:"12-Dec-2012"},{name:"Dawn of dead",type:"Date",value:null},{name:"NumberOfGod",type:"Number",value:null}]}},j={practices:e,entityTypes:d,processes:g,projects:h,customFields:f,userStories:i};a.set("fixtures",j),b()}),d.registerSetup("component.initialize",function(a,b){var c=a.get("data"),d=a.get("componentBus");d.initialize({store:a.get("configurator").getStore(),customField:{name:"Day of dead",type:"Date",value:null},context:{entity:c.userStory.us1,applicationContext:{processes:[c.process.scrum],selectedProjects:[c.project.p_scrum]},getCustomFields:function(){return[{name:"Day of dead",type:"Date"},{name:"Dawn of dead",type:"Date"},{name:"NumberOfGod",type:"Number"}]}}}),b()});var e={name:"component.customField.date"};return e["should render valid markup and allow to edit"]=d.test(function(a){var b=a.get("bus");b.on("afterRender[0]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Day of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"12-Dec-2012","Correct process and output");var d=c.find(".ui-customfield__value"),e=c.find(":text");a.equals(e.length,0,"No input"),a.ok(d.hasClass("ui-dateeditor-source"),"Date editor"),d.click();var f=d.data("dateEditor");a.ok(f,"editor");var e=c.find(":text");a.equals(e.length,1,"Show input"),e.focus(),e.val("15-Jan-2014"),e.blur(),$("body").click()}),b.on("afterRender[1]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Day of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"15-Jan-2014","Correct process and output"),a.done()})}),e["should validate"]=d.test(function(a){var b=a.get("bus");b.on("afterRender[0]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Day of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"12-Dec-2012","Correct process and output");var d=c.find(".ui-customfield__value");d.click();var e=c.find(":text");e.focus(),e.val("15-Bzzz-2014"),e.blur(),$("body").click(),a.ok(d.hasClass("ui-validationerror"),"Error"),a.done()})}),d.registerSetup("component.initialize",function(a,b){var c=a.get("data"),d=a.get("componentBus");d.initialize({store:a.get("configurator").getStore(),customField:{name:"Dawn of dead",type:"Date",value:null},context:{entity:c.userStory.us1,applicationContext:{processes:[c.process.scrum],selectedProjects:[c.project.p_scrum]},getCustomFields:function(){return[{name:"Day of dead",type:"Date"},{name:"Dawn of dead",type:"Date"},{name:"NumberOfGod",type:"Number"}]}}}),b()}),e["should process empty"]=d.test(function(a){var b=a.get("bus");b.on("afterRender[0]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Dawn of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"","Correct process and output");var d=c.find(".ui-customfield__value");d.click();var e=c.find(":text");e.focus(),e.val("15-Jan-2014"),e.blur(),$("body").click()}),b.on("afterRender[1]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Dawn of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"15-Jan-2014","Correct process and output");var d=c.find(".ui-customfield__value");d.click();var e=c.find(":text");e.focus(),e.val(""),e.blur(),$("body").click()}),b.on("afterRender[2]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__label").text().trim(),"Dawn of dead","Name is valid"),a.equals(c.find(".ui-customfield__value").text(),"","Correct process and output"),a.done()})}),e})