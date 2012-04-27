function tz(a,b){return function(){var c=process.env.TZ;try{process.env.TZ=a,(new Date(0)).toString(),(new Date).toString(),b.apply(this,arguments)}finally{process.env.TZ=c,(new Date(0)).toString(),(new Date).toString()}}}require("../env");var vows=require("vows"),assert=require("assert"),time=require("./time"),local=time.local,utc=time.utc,suite=vows.describe("d3.time.hours");suite.addBatch({hours:{topic:function(){return d3.time.hours},"returns hours":function(a){assert.deepEqual(a(local(2010,11,31,12,30),local(2010,11,31,15,30)),[local(2010,11,31,13),local(2010,11,31,14),local(2010,11,31,15)])},"has an inclusive lower bound":function(a){assert.deepEqual(a(local(2010,11,31,23),local(2011,0,1,2))[0],local(2010,11,31,23))},"has an exclusive upper bound":function(a){assert.deepEqual(a(local(2010,11,31,23),local(2011,0,1,2))[2],local(2011,0,1,1))},"can skip hours":function(a){assert.deepEqual(a(local(2011,1,1,1),local(2011,1,1,13),3),[local(2011,1,1,3),local(2011,1,1,6),local(2011,1,1,9),local(2011,1,1,12)])},"observes start of daylight savings time":function(a){assert.deepEqual(a(local(2011,2,13,1),local(2011,2,13,5)),[utc(2011,2,13,9),utc(2011,2,13,10),utc(2011,2,13,11)])},"observes end of daylight savings time":function(a){assert.deepEqual(a(local(2011,10,6,0),local(2011,10,6,2)),[utc(2011,10,6,7),utc(2011,10,6,8),utc(2011,10,6,9)])},NPT:{"observes 15-minute offset":tz("Asia/Kathmandu",function(a){assert.deepEqual(a(local(2011,10,7,0),local(2011,10,7,3)),[utc(2011,10,6,18,15),utc(2011,10,6,19,15),utc(2011,10,6,20,15)])})},IST:{"observes 30-minute offset":tz("Asia/Calcutta",function(a){assert.deepEqual(a(local(2011,10,7,0),local(2011,10,7,3)),[utc(2011,10,6,18,30),utc(2011,10,6,19,30),utc(2011,10,6,20,30)])})},UTC:{topic:function(a){return a.utc},"returns hours":function(a){assert.deepEqual(a(utc(2010,11,31,12,30),utc(2010,11,31,15,30)),[utc(2010,11,31,13),utc(2010,11,31,14),utc(2010,11,31,15)])},"has an inclusive lower bound":function(a){assert.deepEqual(a(utc(2010,11,31,23),utc(2011,0,1,2))[0],utc(2010,11,31,23))},"has an exclusive upper bound":function(a){assert.deepEqual(a(utc(2010,11,31,23),utc(2011,0,1,2))[2],utc(2011,0,1,1))},"can skip hours":function(a){assert.deepEqual(a(utc(2011,1,1,1),utc(2011,1,1,13),3),[utc(2011,1,1,3),utc(2011,1,1,6),utc(2011,1,1,9),utc(2011,1,1,12)])},"observes start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,9),utc(2011,2,13,12)),[utc(2011,2,13,9),utc(2011,2,13,10),utc(2011,2,13,11)])},"observes end of daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,7),utc(2011,10,6,10)),[utc(2011,10,6,7),utc(2011,10,6,8),utc(2011,10,6,9)])}}}}),suite.export(module)