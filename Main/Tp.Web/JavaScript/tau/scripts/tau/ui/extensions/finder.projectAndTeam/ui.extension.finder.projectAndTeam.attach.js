define(["Underscore","jQuery","tau/core/extension.base"],function(_,$,ExtensionBase){return ExtensionBase.extend({"bus $teamSection.ready + $projectSection.ready + $list.ready":function(evt,$teams,$projects,$el){var self=this,$list=$el;$list.delegate("[role=action-submit]","click",function(){var data={},$checked=$teams.find(".i-role-list :checked");data.teamIds=$checked.map(function(){return $(this).val()}),$checked=$projects.find(" .i-role-list :checked"),data.projectIds=$checked.map(function(){return $(this).val()}),self.fire("form.submitted",data)})}})})