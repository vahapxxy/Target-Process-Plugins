function ContextMock(){this.context={Acid:"78185C4CAE96D687C2CBEB905BD7EC91",Edition:"Pro",Culture:{Name:"en-US",TimePattern:"g:i A",ShortDateFormat:"M/d/yyyy",LongDateFormat:"dddd, MMMM dd, yyyy",DecimalSeparator:"."},LoggedUser:{Id:1,FirstName:"Administrator",LastName:"Administrator",Email:"admin@nonexistingemail.com",IsActive:!0,IsAdministrator:!0},Processes:{Items:[{Id:3,Name:"Scrum",Terms:{Items:[{Name:"Iteration",Value:"Sprint"},{Name:"Iterations",Value:"Sprints"},{Name:"Iteration Big Icon Text",Value:"Sprint"},{Name:"Iteration Small Icon Text",Value:"S"}]},Practices:{Items:[{Name:"Planning",Description:"General Project planning. Supports iterative development, user stories and tasks hierarchy",EffortPoints:"Point",IsStoryEffortEqualsSumTasksEffort:!0},{Name:"Bug Tracking",Description:"Simple Bug Tracking. Bugs list, bugs workflow and assignments"},{Name:"Requirements",Description:"High level requirements management. Supports Features and Release Planning"},{Name:"Test Cases",Description:"Test cases and test plans management."},{Name:"Source Control",Description:"Integration with Source Control."},{Name:"Help Desk",Description:"Integrated Help Desk."},{Name:"Iterations",Description:"Supports Iterations-oriented development practice."}]},CustomFields:{Items:[]}}]},SelectedProjects:{Items:[{Id:13,Name:"Tau Product Web Site - Scrum #1",Process:{Id:3,Name:"Scrum"},Program:{Id:1,Name:"tauLine #1"}}]}}}ContextMock.prototype={get:function(a){a()},setCurrentProject:function(a){this.currentProjectId=a},getSelectedProjects:function(){return this.context.SelectedProjects.Items},getTermProcessorForCurrentProject:function(){var a=this,b=this.getSelectedProjects().filter(function(b){return b.Id==a.currentProjectId}).map(function(a){return a.Process.Id})[0],c=this.context.Processes.Items.filter(function(a){return a.Id==b})[0];return(new require("tau/core/termProcessor"))(c.Terms)}}