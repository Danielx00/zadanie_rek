<template>
  <v-row>
    <v-col cols="12" md="6" lg="3" v-for="movie in movies" :key="movie.imdbID">
      <Movie :movie="movie" />
    </v-col>
  </v-row>
</template>
<script>
import Movie from "@/components/Movie";

export default {
  props: ["movies"],
  components: {
    Movie,
  },
};
</script>
<style></style>
