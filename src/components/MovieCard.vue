<template>
  <v-main style="background: #263238">
    <v-container fluid>
      <HttpError v-if="httpError" />
      <Loading v-if="loading" />
      <p v-if="error" class="text-center light--text text-h3 mt-5">
        {{ error }}
      </p>
      <v-row class="my-4">
        <v-col cols="12" md="6">
          <v-card color="primary" flat class="mx-auto my-4" width="450">
            <v-img
              v-if="movie.Poster !== 'N/A'"
              height="600"
              :src="movie.Poster"
              contain
            ></v-img>
            <v-img v-else src="@/assets/not-found.png" height="400"></v-img>
          </v-card>
          <v-card color="primary" class="mx-auto my-4" width="500"> </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="primary" flat class="mx-auto ml-md-0" width="500">
            <v-card-title class="light--text text-h2">{{
              movie.Title
            }}</v-card-title>

            <v-card-text v-if="!error && !httpError && !loading">
              <v-row align="center" class="mx-0">
                <v-col>
                  <div class="my-4">
                    <span class="light--text"
                      ><b>Released:</b> {{ movie.Released }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text"
                      ><b>Awards:</b> {{ movie.Awards }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text"
                      ><b>Country:</b> {{ movie.Country }}</span
                    >
                  </div>

                  <div class="my-4">
                    <span class="light--text"
                      ><b>Genre: </b> {{ movie.Genre }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text">
                      <b>Runtime: </b> {{ movie.Runtime }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text"
                      ><b> Language:</b> {{ movie.Language }}
                    </span>
                  </div>
                  <div class="my-4">
                    <span class="light--text">
                      <b>Director: </b> {{ movie.Director }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text">
                      <b>Actors: </b> {{ movie.Actors }}</span
                    >
                  </div>
                  <div class="my-4">
                    <span class="light--text">
                      <b>Plot:</b> {{ movie.Plot }}</span
                    >
                  </div>
                  <div class="my-4">
                    <v-btn
                      @click="addToList()"
                      depressed
                      class="light--text"
                      color="pink"
                    >
                      <v-icon left>mdi-heart</v-icon>
                      Add to wishlist
                    </v-btn>
                    <v-snackbar
                      :timeout="2000"
                      :value="snackBar"
                      right
                      top
                      color="success"
                      elevation="24"
                    >
                      Successfully added to your WishList
                    </v-snackbar>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios";
import HttpError from "@/components/HttpError";
import Loading from "@/components/Loading";

export default {
  name: "MovieCard",
  components: {
    HttpError,
    Loading,
  },
  data() {
    return {
      movie: [],
      httpError: false,
      loading: false,
      error: "",
      snackBar: false,
    };
  },
  methods: {
    addToList() {
      const movie = {
        id: this.movie.imdbID,
        poster: this.movie.Poster,
        title: this.movie.Title,
        year: this.movie.Year,
      };

      this.$cookies.set(this.movie.imdbID, movie);
      this.snackBar = true;
    },

    async getMovie() {
      this.loading = true;
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?i=${this.$route.params.id}&plot=full&apikey=${process.env.VUE_APP_API_KEY}`
        );
        if (res.data.Response === "True") {
          (this.loading = false), (this.movie = res.data);
        } else {
          this.error = res.data.Error;
          this.loading = false;
        }
      } catch (err) {
        this.httpError = true;
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getMovie();
  },
};
</script>
<style></style>
