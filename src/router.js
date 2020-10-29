import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [{ path: "/", component: () => import("./views/home/home") }],
});

export default routes;
