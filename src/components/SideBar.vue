<template>
  <v-navigation-drawer
    app
    v-model="drawerLocal"
    disable-resize-watcher
    left
    color="primary"
  >
    <v-toolbar color="primary" flat height="40">
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <v-icon large color="light" @click="drawerLocal = !drawerLocal"
          >mdi-close</v-icon
        >
      </v-app-bar-nav-icon>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in itemsSideBar"
        :key="item.title"
        :to="item.route"
        class="my-1"
      >
        <v-list-item-icon
          ><v-icon color="light">{{ item.icon }}</v-icon></v-list-item-icon
        >
        <v-list-item-content>
          <v-list-item-title class="light--text">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideBar",
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      itemsSideBar: [
        { title: "Home", icon: "mdi-home", route: "/" },
        { title: "My Wishlist", icon: "mdi-heart", route: "/mywishlist" },
      ],
    };
  },
  computed: {
    drawerLocal: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.$emit("toggleDrawer", val);
      },
    },
  },
};
</script>
<style></style>
