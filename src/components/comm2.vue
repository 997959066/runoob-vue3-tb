<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Column } from '@antv/g2plot';
import data from '/public/data2.json'; // 确保路径正确

export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {
      // 获取正确的容器
      const container = chartContainer.value;
      const column = new Column(container, {
        data,
        // width: 990,
        // height:500,
        xField: 'type',
        yField: 'levelCount',
        seriesField: 'productName',
        // isGroup: 'true',
        columnStyle: {
          radius: [20, 20, 0, 0],
        }
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

</style>
