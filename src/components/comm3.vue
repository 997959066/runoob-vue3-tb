<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
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

      const data = [
        { type: '已加工-即食', productCode: 'R2348ewqeqeqeqweqeqweqeqweqweqeqewq0', levelCount: 109 },
        { type: '已加工-即食', productCode: 'R2348ewqwqwqeqeqeqweqeqweqeqweqweqeqewq0', levelCount: 108 },
        { type: '已加工-即食', productCode: 'R234wqwqeqeqeqweqeq21wqwqeqeqeqweqeq', levelCount: 104 },
        { type: '已加工-即食', productCode: 'Rwqwqeqeqeqweqeq23wqwqeqeqeqweqeq221', levelCount: 104 },
        { type: '已加工-即食', productCode: 'R2wqwqeqewqwqeqeqeqweqeqqeqweqeqw421', levelCount: 104 },
        { type: '已加工-即食', productCode: 'Rwqwqeqeqeqweqeq2fwqwqeqeqeqweqeq421', levelCount: 104 },
        { type: '已加工-即食', productCode: 'Rwqwqeqeqeqweqeq23wqwqeqeqeqweqeqr21', levelCount: 104 },
        { type: '已加工-即食', productCode: 'Rwqwqeqeqeqweqeq23wqwqeqeqeqweqeq411', levelCount: 104 },
        { type: 'ODV-发货', productCode: 'R8374', levelCount: 77 },
        { type: 'ODV-收货', productCode: 'R8374', levelCount: 71 },
        { type: 'Other', productCode: 'P17637', levelCount: 71 },
        { type: '出库', productCode: 'R8374', levelCount: 70 },
        { type: '加工中', productCode: 'R1753', levelCount: 69 },
        { type: '干仓收货', productCode: 'P19699', levelCount: 40 },
        { type: '开封', productCode: 'P15295', levelCount: 59 },
        { type: '待加工-冷藏解冻', productCode: 'P19016', levelCount: 56 },
        { type: '成品', productCode: 'R1753', levelCount: 55 },
        { type: '报损', productCode: 'R29566', levelCount: 53 },
        { type: '汁水', productCode: 'R16789', levelCount: 51 },
        { type: '生鲜收货', productCode: 'P11129', levelCount: 50 },
        { type: '留样', productCode: 'R23486', levelCount: 49 },
        { type: '移库', productCode: 'P12943', levelCount: 42 },
        { type: '调整', productCode: 'R10160', levelCount: 39 },
        { type: '转运单-发货', productCode: 'P12943', levelCount: 32 },
        { type: '餐厅订单-发货', productCode: 'R29', levelCount: 31 },
        { type: '餐厅订单-收货', productCode: 'R1753', levelCount: 28 },
      ];
            const column = new Column(container, {
              data,
              width: 1000,
              height:500,
              xField: 'type',
              yField: 'levelCount',
              seriesField: 'productCode',
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
/* 确保容器有固定宽高，避免无限扩展 */
#container {
  width: 560px; /* 宽度需与配置中的 width 保持一致 */
  height: 376px; /* 高度需与配置中的 height 保持一致 */
}
</style>
