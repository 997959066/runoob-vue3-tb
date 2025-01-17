<template>
  <div>
    <h1>Business Report</h1>
    <button @click="goToPage(1)">FSTS statistics of all orders</button>
    <button @click="goToPage(2)">TOP10 products of each node</button>
    <button @click="goToPage(3)">DEMO</button>
    <button @click="goToPage(4)">CT By Location</button>
    <button @click="goToPage(5)">CT By Month Statistics check number</button>
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
