import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/hr',
    name: 'hr',
    component: () => import('../views/Hr.vue'),
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/Cv.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
