define(["Underscore","tau/components/component.creator","tau/models/board.editor.customize/model.board.editor.customize.sizes","tau/ui/extensions/board.customize/ui.extension.board.editor.customize.sizes","tau/ui/templates/board.editor.customize/ui.template.board.editor.customize.sizes","tau/core/helpers/extension.configurator"],function(e,t,o,i,r,s){return{create:function(e){var u={name:"board.editor.customize.sizes",extensions:[o,s,i],template:r};return e["queue.bus"]=!0,t.create(u,e)}}});