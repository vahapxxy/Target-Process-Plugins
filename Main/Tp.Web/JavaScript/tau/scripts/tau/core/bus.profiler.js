define(["Underscore","tau/core/class"],function(_,a){var b=a.extend({init:function(a){var b=this;b.stream=[],b.stopped=!1;var c=a.fire;a.fire=function(){var a=arguments;!b.stopped&&b.registerEvent(a),c.apply(this,a)}},stop:function(){this.stopped=!0},registerEvent:function(a){var b=+(new Date),c={tick:b,name:a[0],data:a[1]||{}};this.stream.push(c)},data:function(){return this.stream}});return b})