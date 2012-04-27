define(["tau/core/class"],function(a){return a.extend({saveCommandList:null,removeCommandList:null,getCommandList:null,findCommandList:null,refreshCommandList:null,init:function(){this.saveCommandList=[],this.removeCommandList=[],this.getCommandList=[],this.findCommandList=[],this.refreshCommandList=[]},registerSaveCommand:function(a){this.saveCommandList.push(a)},registerRemoveCommand:function(a){this.removeCommandList.push(a)},registerGetCommand:function(a){this.getCommandList.push(a)},registerFindCommand:function(a){this.findCommandList.push(a)},registerRefreshCommand:function(a){this.refreshCommandList.push(a)},executeCommand:function(a,b,c){b.length!=0,c.callbacks.success({})},remove:function(a){this.executeCommand("remove",this.removeCommandList,a)},save:function(a){this.executeCommand("save",this.saveCommandList,a)},get:function(a){this.executeCommand("get",this.getCommandList,a)},find:function(a){this.executeCommand("find",this.findCommandList,a)},refresh:function(a){this.executeCommand("refresh",this.refreshCommandList,a)},verify:function(a){var b=function(a,b){a.length>0&&same([],a,"Not all "+b+" commands were executed")};a&&b(this.getCommandList,"get"),b(this.saveCommandList,"save"),b(this.removeCommandList,"remove"),b(this.findCommandList,"find"),b(this.refreshCommandList,"refresh")}})})