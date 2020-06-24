import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todos",
    name: "TodoList",
    component: TodoList
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
