import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Enrollee from "../views/Enrollee.vue";
import Faculty from "../views/Faculty.vue";
import UnderGraduate from "../views/UnderGraduate.vue";
import PostGraduate from "../views/PostGraduate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/enrollee",
      name: "enrollee",
      component: Enrollee,
    },
    {
      path: "/faculty",
      name: "faculty",
      component: Faculty,
    },
    {
      path: "/underGraduate",
      name: "underGraduate",
      component: UnderGraduate,
    },
    {
      path: "/postGraduate",
      name: "postGraduate",
      component: PostGraduate,
    },
  ],
});

export default router;
