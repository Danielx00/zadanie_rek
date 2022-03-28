<template>
  <v-main style="background: #263238">
    <SearchBar @search="search" />
    <div
      v-if="movies.length === 0 && !error && !httpError && !loading"
      class="w-100 d-flex align-center flex-column mt-16"
    >
      <v-icon size="86" color="grey">mdi-filmstrip</v-icon>
      <p class="grey--text text-subtitle-1">Start exploring</p>
    </div>
    <p v-if="movies.length > 0" class="text-center text-subtitle-1 light--text">
      Total results: {{ movies.length }}
    </p>
    <Loading v-if="loading" />
    <Movies v-else :movies="movies" />
    <p v-if="error" class="text-center light--text text-h3 mt-5">
      {{ error }}
    </p>
    <HttpError v-if="httpError" />
  </v-main>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Movies from "@/components/Movies";
import Loading from "@/components/Loading";
import HttpError from "@/components/HttpError";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      movies: [],
      loading: false,
      error: "",
      httpError: false,
    };
  },
  components: {
    SearchBar,
    Movies,
    HttpError,
    Loading,
  },
  methods: {
    async search(term) {
      if (term !== "") {
        this.loading = true;
        try {
          const res = await axios.get(
            `https://www.omdbapi.com/?s=${term}&plot=full&apikey=${process.env.VUE_APP_API_KEY}`
          );
          if (res.data.Response === "True") {
            this.movies = res.data.Search;
            this.error = "";
          } else {
            this.error = res.data.Error;
            this.movies = [];
          }
          this.loading = false;
        } catch (err) {
          this.loading = false;
          this.httpError = true;
        }
      }
    },
  },
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
