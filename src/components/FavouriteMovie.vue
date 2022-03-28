<template>
  <v-card color="primary" elevation="4" class="mx-auto my-3" width="300">
    <v-img
      v-if="movie.poster !== 'N/A'"
      height="400"
      :src="movie.poster"
    ></v-img>
    <v-img v-else src="@/assets/not-found.png" height="400"></v-img>
    <v-card-text>
      <p class="text-h6 light--text text-center">{{ movie.title }}</p>
      <v-row align="center">
        <div class="light--text mx-auto">{{ movie.year }}</div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="red"
        class="mx-auto light--text"
        depressed
        block
        bottom
        @click="$emit('deleteMovie', movie.id)"
      >
        Remove
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["movie"],
  emits: ["deleteMovie"],
  name: "FavouriteMovie",
};
</script>
<style></style>
