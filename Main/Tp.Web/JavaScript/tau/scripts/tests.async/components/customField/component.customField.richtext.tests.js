define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.customField.richtext","tests/common/remoteConstants"],function($,a,b,c){var d=new a(b);d.registerSetup("fixtures",function(a,b){var d={us:{id:c.EntityTypes.USERSTORY.id,name:"userStory"}},e={planning:{id:c.Practices.PLANNING.id}},f={},g={scrum:{name:"scream"+parseInt(Math.random()*1e11),practices:["planning"],customFields:[{name:"Tttext",fieldType:"RichText",entityType:{id:c.EntityTypes.USERSTORY.id}},{name:"Other Lnk",fieldType:"URL",entityType:{id:c.EntityTypes.USERSTORY.id}},{name:"NumberOfGod",fieldType:"Number",entityType:{id:c.EntityTypes.USERSTORY.id}}]}},h={p_scrum:{name:"Project Scrum"+(new Date).getTime(),process:"scrum"}},i={us1:{name:"US1",entityType:"us",project:"p_scrum",customFields:[{name:"Tttext",type:"RichText",value:"<b>preved</b>medved"},{name:"Other Lnk",type:"URL",value:null},{name:"NumberOfGod",type:"Number",value:null}]}},j={practices:e,entityTypes:d,processes:g,projects:h,customFields:f,userStories:i};a.set("fixtures",j),b()}),d.registerSetup("component.initialize",function(a,b){var c=a.get("data"),d=a.get("componentBus");d.initialize({store:a.get("configurator").getStore(),customField:{name:"Tttext",type:"RichText"},context:{entity:c.userStory.us1,applicationContext:{processes:[c.process.scrum],selectedProjects:[c.project.p_scrum]},getCustomFields:function(){return[{name:"Tttext",type:"RichText"},{name:"Lnk",type:"URL"},{name:"NumberOfGod",type:"Number"}]}}}),b()});var e={name:"component.customField.richtest","should render valid markup and allow to edit":d.test(function(a){var b=a.get("bus");b.on("afterRender[0]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__value").text().trim(),"prevedmedved","value is valid"),c.find(".ui-customfield__value").dblclick();var d=c.find("textarea");a.equals(d.length,1,"Can edit"),a.equals(d.val(),"<b>preved</b>medved");var e=c.find("button");a.equals(e.length,2,"Buttons"),d.val("hello <i>world</i>"),e.eq(0).click()}),b.on("afterRender[1]",function(b){var c=b.data.element;a.equals(c.find(".ui-customfield__value").text().trim(),"hello world","value is valid"),a.done()})})};return e})