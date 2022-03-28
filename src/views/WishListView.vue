<template>
  <v-main style="background: #263238">
    <p v-if="!movies.length" class="text-center mt-7 text-h4 light--text">
      You don't have any movies
    </p>
    <WishList v-else :movies="movies" @deleteMovie="deleteMovie" />
    <v-snackbar
      :timeout="1500"
      :value="snackBar"
      right
      top
      color="info"
      elevation="24"
    >
      Successfully deleted.
    </v-snackbar>
  </v-main>
</template>
<script>
import WishList from "@/components/WishList";

export default {
  name: "WishListView",
  components: {
    WishList,
  },
  data() {
    return {
      movies: [],
      keys: [],
      snackBar: false,
    };
  },
  methods: {
    getData() {
      this.loading = true;
      this.keys = this.$cookies.keys();
      this.keys.forEach((key) => {
        this.movies.push(this.$cookies.get(key));
      });
    },
    deleteMovie(id) {
      const copy = [...this.movies];
      this.movies = copy.filter((movie) => movie.id !== id);
      this.$cookies.remove(id);
      this.snackBar = true;
      setTimeout(() => {
        this.snackBar = false;
      }, 2000);
    },
  },

  mounted() {
    this.getData();
  },
};
</script>
<style></style>
