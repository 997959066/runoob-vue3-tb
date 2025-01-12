<template>
  <div>
    <h1>Data 2 页面</h1>
    <div>
    <LineChart2/>
  </div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LineChart2 from "@/components/comm2.vue";
import LineChart from "@/components/comm.vue";
export default {
  name: 'DataPage2',
  components: {LineChart, LineChart2},
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/'); // 返回首页
    };

    const doSomething = () => {
      alert('执行特定功能！');
    };

    return { goHome, doSomething };
  },
};
</script>

<style scoped>
button {
  margin-right: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
