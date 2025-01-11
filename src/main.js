// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//brian
import router from './router'; // 导入路由配置
const app = createApp(App);
app.use(router); // 使用路由
app.mount('#app');
//---2025 01 12


