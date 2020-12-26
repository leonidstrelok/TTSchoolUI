import dataApi from "@/infrastructure/data-api.js";
const obj = {
  state: {
    accessToken: ""
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    }
  },
  mutations: {
    SET_ACCESS_TOKEN(state, request) {
      state.accessToken = request.data;
    }
  },
  actions: {
    async post_access_token({ commit }, payload) {
      const { data } = await this.$axios.post(dataApi.auth.login, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      commit("SET_ACCESS_TOKEN", data.access_token);
      return data.access_token;
    },
    async post_registration({ }, payload) {
      await this.$axios.post(dataApi.auth.registration, payload);
    },
    async change_password({ }, payload) {
      await this.$axios.post(dataApi.auth.changePassword, payload);
    },
    async forgot_password({ }, email) {
      await this.$axios.post(dataApi.auth.forgotPassword + email);
    },

  }
};

export const state = () => obj.state;
export const getters = obj.getters;
export const actions = obj.actions;
export const mutations = obj.mutations;
