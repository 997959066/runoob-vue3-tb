<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Column } from '@antv/g2plot';
import data from '/public/data4.json'; // 确保路径正确

export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {
      // 获取正确的容器
      const container = chartContainer.value;

      data.sort((a, b) => {
        // 比较 MONTH 字符串
        if (a.MONTH < b.MONTH) return -1;
        if (a.MONTH > b.MONTH) return 1;
        return 0;
      });
      
      const column = new Column(container, {
        data,
        // width: 990,
        // height:500,
        xField: 'MONTH',
        yField: 'CHECK_NUM_COUNT',
        seriesField: 'LOCATION_NAME',
        isGroup: 'true',
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
