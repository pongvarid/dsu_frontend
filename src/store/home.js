import _ from "lodash";
import { make, context, dispatch } from "vuex-pathify";
import axios from '@/plugins/axios'
const state = {
    testVar : {},
    SIZES:[],
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
 
    async getSize(context,params){
        let select = await axios.get('/api/size')
                    .then(
                        (r)=>{
                            return r.data;
                        }
                    )
                    .catch(
                        (e)=>{
                            alert('Error');
                            return e.response.data;
                        }
                    )
                    state.SIZES = select
        return select;
    },
    async getPet(context,params){
        let select = await axios.get('/api/pet')
                    .then(
                        (r)=>{
                            return r.data;
                        }
                    )
                    .catch(
                        (e)=>{
                            alert('Error');
                            return e.response.data;
                        }
                    ) 
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