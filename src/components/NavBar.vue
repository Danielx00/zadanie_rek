<template>
  <div>
    <v-toolbar color="primary" dark height="100">
      <v-container>
        <v-toolbar-title class="d-flex">
          <v-icon class="pa-2" size="48">mdi-video-vintage</v-icon>
          <p class="mt-8 text-h5">Movie App</p>
        </v-toolbar-title>
      </v-container>
      <v-app-bar-nav-icon
        @click="$emit('toggleDrawer', true)"
        large
        class="d-block d-md-none mt-5"
      ></v-app-bar-nav-icon>

      <v-tabs
        background-color="primary"
        class="d-none d-md-flex align-center justify-end"
      >
        <v-tab class="mx-4 mt-13" to="/">Home</v-tab>
        <v-tab class="mx-4 mt-13" to="/mywishlist">My wishlist</v-tab>
      </v-tabs>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  emits: ["toggleDrawer"],
};
</script>
<style lang=""></style>
