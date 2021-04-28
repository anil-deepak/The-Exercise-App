import Vuex from "vuex";
import Vue from "vue";

import createPersistedState from "vuex-persistedstate";

import user from "./modules/user";
import posts from "./modules/posts";
import food from "./modules/food";
import workouts from "./modules/workouts";
import people from "./modules/people";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    posts,
    food,
    workouts,
    people,
  },
  plugins: [createPersistedState()],
});
