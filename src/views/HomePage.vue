<template>
  <div>
    <h1>Business Report</h1>
    <button @click="goToPage(1)">上周个业务节点TOP1产品</button>
    <button @click="goToPage(2)">CR1上线至今各个节点TOP10产品</button>
    <button @click="goToPage(3)">DEMO</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomePage',
  setup() {
    const router = useRouter();

    const goToPage = (id) => {
      router.push(`/data${id}`); // 跳转到对应的 Data 页面
    };

    return { goToPage };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
button {
  margin: 5px;
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
