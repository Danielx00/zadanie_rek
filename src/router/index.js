import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomeView.vue";
import MovieCard from "@/components/MovieCard";
import NotFound from "@/components/NotFound";
import WishListView from "@/views/WishListView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieCard",
    component: MovieCard,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/mywishlist",
    name: "WishListView",
    component: WishListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
