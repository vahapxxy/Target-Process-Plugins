define(["tau/ui/extensions/board.plus/ui.extension.full-counts"],function(e){return e.extend({"bus boardSettings.limitsReady:last > model.sliceInfo.retrieved:last > slice.ready:last > domWrapper.ready:last > operation.execute.comet.done":function(e,t,a,n,s){this._updateMetaInfoDebouncedHandler(a,n.slice,t,s)},updateMetaInfoAsync:function(e,t,a,n){var s=e.definition;s.user.globalDateRange&&s.user.globalDateRange.startDate&&s.user.globalDateRange.endDate&&this._super(e,t,a,n)}})});