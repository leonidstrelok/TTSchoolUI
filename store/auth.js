import dataApi from "@/infrastructure/data-api.js";
const obj = {
  state: {
    accessToken: "",
    userInfo: {
      firstName: "",
      lastName: "",
      name: "",
      preferred_username: "",
      role: "",
      sub: "",
      userIdentifier: ""
    }
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    SET_ACCESS_TOKEN(state, request) {
      state.accessToken = request.data;
    },
    SET_USER_INFO(state, request) {
      state.userInfo = request
    }
  },
  actions: {
    async get_user_info({ commit }) {
      const { data } = await this.$axios.get(dataApi.auth.getUserInfo);
      commit("SET_USER_INFO", data);
    },
    async login({ commit }, payload) {
      const { data } = await this.$axios.post(dataApi.auth.login, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      commit("SET_ACCESS_TOKEN", data.access_token);
      return data.access_token;
    },
    async registration({ }, payload) {
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
