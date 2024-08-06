import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProductDetail from './views/ProductDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
