define(["Underscore","tau/core/class","tau/ui/templates/container/ui.template.container.boardPlus"],function(_,a,b){var c=a.extend({getDefaultBoardSettings:function(a){return{id:a,name:"anonymous",zoomLevel:3,viewMode:"board",x:{types:["Release"],filter:""},y:{types:["Feature"],filter:""},cells:{types:["UserStory"],filter:""}}},getConfig:function(a){var c=a.viewMode==="list"?".list":"";return{layout:"selectable",template:b,children:[{type:"board.header",selector:"[role=header]"},{type:"board.selector",selector:"[role=aside]"},{type:"board.overview",selector:"[role=aside]"},{type:"board.settings",selector:"[role=main]"},{type:"board.plus"+c,selector:"[role=main]",min:1,max:6,defaultValue:3}]}}});return new c})