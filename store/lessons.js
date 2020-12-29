import dataApi from "@/infrastructure/data-api.js";
const obj = {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async get_lesson_by_id({ }, { lessonId, date }) {
            const { data } = await this.$axios.get(dataApi.lessons.getLessonById + lessonId + "/" + date);
            return data
        },
    }
};

export const state = () => obj.state;
export const getters = obj.getters;
export const actions = obj.actions;
export const mutations = obj.mutations;
