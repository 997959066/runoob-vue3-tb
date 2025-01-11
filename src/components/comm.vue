<template>
  <div id="container" ></div>
</template>

<script>
import * as G2Plot from '@antv/g2plot'
export default {
  setup() {
    const container = document.getElementById('app');
//-----------
    const data = [
      {
        "type": "已加工-即食",
        "productCode": "R23480",
        "levelCount": 1
      },
      {
        "type": "ODV-发货",
        "productCode": "R8374",
        "levelCount": 77
      },
      {
        "type": "ODV-收货",
        "productCode": "R8374",
        "levelCount": 71
      },
      {
        "type": "Other",
        "productCode": "P17637",
        "levelCount": 2
      },
      {
        "type": "出库",
        "productCode": "R8374",
        "levelCount": 70
      },
      {
        "type": "加工中",
        "productCode": "R1753",
        "levelCount": 76
      },
      {
        "type": "干仓收货",
        "productCode": "P19699",
        "levelCount": 29
      },
      {
        "type": "开封",
        "productCode": "P15295",
        "levelCount": 24
      },
      {
        "type": "待加工-冷藏解冻",
        "productCode": "P19016",
        "levelCount": 16
      },
      {
        "type": "成品",
        "productCode": "R1753",
        "levelCount": 107
      },
      {
        "type": "报损",
        "productCode": "R29566",
        "levelCount": 53
      },
      {
        "type": "汁水",
        "productCode": "R16789",
        "levelCount": 1
      },
      {
        "type": "生鲜收货",
        "productCode": "P11129",
        "levelCount": 1
      },
      {
        "type": "留样",
        "productCode": "R23486",
        "levelCount": 9
      },
      {
        "type": "移库",
        "productCode": "P12943",
        "levelCount": 2
      },
      {
        "type": "调整",
        "productCode": "R10160",
        "levelCount": 99
      },
      {
        "type": "转运单-发货",
        "productCode": "P12943",
        "levelCount": 2
      },
      {
        "type": "餐厅订单-发货",
        "productCode": "R29",
        "levelCount": 57
      },
      {
        "type": "餐厅订单-收货",
        "productCode": "R1753",
        "levelCount": 28
      }
    ];
    const config = {
      "title": {
        "visible": true,
        "text": "柱状图"
      },
      "description": {
        "visible": true,
        "text": "一个简单的柱状图"
      },
      "legend": {
        "flipPage": false
      },
      "label": {
        "visible": true
      },
      "forceFit": false,
      "width": 1160,
      "height": 376,
      "yField": "levelCount",
      "xField": "type",
      "colorField": "productCode",
      "id": "column_chart",
      "color": [
        "#5B8FF9",
        "#5AD8A6",
        "#5D7092",
        "#F6BD16",
        "#E8684A",
        "#6DC8EC",
        "#9270CA",
        "#FF9D4D",
        "#269A99",
        "#FF99C3",
        "#5B8FF9",
        "#BDD2FD",
        "#5AD8A6",
        "#BDEFDB"
      ]
    }
    const plot = new G2Plot.Column(container, {
      data,
      ...config,
    });
    plot.render();
//-----------
  }
}

</script>

<style scoped>

</style>
