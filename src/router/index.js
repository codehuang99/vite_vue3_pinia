import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/home.vue"),
    },
    {
      path: "/favor",
      name: "favor",
      component: () => import("../views/favor/favor.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message/message.vue"),
    },
    {
      path: "/order",
      name: "order",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/order/order.vue"),
    },
  ],
});

export default router;