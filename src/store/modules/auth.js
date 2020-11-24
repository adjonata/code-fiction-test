import Vue from "vue";
import router from "../../router";
import storage from "../storage";

const state = {
  user: {},
  // Base de dados local apenas para demonstração
  users_example: [
    {
      id: 1,
      email: "admin@example.com",
      login: "admin",
      password: "admin",
      avatar:
        "https://github.com/AlexDjon/AlexDjon/blob/master/avatar.png?raw=true",
    },
  ],
};

const mutations = {
  SET_USER(state, infos) {
    state.user = infos;

    if ("email" in infos) {
      storage.SET_STORAGE("user", infos);
    }
  },
  ADD_USER(state, infos) {
    state.users_example.push(infos);
  },
};

const actions = {
  HANDLE_LOGIN({ commit, state }, infos) {
    const index = state.users_example.findIndex((user) => {
      return user.login === infos.login && user.password === infos.password;
    });

    if (index < 0) {
      Vue.swal({ icon: "error", text: "Login inválido!" });
      return;
    } else {
      commit("SET_USER", state.users_example[index]);
      router.push("/");
    }
    return;
  },

  HANDLE_REGISTER({ commit, state }, infos) {
    infos['id'] = state.users_example.length + 1;
    
    commit("ADD_USER", infos);
    commit("SET_USER", infos);
    router.push("/");
  },

  IS_LOGED({ state, commit }) {
    const inStore = "email" in state.user;
    const inStorage = storage.GET_STORAGE("user");

    if (!inStore && inStorage) {
      commit("SET_USER", storage.GET_STORAGE("user"));
      return true;
    }

    return inStorage && inStore;
  },

  LOGOUT({ commit }) {
    commit("SET_USER", {});
    storage.REM_STORAGE("user");
    router.push({ name: "auth" });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
