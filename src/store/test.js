import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
const state = {
    testVar : {},
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
    async testApi(context,params){
        await axios.get('/user/login',)
        .then((r) => {
        
        }).catch((e) => { 
        
         });
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};