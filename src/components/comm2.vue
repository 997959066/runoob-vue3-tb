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


      fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
          .then((data) => data.json())
          .then((data) => {
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
          });


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
