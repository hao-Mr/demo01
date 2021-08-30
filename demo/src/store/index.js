import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, arg) {
      state.token = arg;
    },
  },
  actions: {},
  modules: {},

  plugins: [
    createPersistedState({
      storage: sessionStorage,
      key: "token",
    }),
  ],
});
