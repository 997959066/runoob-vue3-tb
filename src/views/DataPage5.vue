<template>
  <div>
    <h1>CT By Month Statistics check number</h1>
    <div >
      <LineChart5 />
    </div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LineChart5 from "@/components/comm5.vue";

export default {
  name: 'DataPage5',
  components: {LineChart5},
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
