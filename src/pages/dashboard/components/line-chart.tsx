import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart: React.FC = () => {
  const option = {
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['Github','Gitee','Others']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Github',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Gitee',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Others',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default LineChart;