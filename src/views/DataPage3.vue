<template>
  <div>
    <h1>Data 3 页面</h1>
    <div >
      <LineChart3 />
    </div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LineChart3 from "@/components/comm3.vue";

export default {
  name: 'DataPage1',
  components: {LineChart3},
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
