require("../env");var vows=require("vows"),assert=require("assert"),time=require("./time"),local=time.local,utc=time.utc,suite=vows.describe("d3.time.hour");suite.addBatch({hour:{topic:function(){return d3.time.hour},"defaults to floor":function(a){assert.strictEqual(a,a.floor)},floor:{topic:function(a){return a.floor},"returns hours":function(a){assert.deepEqual(a(local(2010,11,31,23,59)),local(2010,11,31,23)),assert.deepEqual(a(local(2011,0,1,0,0)),local(2011,0,1,0)),assert.deepEqual(a(local(2011,0,1,0,1)),local(2011,0,1,0))},"observes start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,8,59)),utc(2011,2,13,8)),assert.deepEqual(a(utc(2011,2,13,9,0)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,1)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,59)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,10,0)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,1)),utc(2011,2,13,10))},"observes end of daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,7,59)),utc(2011,10,6,7)),assert.deepEqual(a(utc(2011,10,6,8,0)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,1)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,59)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,9,0)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,1)),utc(2011,10,6,9))},NPT:{"observes 15-minute offset":time.zone("Asia/Kathmandu",function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),utc(2010,11,31,17,15)),assert.deepEqual(a(local(2011,0,1,0,0,0)),utc(2010,11,31,18,15)),assert.deepEqual(a(local(2011,0,1,0,0,1)),utc(2010,11,31,18,15))})},IST:{"observes 30-minute offset":time.zone("Asia/Calcutta",function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),utc(2010,11,31,17,30)),assert.deepEqual(a(local(2011,0,1,0,0,0)),utc(2010,11,31,18,30)),assert.deepEqual(a(local(2011,0,1,0,0,1)),utc(2010,11,31,18,30))})}},ceil:{topic:function(a){return a.ceil},"returns hours":function(a){assert.deepEqual(a(local(2010,11,31,23,59)),local(2011,0,1,0)),assert.deepEqual(a(local(2011,0,1,0,0)),local(2011,0,1,0)),assert.deepEqual(a(local(2011,0,1,0,1)),local(2011,0,1,1))},"observes start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,8,59)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,0)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,1)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,9,59)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,0)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,1)),utc(2011,2,13,11))},"observes end of daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,7,59)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,0)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,1)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,8,59)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,0)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,1)),utc(2011,10,6,10))},NPT:{"observes 15-minute offset":time.zone("Asia/Kathmandu",function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),utc(2010,11,31,18,15)),assert.deepEqual(a(local(2011,0,1,0,0,0)),utc(2010,11,31,18,15)),assert.deepEqual(a(local(2011,0,1,0,0,1)),utc(2010,11,31,19,15))})},IST:{"observes 30-minute offset":time.zone("Asia/Calcutta",function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),utc(2010,11,31,18,30)),assert.deepEqual(a(local(2011,0,1,0,0,0)),utc(2010,11,31,18,30)),assert.deepEqual(a(local(2011,0,1,0,0,1)),utc(2010,11,31,19,30))})}},offset:{topic:function(a){return a.offset},"does not modify the passed-in date":function(a){var b=local(2010,11,31,23,59,59,999);a(b,1),assert.deepEqual(b,local(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59,999),1),local(2011,0,1,0,59,59,999)),assert.deepEqual(a(local(2010,11,31,23,59,59,456),-2),local(2010,11,31,21,59,59,456))},"allows negative offsets":function(a){assert.deepEqual(a(local(2010,11,31,12),-1),local(2010,11,31,11)),assert.deepEqual(a(local(2011,0,1,1),-2),local(2010,11,31,23)),assert.deepEqual(a(local(2011,0,1,0),-1),local(2010,11,31,23))},"allows positive offsets":function(a){assert.deepEqual(a(local(2010,11,31,11),1),local(2010,11,31,12)),assert.deepEqual(a(local(2010,11,31,23),2),local(2011,0,1,1)),assert.deepEqual(a(local(2010,11,31,23),1),local(2011,0,1,0))},"allows zero offset":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59,999),0),local(2010,11,31,23,59,59,999)),assert.deepEqual(a(local(2010,11,31,23,59,58,0),0),local(2010,11,31,23,59,58,0))}},UTC:{topic:function(a){return a.utc},"defaults to floor":function(a){assert.strictEqual(a,a.floor)},floor:{topic:function(a){return a.floor},"returns hours":function(a){assert.deepEqual(a(utc(2010,11,31,23,59)),utc(2010,11,31,23)),assert.deepEqual(a(utc(2011,0,1,0,0)),utc(2011,0,1,0)),assert.deepEqual(a(utc(2011,0,1,0,1)),utc(2011,0,1,0))},"does not observe the start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,8,59)),utc(2011,2,13,8)),assert.deepEqual(a(utc(2011,2,13,9,0)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,1)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,59)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,10,0)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,1)),utc(2011,2,13,10))},"does not observe the end of daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,7,59)),utc(2011,10,6,7)),assert.deepEqual(a(utc(2011,10,6,8,0)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,1)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,59)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,9,0)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,1)),utc(2011,10,6,9))}},ceil:{topic:function(a){return a.ceil},"returns hours":function(a){assert.deepEqual(a(utc(2010,11,31,23,59)),utc(2011,0,1,0)),assert.deepEqual(a(utc(2011,0,1,0,0)),utc(2011,0,1,0)),assert.deepEqual(a(utc(2011,0,1,0,1)),utc(2011,0,1,1))},"does not observe the start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,8,59)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,0)),utc(2011,2,13,9)),assert.deepEqual(a(utc(2011,2,13,9,1)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,9,59)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,0)),utc(2011,2,13,10)),assert.deepEqual(a(utc(2011,2,13,10,1)),utc(2011,2,13,11))},"does not observe the end of daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,7,59)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,0)),utc(2011,10,6,8)),assert.deepEqual(a(utc(2011,10,6,8,1)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,8,59)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,0)),utc(2011,10,6,9)),assert.deepEqual(a(utc(2011,10,6,9,1)),utc(2011,10,6,10))}},offset:{topic:function(a){return a.offset},"does not modify the passed-in date":function(a){var b=utc(2010,11,31,23,59,59,999);a(b,1),assert.deepEqual(b,utc(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59,999),1),utc(2011,0,1,0,59,59,999)),assert.deepEqual(a(utc(2010,11,31,23,59,59,456),-2),utc(2010,11,31,21,59,59,456))},"allows negative offsets":function(a){assert.deepEqual(a(utc(2010,11,31,12),-1),utc(2010,11,31,11)),assert.deepEqual(a(utc(2011,0,1,1),-2),utc(2010,11,31,23)),assert.deepEqual(a(utc(2011,0,1,0),-1),utc(2010,11,31,23))},"allows positive offsets":function(a){assert.deepEqual(a(utc(2010,11,31,11),1),utc(2010,11,31,12)),assert.deepEqual(a(utc(2010,11,31,23),2),utc(2011,0,1,1)),assert.deepEqual(a(utc(2010,11,31,23),1),utc(2011,0,1,0))},"allows zero offset":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59,999),0),utc(2010,11,31,23,59,59,999)),assert.deepEqual(a(utc(2010,11,31,23,59,58,0),0),utc(2010,11,31,23,59,58,0))}}}}}),suite.export(module)