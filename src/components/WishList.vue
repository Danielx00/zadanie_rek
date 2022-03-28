<template>
  <v-row>
    <v-col
      class="mt-7"
      cols="12"
      md="6"
      lg="3"
      v-for="movie in movies"
      :key="movie.id"
    >
      <FavouriteMovie
        :movie="movie"
        @deleteMovie="$emit('deleteMovie', movie.id)"
      />
    </v-col>
  </v-row>
</template>
<script>
import FavouriteMovie from "@/components/FavouriteMovie";

export default {
  name: "WishList",
  emits: ["deleteMovie"],
  props: ["movies"],
  components: {
    FavouriteMovie,
  },
};
</script>
<style></style>
