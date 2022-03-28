<template>
  <v-card elevation="4" color="primary" class="mx-auto my-3" width="300">
    <v-img
      v-if="movie.Poster !== 'N/A'"
      height="400"
      :src="movie.Poster"
    ></v-img>
    <v-img v-else src="@/assets/not-found.png" height="400"></v-img>

    <v-card-text>
      <p class="text-h6 light--text text-center">{{ movie.Title }}</p>
      <v-row align="center">
        <div class="light--text mx-auto">{{ movie.Year }}</div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :to="'/movie/' + movie.imdbID"
        color="background"
        class="mx-auto light--text"
        depressed
        block
        bottom
      >
        Browse
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["movie"],
  name: "Movie",
};
</script>
<style></style>
