define(["tau/components/component.board.plus.base","tau/components/component.base.new.list","tau/components/board.new.list/extension.new.list","tau/components/board.new.list/extensions/extension.new.list.cards.viewer","tau/components/board.new.list/views/stickyHeaderBehavior","tau/components/board.new.list/extensions/extension.new.list.comet"],function(e,n,t,s,o,i){return{create:function(a){var c=n.createNewListConfig(_.extend(a,{notificationsHubName:"slice-newlist"}));return a.behaviors=n.getDefaultBehaviors().concat([o]),c.extensions=[{extType:t,args:[c.newList.model,c.newList.view,c.newList.busEventAggregator]},s,i].concat(c.extensions),e.create(c,a)}}});