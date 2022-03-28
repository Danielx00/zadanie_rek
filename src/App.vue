<template>
  <v-app>
    <NavBar @toggleDrawer="toggleDrawer" />
    <SideBar :drawer="drawer" @toggleDrawer="toggleDrawer" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
  components: {
    NavBar,
    SideBar,
  },
  methods: {
    toggleDrawer(val) {
      this.drawer = val;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap");
* {
  font-family: "Poppins", sans-serif !important;
}
</style>
