define(["require","tau/core/extension.base"],function(e){var t=e("tau/core/extension.base");return t.extend({"bus _board.menu.main.view":function(e,t){this._view=t},"bus board.menu.update.search.filter":function(e,t){this._setProps({filterText:t})},"bus board.menu.toggle.hidden":function(e,t){this._setState({showHidden:t})},"bus board.menu.update.board":function(){this._setProps({viewMenuSections:this._view.props.viewMenuSections})},"bus board.menu.update.all":function(e,t){this._setProps({viewMenuSections:t})},"bus board.menu.focus.board":function(e,t){this._setState({focusedBoardId:t})},"bus board.menu.switch.board":function(e,t){this._setState({currentBoardId:t})},"bus board.menu.sorted":function(e,t){this._setProps({viewMenuSections:t})},"bus board.menu.rename.start":function(e,t){this._setRefState("listView",{renamingId:t})},"bus board.menu.rename.finish":function(){this._setRefState("listView",{renamingId:null})},_setState:function(e){this._view&&this._view.setState(e)},_setRefState:function(e,t){if(this._view){var s=this._view.refs[e];s&&s.setState(t)}},_setProps:function(e){this._view&&this._view.setProps(e)}})});