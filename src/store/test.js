import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
const state = {
    testVar : {},
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
    async storeDorm(context,params){
        let data = await axios.post('/api/dorm/dorm/',params)
        .then((r) => {
            return r.data;
        }).catch((e) => { 
            return false;
         });
        return data;
    },

    async storeDormOwner(context,params){
        let data = await axios.post('/api/dorm/dormowner/',params)
        .then((r) => {
            return r.data;
        }).catch((e) => { 
            return false;
         });
        return data;
    },
    
    async storeDormDetail(context,params){
        let data = await axios.post('/api/dorm/dormdetail/',params)
        .then((r) => {
            return r.data;
        }).catch((e) => { 
            return false;
         });
        return data;
    },
    async storeDormStyle(context,params){
        let data = await axios.post('/api/dorm/dormstyle/',params)
        .then((r) => {
            return r.data;
        }).catch((e) => { 
            return false;
         });
        return data;
    },


    
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