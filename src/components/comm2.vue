<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer"></div>
  </div>
</template>

<script>
import * as G2Plot from '@antv/g2plot';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const chartContainer = ref(null); // 定义 ref

    onMounted(() => {
      // 获取正确的容器
      const container = chartContainer.value;
      const data = [
        { series: 'London', x: '2019-01', y: 681 },
        { series: 'London', x: '2019-02', y: 275 },
        { series: 'London', x: '2019-03', y: 404 },
        { series: 'London', x: '2019-04', y: 57 },
        { series: 'London', x: '2019-05', y: 752 },
        { series: 'London', x: '2019-06', y: 629 },
        { series: 'Paris', x: '2019-01', y: 388 },
        { series: 'Paris', x: '2019-02', y: 384 },
        { series: 'Paris', x: '2019-03', y: 973 },
        { series: 'Paris', x: '2019-04', y: 639 },
        { series: 'Paris', x: '2019-05', y: 808 },
        { series: 'Paris', x: '2019-06', y: 538 },
      ];

      const config = {
        title: {
          visible: true,
          text: '折线图',
        },
        description: {
          visible: true,
          text: '一个简单的折线图',
        },
        legend: {
          flipPage: false,
        },
        forceFit: false,
        width: 560, // 固定宽度
        height: 376, // 固定高度
        seriesField: 'series',
        xField: 'x',
        yField: 'y',
        id: 'line_chart',
        color: ['#5B8FF9', '#5AD8A6'],
      };

      // 创建并渲染图表
      const plot = new G2Plot.Line(container, {
        data,
        ...config,
      });
      plot.render();
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
