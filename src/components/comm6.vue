<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {Column, Line} from '@antv/g2plot';
import data from '/public/data6.json'; // 确保路径正确
export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {

      const container = chartContainer.value;

      const line = new Line(container, {
        data,
        xField: '_id',
        yField: 'count',
        columnStyle: {
          radius: [20, 20, 0, 0],
        },columnBackground: {
          style: {
            fill: 'rgba(0,0,0,0.1)',
          },
        },label: {
          position: 'top', // 数据标签显示在柱子顶部
          style: {
            fill: '#595959', // 标签颜色
            fontSize: 12, // 字体大小
            fontWeight: 'bold', // 字体加粗
          }
        },appendPadding: [20, 20, 30, 20], // 设置图表的额外边距 [上, 右, 下, 左]
      });

      line.render();

      //onMounted-----end------
    });

    return {
      chartContainer,
    };
  },
};
</script>

<style scoped>

</style>
