<template>
  <div>
    <!-- 添加 ref 标记 -->
    <div id="container" ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import data from '/public/data5.json'; // 确保路径正确
import { Line } from '@antv/g2plot';export default {
  setup(input) {
    const chartContainer = ref(null); // 定义 ref

    onMounted(input => {
      // 获取正确的容器
      const container = chartContainer.value;


      // fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      //     .then((res) => res.json())
      //     .then((data) => {
            console.log(data)
            const line = new Line(container, {
              data,
              xField: 'create_time',
              yField: 'check_num_count',
            });

            line.render();
          // });

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
