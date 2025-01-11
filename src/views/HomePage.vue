<template>
  <div>
    <h1>Business Report</h1>
    <button @click="goToPage(1)">上周各业务节点重要数据</button>
    <button @click="goToPage(2)">跳转到 Data 2 页面</button>
    <button @click="goToPage(3)">跳转到 Data 3 页面</button>
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
