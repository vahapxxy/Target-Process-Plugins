require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.requote");suite.addBatch({requote:{topic:function(){return d3.requote},"quotes backslashes":function(a){assert.equal(a("\\"),"\\\\")},"quotes carets":function(a){assert.equal(a("^"),"\\^")},"quotes dollar signs":function(a){assert.equal(a("$"),"\\$")},"quotes stars":function(a){assert.equal(a("*"),"\\*")},"quotes plusses":function(a){assert.equal(a("+"),"\\+")},"quotes question marks":function(a){assert.equal(a("?"),"\\?")},"quotes periods":function(a){assert.equal(a("."),"\\.")},"quotes parentheses":function(a){assert.equal(a("("),"\\("),assert.equal(a(")"),"\\)")},"quotes pipes":function(a){assert.equal(a("|"),"\\|")},"quotes curly braces":function(a){assert.equal(a("{"),"\\{"),assert.equal(a("}"),"\\}")},"quotes square brackets":function(a){assert.equal(a("["),"\\["),assert.equal(a("]"),"\\]")}}}),suite.export(module)