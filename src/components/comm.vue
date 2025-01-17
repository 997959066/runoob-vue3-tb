<template>
  <!-- 为容器 div 设置 id，并通过 ref 获取 -->
  <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>

</template>

<script>
import * as G2Plot from '@antv/g2plot';
import { onMounted, ref } from 'vue';
import data from '/public/data1.json'; // 确保路径正确
export default {
  setup() {
    // 使用 Vue ref 来获取 DOM 元素
    const chartContainer = ref(null);

    onMounted(() => {
      // 获取正确的容器
      const container = chartContainer.value;
      data.sort((a, b) => {
        return a.month.localeCompare(b.month); // 按字符串升序排列
      });
      const config = {
        title: {
          visible: true,
          text: '柱状图',
        },
        description: {
          visible: true,
          text: '订单统计',
        },
        legend: {
          flipPage: false,
        },
        label: {
          visible: true,
        },
        forceFit: false,
        width: 1160,
        height: 376,
        yField: 'count',
        xField: 'month',
        // colorField: 'count',
        seriesField: 'collection',
        isGroup: 'true',
        id: 'column_chart',
        color: [
          '#5B8FF9',
          '#5AD8A6',
          '#5D7092',
          '#F6BD16',
          '#E8684A',
          '#6DC8EC',
          '#9270CA',
          '#FF9D4D',
          '#269A99',
          '#FF99C3',
          '#5B8FF9',
          '#BDD2FD',
          '#5AD8A6',
          '#BDEFDB',
        ],
      };

      // 渲染柱状图
      const plot = new G2Plot.Column(container, {
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
/* 固定图表容器的宽高 */
#container {
}
</style>
