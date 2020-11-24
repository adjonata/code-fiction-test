import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth";
import tasks from "./modules/tasks";

export default new Vuex.Store({
  modules: {
    auth,
    tasks
  }
});
