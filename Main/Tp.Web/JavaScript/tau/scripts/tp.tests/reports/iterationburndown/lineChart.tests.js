require(["tp/reports/iterationburndown/lineChart","libs/d3/d3","tp/date.utils","tp/reports/iterationburndown/dataProvider"],function(a,b,c,d){(function(){module("line chart tests",{setup:function(){this.dataProvider=new d,this.dataProvider.dataRepository=new DataRepositoryMock,this.chart=new ChartMock},teardown:function(){b.select("body svg").remove()}}),test("should render line chart",function(){var b=this;this.dataProvider.initialize(null,function(){b.chart.xAxis=b.dataProvider.getXAxis(),b.chart.yAxis=b.dataProvider.getYAxis(),a.render(b.chart,b.dataProvider),equals(b.chart.xArray[0],0,"line x0 is correct"),equals(b.chart.xArray[1],1,"line x1 is correct"),equals(b.chart.xArray[2],2,"line x2 is correct"),equals(b.chart.xArray[3],3,"line x3 is correct"),equals(b.chart.yArray[0],19,"line y0 is correct"),equals(b.chart.yArray[1],20,"line y1 is correct"),equals(b.chart.yArray[2],18,"line y2 is correct"),equals(b.chart.yArray[3],10,"line y3 is correct"),equals(b.chart.xArray[5],0,"point x0 is correct"),equals(b.chart.xArray[6],1,"point x1 is correct"),equals(b.chart.xArray[7],2,"point x2 is correct"),equals(b.chart.xArray[8],3,"point x3 is correct"),equals(b.chart.yArray[4],19,"point y0 is correct"),equals(b.chart.yArray[5],20,"point y1 is correct"),equals(b.chart.yArray[6],18,"point y2 is correct"),equals(b.chart.yArray[7],10,"point y3 is correct")})})})()})