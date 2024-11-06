import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import PropuestasPersonas from '../components/PropuestasPersonas.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/propuestas-personas', component: PropuestasPersonas }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

