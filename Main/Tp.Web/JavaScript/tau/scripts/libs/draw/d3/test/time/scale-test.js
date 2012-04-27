require("../env");var vows=require("vows"),assert=require("assert"),time=require("./time"),local=time.local,utc=time.utc,suite=vows.describe("d3.time.scale");suite.addBatch({scale:{topic:function(){return d3.time.scale},copy:{"changes to the domain are isolated":function(a){var b=a().domain([local(2009,0,1),local(2010,0,1)]),c=b.copy();b.domain([local(2010,0,1),local(2011,0,1)]),assert.deepEqual(c.domain(),[local(2009,0,1),local(2010,0,1)]),assert.equal(b(local(2010,0,1)),0),assert.equal(c(local(2010,0,1)),1),c.domain([local(2011,0,1),local(2012,0,1)]),assert.equal(b(local(2011,0,1)),1),assert.equal(c(local(2011,0,1)),0),assert.deepEqual(b.domain(),[local(2010,0,1),local(2011,0,1)]),assert.deepEqual(c.domain(),[local(2011,0,1),local(2012,0,1)])},"changes to the range are isolated":function(a){var b=a().domain([local(2009,0,1),local(2010,0,1)]),c=b.copy();b.range([1,2]),assert.deepEqual(b.invert(1),local(2009,0,1)),assert.deepEqual(c.invert(1),local(2010,0,1)),assert.deepEqual(c.range(),[0,1]),c.range([2,3]),assert.deepEqual(b.invert(2),local(2010,0,1)),assert.deepEqual(c.invert(2),local(2009,0,1)),assert.deepEqual(b.range(),[1,2]),assert.deepEqual(c.range(),[2,3])},"changes to the interpolator are isolated":function(a){var b=a().domain([local(2009,0,1),local(2010,0,1)]).range(["red","blue"]),c=b.copy();b.interpolate(d3.interpolateHsl),assert.equal(b(local(2009,6,1)),"#04ff00"),assert.equal(c(local(2009,6,1)),"#81007e"),assert.equal(c.interpolate(),d3.interpolate)},"changes to clamping are isolated":function(a){var b=a().domain([local(2009,0,1),local(2010,0,1)]).clamp(!0),c=b.copy();b.clamp(!1),assert.equal(b(local(2011,0,1)),2),assert.equal(c(local(2011,0,1)),1),assert.isTrue(c.clamp()),c.clamp(!1),assert.equal(b(local(2011,0,1)),2),assert.equal(c(local(2011,0,1)),2),assert.isFalse(b.clamp())}},ticks:{"observes explicit tick interval":function(a){var b=a().domain([local(2011,0,1,12,1,0),local(2011,0,1,12,4,4)]);assert.deepEqual(b.ticks(d3.time.minutes),[local(2011,0,1,12,1),local(2011,0,1,12,2),local(2011,0,1,12,3),local(2011,0,1,12,4)])},"observes explicit tick interval and step":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,33,4)]);assert.deepEqual(b.ticks(d3.time.minutes,10),[local(2011,0,1,12,0),local(2011,0,1,12,10),local(2011,0,1,12,20),local(2011,0,1,12,30)])},"generates sub-second ticks":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,0,1)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,0,0,0),local(2011,0,1,12,0,0,200),local(2011,0,1,12,0,0,400),local(2011,0,1,12,0,0,600),local(2011,0,1,12,0,0,800),local(2011,0,1,12,0,1,0)])},"generates 1-second ticks":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,0,4)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,0,0),local(2011,0,1,12,0,1),local(2011,0,1,12,0,2),local(2011,0,1,12,0,3),local(2011,0,1,12,0,4)])},"generates 5-second ticks":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,0,20)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,0,0),local(2011,0,1,12,0,5),local(2011,0,1,12,0,10),local(2011,0,1,12,0,15),local(2011,0,1,12,0,20)])},"generates 15-second ticks":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,0,50)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,0,0),local(2011,0,1,12,0,15),local(2011,0,1,12,0,30),local(2011,0,1,12,0,45)])},"generates 30-second ticks":function(a){var b=a().domain([local(2011,0,1,12,0,0),local(2011,0,1,12,1,50)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,0,0),local(2011,0,1,12,0,30),local(2011,0,1,12,1,0),local(2011,0,1,12,1,30)])},"generates 1-minute ticks":function(a){var b=a().domain([local(2011,0,1,12,0,27),local(2011,0,1,12,4,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,1),local(2011,0,1,12,2),local(2011,0,1,12,3),local(2011,0,1,12,4)])},"generates 5-minute ticks":function(a){var b=a().domain([local(2011,0,1,12,3,27),local(2011,0,1,12,21,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,5),local(2011,0,1,12,10),local(2011,0,1,12,15),local(2011,0,1,12,20)])},"generates 15-minute ticks":function(a){var b=a().domain([local(2011,0,1,12,8,27),local(2011,0,1,13,4,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,15),local(2011,0,1,12,30),local(2011,0,1,12,45),local(2011,0,1,13,0)])},"generates 30-minute ticks":function(a){var b=a().domain([local(2011,0,1,12,28,27),local(2011,0,1,14,4,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,12,30),local(2011,0,1,13,0),local(2011,0,1,13,30),local(2011,0,1,14,0)])},"generates 1-hour ticks":function(a){var b=a().domain([local(2011,0,1,12,28,27),local(2011,0,1,16,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,13,0),local(2011,0,1,14,0),local(2011,0,1,15,0),local(2011,0,1,16,0)])},"generates 3-hour ticks":function(a){var b=a().domain([local(2011,0,1,14,28,27),local(2011,0,2,1,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,15,0),local(2011,0,1,18,0),local(2011,0,1,21,0),local(2011,0,2,0,0)])},"generates 6-hour ticks":function(a){var b=a().domain([local(2011,0,1,16,28,27),local(2011,0,2,14,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,18,0),local(2011,0,2,0,0),local(2011,0,2,6,0),local(2011,0,2,12,0)])},"generates 12-hour ticks":function(a){var b=a().domain([local(2011,0,1,16,28,27),local(2011,0,3,21,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,2,0,0),local(2011,0,2,12,0),local(2011,0,3,0,0),local(2011,0,3,12,0)])},"generates 1-day ticks":function(a){var b=a().domain([local(2011,0,1,16,28,27),local(2011,0,5,21,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,2,0,0),local(2011,0,3,0,0),local(2011,0,4,0,0),local(2011,0,5,0,0)])},"generates 2-day ticks":function(a){var b=a().domain([local(2011,0,2,16,28,27),local(2011,0,9,21,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,3,0,0),local(2011,0,5,0,0),local(2011,0,7,0,0),local(2011,0,9,0,0)])},"generates 1-week ticks":function(a){var b=a().domain([local(2011,0,1,16,28,27),local(2011,0,23,21,34,12)]);assert.deepEqual(b.ticks(4),[local(2011,0,2,0,0),local(2011,0,9,0,0),local(2011,0,16,0,0),local(2011,0,23,0,0)])},"generates 1-month ticks":function(a){var b=a().domain([local(2011,0,18),local(2011,4,2)]);assert.deepEqual(b.ticks(4),[local(2011,1,1,0,0),local(2011,2,1,0,0),local(2011,3,1,0,0),local(2011,4,1,0,0)])},"generates 3-month ticks":function(a){var b=a().domain([local(2010,11,18),local(2011,10,2)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,0,0),local(2011,3,1,0,0),local(2011,6,1,0,0),local(2011,9,1,0,0)])},"generates 1-year ticks":function(a){var b=a().domain([local(2010,11,18),local(2014,2,2)]);assert.deepEqual(b.ticks(4),[local(2011,0,1,0,0),local(2012,0,1,0,0),local(2013,0,1,0,0),local(2014,0,1,0,0)])},"generates multi-year ticks":function(a){var b=a().domain([local(0,11,18),local(2014,2,2)]);assert.deepEqual(b.ticks(6),[local(500,0,1,0,0),local(1e3,0,1,0,0),local(1500,0,1,0,0),local(2e3,0,1,0,0)])}},tickFormat:{topic:function(a){return a().tickFormat()},"formats year on New Year's":function(a){assert.equal(a(local(2011,0,1)),"2011"),assert.equal(a(local(2012,0,1)),"2012"),assert.equal(a(local(2013,0,1)),"2013")},"formats month on the 1st of each month":function(a){assert.equal(a(local(2011,1,1)),"February"),assert.equal(a(local(2011,2,1)),"March"),assert.equal(a(local(2011,3,1)),"April")},"formats week on Sunday midnight":function(a){assert.equal(a(local(2011,1,6)),"Feb 06"),assert.equal(a(local(2011,1,13)),"Feb 13"),assert.equal(a(local(2011,1,20)),"Feb 20")},"formats date on midnight":function(a){assert.equal(a(local(2011,1,2)),"Wed 02"),assert.equal(a(local(2011,1,3)),"Thu 03"),assert.equal(a(local(2011,1,4)),"Fri 04")},"formats hour on minute zero":function(a){assert.equal(a(local(2011,1,2,11)),"11 AM"),assert.equal(a(local(2011,1,2,12)),"12 PM"),assert.equal(a(local(2011,1,2,13)),"01 PM")},"formats minute on second zero":function(a){assert.equal(a(local(2011,1,2,11,59)),"11:59"),assert.equal(a(local(2011,1,2,12,1)),"12:01"),assert.equal(a(local(2011,1,2,12,2)),"12:02")},"otherwise, formats second":function(a){assert.equal(a(local(2011,1,2,12,1,9)),":09"),assert.equal(a(local(2011,1,2,12,1,10)),":10"),assert.equal(a(local(2011,1,2,12,1,11)),":11")}},UTC:{topic:function(a){return a.utc},ticks:{"observes explicit tick interval":function(a){var b=a().domain([utc(2011,0,1,12,1,0),utc(2011,0,1,12,4,4)]);assert.deepEqual(b.ticks(d3.time.minutes),[utc(2011,0,1,12,1),utc(2011,0,1,12,2),utc(2011,0,1,12,3),utc(2011,0,1,12,4)])},"observes explicit tick interval and step":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,33,4)]);assert.deepEqual(b.ticks(d3.time.minutes,10),[utc(2011,0,1,12,0),utc(2011,0,1,12,10),utc(2011,0,1,12,20),utc(2011,0,1,12,30)])},"generates sub-second ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,1)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,0,0,0),utc(2011,0,1,12,0,0,200),utc(2011,0,1,12,0,0,400),utc(2011,0,1,12,0,0,600),utc(2011,0,1,12,0,0,800),utc(2011,0,1,12,0,1,0)])},"generates 1-second ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,4)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,1),utc(2011,0,1,12,0,2),utc(2011,0,1,12,0,3),utc(2011,0,1,12,0,4)])},"generates 5-second ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,20)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,5),utc(2011,0,1,12,0,10),utc(2011,0,1,12,0,15),utc(2011,0,1,12,0,20)])},"generates 15-second ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,50)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,15),utc(2011,0,1,12,0,30),utc(2011,0,1,12,0,45)])},"generates 30-second ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,0),utc(2011,0,1,12,1,50)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,0,0),utc(2011,0,1,12,0,30),utc(2011,0,1,12,1,0),utc(2011,0,1,12,1,30)])},"generates 1-minute ticks":function(a){var b=a().domain([utc(2011,0,1,12,0,27),utc(2011,0,1,12,4,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,1),utc(2011,0,1,12,2),utc(2011,0,1,12,3),utc(2011,0,1,12,4)])},"generates 5-minute ticks":function(a){var b=a().domain([utc(2011,0,1,12,3,27),utc(2011,0,1,12,21,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,5),utc(2011,0,1,12,10),utc(2011,0,1,12,15),utc(2011,0,1,12,20)])},"generates 15-minute ticks":function(a){var b=a().domain([utc(2011,0,1,12,8,27),utc(2011,0,1,13,4,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,15),utc(2011,0,1,12,30),utc(2011,0,1,12,45),utc(2011,0,1,13,0)])},"generates 30-minute ticks":function(a){var b=a().domain([utc(2011,0,1,12,28,27),utc(2011,0,1,14,4,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,12,30),utc(2011,0,1,13,0),utc(2011,0,1,13,30),utc(2011,0,1,14,0)])},"generates 1-hour ticks":function(a){var b=a().domain([utc(2011,0,1,12,28,27),utc(2011,0,1,16,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,13,0),utc(2011,0,1,14,0),utc(2011,0,1,15,0),utc(2011,0,1,16,0)])},"generates 3-hour ticks":function(a){var b=a().domain([utc(2011,0,1,14,28,27),utc(2011,0,2,1,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,15,0),utc(2011,0,1,18,0),utc(2011,0,1,21,0),utc(2011,0,2,0,0)])},"generates 6-hour ticks":function(a){var b=a().domain([utc(2011,0,1,16,28,27),utc(2011,0,2,14,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,18,0),utc(2011,0,2,0,0),utc(2011,0,2,6,0),utc(2011,0,2,12,0)])},"generates 12-hour ticks":function(a){var b=a().domain([utc(2011,0,1,16,28,27),utc(2011,0,3,21,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,2,0,0),utc(2011,0,2,12,0),utc(2011,0,3,0,0),utc(2011,0,3,12,0)])},"generates 1-day ticks":function(a){var b=a().domain([utc(2011,0,1,16,28,27),utc(2011,0,5,21,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,2,0,0),utc(2011,0,3,0,0),utc(2011,0,4,0,0),utc(2011,0,5,0,0)])},"generates 2-day ticks":function(a){var b=a().domain([utc(2011,0,2,16,28,27),utc(2011,0,9,21,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,3,0,0),utc(2011,0,5,0,0),utc(2011,0,7,0,0),utc(2011,0,9,0,0)])},"generates 1-week ticks":function(a){var b=a().domain([utc(2011,0,1,16,28,27),utc(2011,0,23,21,34,12)]);assert.deepEqual(b.ticks(4),[utc(2011,0,2,0,0),utc(2011,0,9,0,0),utc(2011,0,16,0,0),utc(2011,0,23,0,0)])},"generates 1-month ticks":function(a){var b=a().domain([utc(2011,0,18),utc(2011,4,2)]);assert.deepEqual(b.ticks(4),[utc(2011,1,1,0,0),utc(2011,2,1,0,0),utc(2011,3,1,0,0),utc(2011,4,1,0,0)])},"generates 3-month ticks":function(a){var b=a().domain([utc(2010,11,18),utc(2011,10,2)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,0,0),utc(2011,3,1,0,0),utc(2011,6,1,0,0),utc(2011,9,1,0,0)])},"generates 1-year ticks":function(a){var b=a().domain([utc(2010,11,18),utc(2014,2,2)]);assert.deepEqual(b.ticks(4),[utc(2011,0,1,0,0),utc(2012,0,1,0,0),utc(2013,0,1,0,0),utc(2014,0,1,0,0)])},"generates multi-year ticks":function(a){var b=a().domain([utc(0,11,18),utc(2014,2,2)]);assert.deepEqual(b.ticks(6),[utc(500,0,1,0,0),utc(1e3,0,1,0,0),utc(1500,0,1,0,0),utc(2e3,0,1,0,0)])}},tickFormat:{topic:function(a){return a().tickFormat()},"formats year on New Year's":function(a){assert.equal(a(utc(2011,0,1)),"2011"),assert.equal(a(utc(2012,0,1)),"2012"),assert.equal(a(utc(2013,0,1)),"2013")},"formats month on the 1st of each month":function(a){assert.equal(a(utc(2011,1,1)),"February"),assert.equal(a(utc(2011,2,1)),"March"),assert.equal(a(utc(2011,3,1)),"April")},"formats week on Sunday midnight":function(a){assert.equal(a(utc(2011,1,6)),"Feb 06"),assert.equal(a(utc(2011,1,13)),"Feb 13"),assert.equal(a(utc(2011,1,20)),"Feb 20")},"formats date on midnight":function(a){assert.equal(a(utc(2011,1,2)),"Wed 02"),assert.equal(a(utc(2011,1,3)),"Thu 03"),assert.equal(a(utc(2011,1,4)),"Fri 04")},"formats hour on minute zero":function(a){assert.equal(a(utc(2011,1,2,11)),"11 AM"),assert.equal(a(utc(2011,1,2,12)),"12 PM"),assert.equal(a(utc(2011,1,2,13)),"01 PM")},"formats minute on second zero":function(a){assert.equal(a(utc(2011,1,2,11,59)),"11:59"),assert.equal(a(utc(2011,1,2,12,1)),"12:01"),assert.equal(a(utc(2011,1,2,12,2)),"12:02")},"formats second on millisecond zero":function(a){assert.equal(a(utc(2011,1,2,12,1,9)),":09"),assert.equal(a(utc(2011,1,2,12,1,10)),":10"),assert.equal(a(utc(2011,1,2,12,1,11)),":11")},"otherwise, formats milliseconds":function(a){assert.equal(a(utc(2011,1,2,12,1,0,9)),".009"),assert.equal(a(utc(2011,1,2,12,1,0,10)),".010"),assert.equal(a(utc(2011,1,2,12,1,0,11)),".011")}}}}}),suite.export(module)