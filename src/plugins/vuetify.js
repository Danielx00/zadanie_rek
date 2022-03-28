import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#263238",
        background: "#37474F",
        light: "#fff",
      },
    },
  },
});
