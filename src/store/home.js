import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
const state = {
    testVar: {},
    SIZES: [],
};
const getters = {};

const mutations = make.mutations(state);

const actions = {

    async getMetadata(context, name) {
        let select = await axios.get(`/api/dorm/choice/?name=${name}`)
            .then((r) => { return r.data; })
            .catch((e) => { return e.response.data })
        return select;
    },
    async getSize(context, params) {
        let select = await axios.get('/api/size')
            .then(
                (r) => {
                    return r.data;
                }
            )
            .catch(
                (e) => {
                    alert('Error');
                    return e.response.data;
                }
            )
        state.SIZES = select
        return select;
    },
    async getHomeDorm(context, params) {
        let select = await axios.get('/api/dorm/dorm/home/')
            .then(
                (r) => {
                    return r.data;
                }
            )
            .catch(
                (e) => {
                    alert('Error');
                    return e.response.data;
                }
            )
        state.SIZES = select
        return select;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};