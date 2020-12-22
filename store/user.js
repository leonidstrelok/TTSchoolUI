import dataApi from "@/infrastructure/data-api.js";
const obj = {
    state: {
        user: {
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
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        SET_USER(state, request) {
            console.log(request);
            state.user = request
        }
    },
};

export const state = () => obj.state;
export const getters = obj.getters;
export const actions = obj.actions;
export const mutations = obj.mutations;
