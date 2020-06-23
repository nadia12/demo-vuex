import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
