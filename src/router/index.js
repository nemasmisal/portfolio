import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/front-end',
    name: 'FrontEndList',
    component: () => import('@/views/Front-End/FrontEndList.vue'),
  },
  {
    path: '/back-end',
    name: 'BackEndList',
    component: () => import('@/views/Back-End/BackEndList.vue'),
  },
  {
    path: '/cloud',
    name: 'CloudList',
    component: () => import('@/views/Cloud/CloudList.vue'),
  },
  {
    path: '/database',
    name: 'DatabaseList',
    component: () => import('@/views/Database/DatabaseList.vue'),
  },
  {
    path: '/other',
    name: 'OtherList',
    component: () => import('@/views/Other/OtherList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
