<template>
  <div>
    <h1>Stargazer Grill - 星露台餐厅</h1>
    <div >
      <LineChart4 />
    </div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LineChart4 from "@/components/comm4.vue";

export default {
  name: 'DataPage4',
  components: {LineChart4},
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
