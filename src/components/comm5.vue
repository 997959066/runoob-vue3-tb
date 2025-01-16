<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Column } from '@antv/g2plot';
import data from '/public/data5.json'; // 确保路径正确
export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {

      const container = chartContainer.value;

// 排序操作：将 MONTH 格式的字符串转换为 Date 对象进行排序
      data.sort((a, b) => {
        const monthA = new Date(`01-${a.MONTH}`); // 将 "Nov-24" 转换为 "01-Nov-2024"
        const monthB = new Date(`01-${b.MONTH}`); // 同样转换 b

        return monthA - monthB; // 按照日期进行升序排序
      });

            const columnPlot = new Column(container, {
              data,
              xField: 'MONTH',
              yField: 'CHECK_NUM_COUNT',
              seriesField: 'type',
              isGroup: true,
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

            columnPlot.render();


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
