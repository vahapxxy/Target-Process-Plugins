define(["./extension.tracking.base","Underscore","jQuery"],function(Extension,_,$){return Extension.extend({track:function(selector,data,event){selector||(selector="body"),event=event||"click",data=data||{},_.defaults(data,{tags:[]});var addTag=function(tag){data.tags.indexOf(tag.toLowerCase())<0&&data.tags.push(tag)};addTag("board"),addTag(event),data.area&&addTag(data.area);var mapped={selector:selector,data:data,event:event};return this.clickMap[selector]=mapped,{name:function(name){return data.name=name,addTag(name),this},nameSelector:function(name){return mapped.nameSelector=name,this},nameTemplate:function(name){return mapped.nameTemplate=name,this},tag:function(){return _.each(arguments,function(tag){addTag(tag)}),this},event:function(event){return mapped.event=event,addTag(event),this},area:function(area){return data.area=area,addTag(area),this}}},trackArea:function(selector,area){var self=this;return function(subSelector){var css=selector+(subSelector?" "+subSelector:"");return self.track(css,{area:area})}},trackMainMenu:function(){var mainMenu=this.trackArea(".tau-app-header","page header");mainMenu().tag("page header item"),this.track(".tau-user-submenu .tau-menu-item").area("page header menu").tag("context menu");var context=this.trackArea(".tau-teams-projects-manager","project/team selection");context("button")},trackGettingStarted:function(){this.track(".tau-getting-started .rhino-btn,.tau-getting-started .rhino-bullet").area("getting started popup").tag("getting started")},trackQuickAdd:function(){var area=this.trackArea(".tau-quick-add-dialog","quick add popup");area("button").tag("quick add popup")},trackBoard:function(){this.track(".tau-board-settings-header.i-role-tabheaders").area("board settings").tag("select setting tab").nameTemplate("select [<%= name%>] tab"),this.track(".tau-cellholder .tau-add").area("board").tag("quick add").name("quick add in cell")},trackSidebar:function(){this.track(".tau-pane-collapser").area("sidebar").name("boards menu collapse (expand)"),this.track(".tau-boardselector__headermenu__item").nameTemplate("customisize board menu -> <%= name%>").area("sidebar").tag("boards menu header")},startTracking:function(){var self=this,formatName=function(value){return value?value:null},getNameFromElement=function($element){var value=formatName($element.text())||formatName($element.attr("title"))||formatName($element.data("title"))||formatName($element.data("label"))||formatName($element.attr("role"))||"";return value.toLowerCase()},grabName=function(mapped,$element){if(mapped.nameSelector){var text=$(mapped.nameSelector,this).text();return text&&mapped.data.name&&(text=mapped.data.name+" "+text),text}return mapped.data.name||getNameFromElement($element)||getNameFromElement($(this))},process=function(evt){try{var $element=$(evt.target),mapped=evt.data,name=grabName.call(this,mapped,$element);if(!name)return;mapped.nameTemplate&&(name=_.template(mapped.nameTemplate)({name:name}));var event=_.defaults({name:name,event:mapped.event},mapped.data);self.fire("track.action",event)}catch(e){}},$body=$("body");_.each(this.clickMap,function(mapped){$body.on(mapped.event,mapped.selector,mapped,process)})},init:function(config){var self=this;self._super(config),config=config||{};if(config.disableClicksTracking===!0)return;_.defaults(config,{clickMap:{}}),self.clickMap=config.clickMap,self.trackSidebar(),self.trackMainMenu(),self.trackGettingStarted(),self.trackBoard(),self.trackQuickAdd(),self.startTracking()}})})