
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [  {
  path: '/',
  redirect: '/home',
},
{
  path: '/home',
  name: 'home',
  component: () => import( '../views/home.vue'),

}, {
  path: '/home1',
  name: 'home1',
  component: () => import( '../views/home-demo1.vue'),

}, 
];
const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes
});

export default router;