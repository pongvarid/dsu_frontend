import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
const state = {
    testVar: {},
    CHOICES: [],
    DORMS: [],
    SEARCH: '',
    DETAIL: {},
    ABOUT: {},
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
    async getAllChoice(context, params) {
        let data = await axios.get('/api/dorm/choice/')
            .then((r) => {
                return r.data;
            }).catch((e) => {
                return false;
            });
        data = _.chain(data)
            .groupBy("name")
            .map((value, key) => ({
                choice: key,
                data: value
            }))
            .value()
        state.CHOICES = data;
        return data;
    },
    async getDormIdByChoice(context, id) {
        let data = await axios.get(`/api/dorm/getDormChoice/?id=${id}`)
            .then((r) => {
                return r.data;
            }).catch((e) => {
                return false;
            });
        return data;
    },
    async getDorms(context, id) {
        let data = await axios.get(`/api/dorm/testDorm/?search=${state.SEARCH}&id=${id}`)
            .then((r) => {
                return r.data;
            }).catch((e) => {
                return false;
            });
        state.DORMS = data;
        return data;
    },
    async getDetail(context, id) {
        let data = await axios.get(`/api/dorm/dorm/${id}`)
            .then((r) => {
                return r.data;
            }).catch((e) => {
                return false;
            });
        state.DETAIL = data;
        return data;
    },
    async getAbout(context, id) {
        let data = await axios.get(`/api/dorm/about/`)
            .then((r) => {
                return r.data[0];
            }).catch((e) => {
                return false;
            });
        state.ABOUT = data;
        return data;
    },


};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};