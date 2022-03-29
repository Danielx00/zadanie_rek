<template lang="">
  <v-row>
    <v-col cols="10" sm="6" lg="4" class="mx-auto my-1 d-flex align-center">
      <v-text-field
        background-color="background"
        width="150"
        placeholder="Search for a movie"
        solo
        flat
        prepend-inner-icon="mdi-magnify"
        persistent-placeholder
        class="mt-8 mx-2"
        dark
        v-model="term"
        v-on:keyup.enter="$emit('search', term)"
      ></v-text-field>
      <v-btn
        @click="$emit('search', term)"
        depressed
        color="background"
        dark
        height="48"
        class="ml-3"
        >Search</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      term: "",
    };
  },
  methods: {
    enter() {
      alert("click");
    },
  },
};
</script>
<style lang=""></style>
