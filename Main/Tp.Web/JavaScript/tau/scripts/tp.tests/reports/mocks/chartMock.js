function ChartMock(){this.xArray=[],this.yArray=[]}ChartMock.prototype={x:function(a){return this.xArray.push(a),a},y:function(a){return this.yArray.push(a),a},createGroup:function(){return d3.select("body").append("svg").append("group")},xAxis:{max:3}}