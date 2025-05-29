<template>
  <div>
    <h1>普通标签每月使用数量</h1>
    <div >
      <LineChart6 />
    </div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LineChart6 from "@/components/comm6.vue";

export default {
  name: 'DataPage6',
  components: {LineChart6},
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
