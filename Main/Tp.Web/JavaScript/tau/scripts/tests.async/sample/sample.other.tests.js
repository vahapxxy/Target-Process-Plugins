define([],function(){var a="a",b,c={name:"sample.other.test",setUp:function(c){b=a+"b",c()}};return c["should be correct"]=function(a){a.equals(b,"ab","Yep"),a.ok(!0,"Yem"),a.done()},c["should be incorrect"]=function(a){a.equals(b,"ab","Yep"),a.equals(1,1,"Yep"),a.same({a:3},{a:3},"Yep"),a.done()},c["should be correct too"]=function(a){a.equals(1,1,"Yep"),a.done()},c["sub group"]={setUp:function(a){b+="c",a()},braiins:function(a){a.equals(b,"abc"),a.done()},"more braiins":function(a){a.equals(b,"abc"),a.done()}},c})