<template>
  <div>
    <h1>Data 3 页面</h1>
    <p>这里是第三个数据页面。</p>
    <input type="text" v-model="inputValue" placeholder="输入一些内容" />
    <button @click="submit">提交</button>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'DataPage3',
  setup() {
    const router = useRouter();
    const inputValue = ref('');

    const goHome = () => {
      router.push('/'); // 返回首页
    };

    const submit = () => {
      alert(`提交的内容是：${inputValue.value}`);
    };

    return { inputValue, goHome, submit };
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
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
