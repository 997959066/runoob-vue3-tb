import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DataPage1 from '../views/DataPage1.vue';
import DataPage2 from '../views/DataPage2.vue';
import DataPage3 from '../views/DataPage3.vue';
import DataPage4 from '../views/DataPage4.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/data1',
        name: 'DataPage1',
        component: DataPage1,
    },
    {
        path: '/data2',
        name: 'DataPage2',
        component: DataPage2,
    },
    {
        path: '/data3',
        name: 'DataPage3',
        component: DataPage3,
    },{
        path: '/data4',
        name: 'DataPage4',
        component: DataPage4,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
