<template>
  <div>
    <h1>FSTS statistics of all orders</h1>

    <div>
      <LineChart  />
    </div>

    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
//brian引入组件
import { useRouter } from 'vue-router';
import LineChart from "@/components/comm.vue";

export default {
  name: 'DataPage1',
  components: {LineChart},
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/'); // 返回首页
    };

    return { goHome };
  },
};
</script>

<style scoped>
button {
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
