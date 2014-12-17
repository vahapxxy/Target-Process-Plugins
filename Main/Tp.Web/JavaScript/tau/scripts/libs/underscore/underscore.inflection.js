define(["libs/underscore"],function(s,i){var t=[],e=[],r=[],u={gsub:function(s,i,t){var e=new RegExp(i.source||i,"gi");return e.test(s)?s.replace(e,t):null},plural:function(s,i){t.unshift([s,i])},pluralize:function(e,u,n){var l;if(u!==i)u=Math.round(u),l=1===u?this.singularize(e):this.pluralize(e),l=n?[u,l].join(" "):l;else{if(s(r).include(e))return e;l=e,s(t).detect(function(s){var i=this.gsub(e,s[0],s[1]);return i?l=i:!1},this)}return l},singular:function(s,i){e.unshift([s,i])},singularize:function(i){if(s(r).include(i))return i;var t=i;return s(e).detect(function(s){var e=this.gsub(i,s[0],s[1]);return e?t=e:!1},this),t},irregular:function(s,i){this.plural("\\b"+s+"\\b",i),this.singular("\\b"+i+"\\b",s)},uncountable:function(s){r.unshift(s)},ordinalize:function(s){if(isNaN(s))return s;s=s.toString();var i=s.slice(-1),t=s.slice(-2);if("11"===t||"12"===t||"13"===t)return s+"th";switch(i){case"1":return s+"st";case"2":return s+"nd";case"3":return s+"rd";default:return s+"th"}},titleize:function(s){return"string"!=typeof s?s:s.replace(/\S+/g,function(s){return s.charAt(0).toUpperCase()+s.slice(1)})},resetInflections:function(){return t=[],e=[],r=[],this.plural(/$/,"s"),this.plural(/s$/,"s"),this.plural(/(ax|test)is$/,"$1es"),this.plural(/(octop|vir)us$/,"$1i"),this.plural(/(octop|vir)i$/,"$1i"),this.plural(/(alias|status)$/,"$1es"),this.plural(/(bu)s$/,"$1ses"),this.plural(/(buffal|tomat)o$/,"$1oes"),this.plural(/([ti])um$/,"$1a"),this.plural(/([ti])a$/,"$1a"),this.plural(/sis$/,"ses"),this.plural(/(?:([^f])fe|([lr])?f)$/,"$1$2ves"),this.plural(/(hive)$/,"$1s"),this.plural(/([^aeiouy]|qu)y$/,"$1ies"),this.plural(/(x|ch|ss|sh)$/,"$1es"),this.plural(/(matr|vert|ind)(?:ix|ex)$/,"$1ices"),this.plural(/([m|l])ouse$/,"$1ice"),this.plural(/([m|l])ice$/,"$1ice"),this.plural(/^(ox)$/,"$1en"),this.plural(/^(oxen)$/,"$1"),this.plural(/(quiz)$/,"$1zes"),this.singular(/s$/,""),this.singular(/(n)ews$/,"$1ews"),this.singular(/([ti])a$/,"$1um"),this.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/,"$1$2sis"),this.singular(/(^analy)ses$/,"$1sis"),this.singular(/([^f])ves$/,"$1fe"),this.singular(/(hive)s$/,"$1"),this.singular(/(tive)s$/,"$1"),this.singular(/([lr])ves$/,"$1f"),this.singular(/([^aeiouy]|qu)ies$/,"$1y"),this.singular(/(s)eries$/,"$1eries"),this.singular(/(m)ovies$/,"$1ovie"),this.singular(/(x|ch|ss|sh)es$/,"$1"),this.singular(/([m|l])ice$/,"$1ouse"),this.singular(/(bus)es$/,"$1"),this.singular(/(o)es$/,"$1"),this.singular(/(shoe)s$/,"$1"),this.singular(/(cris|ax|test)es$/,"$1is"),this.singular(/(octop|vir)i$/,"$1us"),this.singular(/(alias|status)es$/,"$1"),this.singular(/^(ox)en/,"$1"),this.singular(/(vert|ind)ices$/,"$1ex"),this.singular(/(matr)ices$/,"$1ix"),this.singular(/(quiz)zes$/,"$1"),this.singular(/(database)s$/,"$1"),this.irregular("person","people"),this.irregular("man","men"),this.irregular("child","children"),this.irregular("sex","sexes"),this.irregular("move","moves"),this.irregular("cow","kine"),s("equipment information rice money species series fish sheep jeans".split(/\s+/)).each(function(s){this.uncountable(s)
},this),this}};s.mixin(u.resetInflections())});