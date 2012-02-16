define(["tp/plugins/pluginsRepository","tp/plugins/commandGateway","tp/plugins/vcs/viewDiff/sourcePopup","tp/plugins/vcs/viewDiff/diffPopup","libs/jquery/jquery","libs/jquery/jquery.ui"],function(a,b,c,d,e){function f(a){this._ctor(a)}return f.prototype={_ctor:function(f){this.pluginsRepository=a,this.commandGateway=new b(f),this.pluginName=f.pluginName,this.firstInitialization=!0,this.drawingInProgress=!1,this.viewSourcePopup=new c({placeholder:f.placeholder}),this.viewDiffPopup=new d({placeholder:f.placeholder}),this.initialize();var g=Sys.WebForms.PageRequestManager.getInstance();g.add_pageLoaded(e.proxy(this.initialize,this))},initialize:function(a,b){var c=this,d=function(){c.drawingInProgress=!0,c.firstInitialization=!1,c.pluginsRepository.pluginStartedAndHasAtLeastOneProfile(c.pluginName,e.proxy(c._getImportedRevisionsSuccess,c))},f=!b&&this.firstInitialization&&!this.drawingInProgress;if(f)d();else{var g=e.grep(b.get_panelsCreated(),function(a){return a.id.contains("revisionsGrid")}),h=!this.drawingInProgress&&(this.firstInitialization||g.length>0&&e("._diff").length==0);h&&d()}},_getImportedRevisionsSuccess:function(){var a=e.makeArray(e('table[id$="revisionsGrid"] tr .expandedList ._revisionID').map(function(a,b){return e(b).val()}));this.commandGateway.execute("GetImportedRevisions",a,e.proxy(this._render,this))},_render:function(a){var b=this;e('table[id$="revisionsGrid"] tr .expandedList').each(function(){var c=e(this).find("._revisionID").val(),d=e.grep(a,function(a){return a==c}).length>0;if(d){var f=e(this).parentsUntil("tr","td:first").parent().prev(),g=f.find("td:nth-child(2)").text().replace(/\D+/g,"");e(this).find("table.generalTable tr+tr").each(function(){var a=e(this).find("td"),d=e.trim(e(a[1]).text()),f=e(a[0]).find("a"),h=f.text();d!="Delete"?(f.attr("href","#").removeAttr("disabled").addClass("vcsView"),f.click(function(a){a.preventDefault(),b.showView(c,g,h)})):f.addClass("vcsViewDisabled"),d=="Modify"&&e('<a href="#" class="_diff">Diff</a>').click(function(a){a.preventDefault(),b.showDiff(c,g,h)}).appendTo(e(a[2]))})}}),this.drawingInProgress=!1},showView:function(a,b,c){this.viewSourcePopup.loading();var d=this;this.commandGateway.execute("ViewSource",{TpRevisionId:a,Path:c},function(a){var e=a.Content||"File is empty";d.viewSourcePopup.view(b,e,c)},null,this.showError)},showDiff:function(a,b,c){this.viewDiffPopup.loading();var d=this;this.commandGateway.execute("ViewDiff",{TpRevisionId:a,Path:c},function(a){d.viewDiffPopup.view(b,a,c)},null,this.showError)},showError:function(a){e("<div />").html('<p class="p-15">'+a+"</p>").popup({title:"Error occured",fitToWindow:!1})}},f})