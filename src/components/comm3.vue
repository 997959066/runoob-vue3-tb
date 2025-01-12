<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Column } from '@antv/g2plot';


export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {
      // 获取正确的容器
      const container = chartContainer.value;

            const data =[
              {
                "city": "石家庄",
                "type": "水果",
                "value": 14500
              },
              {
                "city": "石家庄",
                "type": "米面",
                "value": 8500
              },
              {
                "city": "石家庄",
                "type": "特产零食",
                "value": 10000
              },
              {
                "city": "石家庄",
                "type": "茶叶",
                "value": 7000
              },
              {
                "city": "深圳",
                "type": "水果",
                "value": 9000
              },
              {
                "city": "深圳",
                "type": "米面",
                "value": 8500
              },
              {
                "city": "深圳",
                "type": "特产零食",
                "value": 11000
              },
              {
                "city": "深圳",
                "type": "茶叶",
                "value": 6000
              },
              {
                "city": "温州",
                "type": "水果",
                "value": 16000
              },
              {
                "city": "温州",
                "type": "米面",
                "value": 5000
              },
              {
                "city": "温州",
                "type": "特产零食",
                "value": 6000
              },
              {
                "city": "温州",
                "type": "茶叶",
                "value": 10000
              },
              {
                "city": "宁波",
                "type": "水果",
                "value": 14000
              },
              {
                "city": "宁波",
                "type": "米面",
                "value": 9000
              },
              {
                "city": "宁波",
                "type": "特产零食",
                "value": 10000
              },
              {
                "city": "宁波",
                "type": "茶叶",
                "value": 9000
              },
              {
                "city": "无锡",
                "type": "水果",
                "value": 14000
              },
              {
                "city": "无锡",
                "type": "米面",
                "value": 9000
              },
              {
                "city": "无锡",
                "type": "特产零食",
                "value": 10000
              },
              {
                "city": "无锡",
                "type": "茶叶",
                "value": 6000
              },
              {
                "city": "杭州",
                "type": "水果",
                "value": 9000
              },
              {
                "city": "杭州",
                "type": "米面",
                "value": 8500
              },
              {
                "city": "杭州",
                "type": "特产零食",
                "value": 10000
              },
              {
                "city": "杭州",
                "type": "茶叶",
                "value": 6000
              },
              {
                "city": "北京",
                "type": "水果",
                "value": 17000
              },
              {
                "city": "北京",
                "type": "米面",
                "value": 6000
              },
              {
                "city": "北京",
                "type": "特产零食",
                "value": 7000
              },
              {
                "city": "北京",
                "type": "茶叶",
                "value": 10000
              },
              {
                "city": "上海",
                "type": "水果",
                "value": 18000
              },
              {
                "city": "上海",
                "type": "米面",
                "value": 11000
              },
              {
                "city": "上海",
                "type": "特产零食",
                "value": 15000
              },
              {
                "city": "上海",
                "type": "茶叶",
                "value": 14000
              }
            ];
            const column = new Column(container, {
              data,
              xField: 'city',
              yField: 'value',
              seriesField: 'type',
              isGroup: 'true',
              columnStyle: {
                radius: [20, 20, 0, 0],
              },
            });

            column.render();


      //onMounted-----end------
    });

    return {
      chartContainer,
    };
  },
};
</script>

<style scoped>
/* 确保容器有固定宽高，避免无限扩展 */
#container {
  width: 560px; /* 宽度需与配置中的 width 保持一致 */
  height: 376px; /* 高度需与配置中的 height 保持一致 */
}
</style>
