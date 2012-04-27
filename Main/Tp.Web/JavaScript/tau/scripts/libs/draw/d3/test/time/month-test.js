require("../env");var vows=require("vows"),assert=require("assert"),time=require("./time"),local=time.local,utc=time.utc,suite=vows.describe("d3.time.month");suite.addBatch({month:{topic:function(){return d3.time.month},"defaults to floor":function(a){assert.strictEqual(a,a.floor)},floor:{topic:function(a){return a.floor},"returns months":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),local(2010,11,1)),assert.deepEqual(a(local(2011,0,1,0,0,0)),local(2011,0,1)),assert.deepEqual(a(local(2011,0,1,0,0,1)),local(2011,0,1))},"observes the start of daylight savings time":function(a){assert.deepEqual(a(local(2011,2,13,1)),local(2011,2,1))},"observes the end of the daylight savings time":function(a){assert.deepEqual(a(local(2011,10,6,1)),local(2011,10,1))}},ceil:{topic:function(a){return a.ceil},"returns months":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59)),local(2011,0,1)),assert.deepEqual(a(local(2011,0,1,0,0,0)),local(2011,0,1)),assert.deepEqual(a(local(2011,0,1,0,0,1)),local(2011,1,1))},"observes the start of daylight savings time":function(a){assert.deepEqual(a(local(2011,2,13,1)),local(2011,3,1))},"observes the end of the daylight savings time":function(a){assert.deepEqual(a(local(2011,10,6,1)),local(2011,11,1))}},offset:{topic:function(a){return a.offset},"does not modify the passed-in date":function(a){var b=local(2010,11,31,23,59,59,999);a(b,1),assert.deepEqual(b,local(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59,999),1),local(2011,0,31,23,59,59,999)),assert.deepEqual(a(local(2010,11,31,23,59,59,456),-2),local(2010,9,31,23,59,59,456))},"allows negative offsets":function(a){assert.deepEqual(a(local(2010,11,1),-1),local(2010,10,1)),assert.deepEqual(a(local(2011,0,1),-2),local(2010,10,1)),assert.deepEqual(a(local(2011,0,1),-1),local(2010,11,1))},"allows positive offsets":function(a){assert.deepEqual(a(local(2010,10,1),1),local(2010,11,1)),assert.deepEqual(a(local(2010,10,1),2),local(2011,0,1)),assert.deepEqual(a(local(2010,11,1),1),local(2011,0,1))},"allows zero offset":function(a){assert.deepEqual(a(local(2010,11,31,23,59,59,999),0),local(2010,11,31,23,59,59,999)),assert.deepEqual(a(local(2010,11,31,23,59,58,0),0),local(2010,11,31,23,59,58,0))}},UTC:{topic:function(a){return a.utc},"defaults to floor":function(a){assert.strictEqual(a,a.floor)},floor:{topic:function(a){return a.floor},"returns months":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59)),utc(2010,11,1)),assert.deepEqual(a(utc(2011,0,1,0,0,0)),utc(2011,0,1)),assert.deepEqual(a(utc(2011,0,1,0,0,1)),utc(2011,0,1))},"does not observe the start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,1)),utc(2011,2,1))},"does not observe the end of the daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,1)),utc(2011,10,1))}},ceil:{topic:function(a){return a.ceil},"returns months":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59)),utc(2011,0,1)),assert.deepEqual(a(utc(2011,0,1,0,0,0)),utc(2011,0,1)),assert.deepEqual(a(utc(2011,0,1,0,0,1)),utc(2011,1,1))},"does not observe the start of daylight savings time":function(a){assert.deepEqual(a(utc(2011,2,13,1)),utc(2011,3,1))},"does not observe the end of the daylight savings time":function(a){assert.deepEqual(a(utc(2011,10,6,1)),utc(2011,11,1))}},offset:{topic:function(a){return a.offset},"does not modify the passed-in date":function(a){var b=utc(2010,11,31,23,59,59,999);a(b,1),assert.deepEqual(b,utc(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59,999),1),utc(2011,0,31,23,59,59,999)),assert.deepEqual(a(utc(2010,11,31,23,59,59,456),-2),utc(2010,9,31,23,59,59,456))},"allows negative offsets":function(a){assert.deepEqual(a(utc(2010,11,1),-1),utc(2010,10,1)),assert.deepEqual(a(utc(2011,0,1),-2),utc(2010,10,1)),assert.deepEqual(a(utc(2011,0,1),-1),utc(2010,11,1))},"allows positive offsets":function(a){assert.deepEqual(a(utc(2010,10,1),1),utc(2010,11,1)),assert.deepEqual(a(utc(2010,10,1),2),utc(2011,0,1)),assert.deepEqual(a(utc(2010,11,1),1),utc(2011,0,1))},"allows zero offset":function(a){assert.deepEqual(a(utc(2010,11,31,23,59,59,999),0),utc(2010,11,31,23,59,59,999)),assert.deepEqual(a(utc(2010,11,31,23,59,58,0),0),utc(2010,11,31,23,59,58,0))}}}}}),suite.export(module)