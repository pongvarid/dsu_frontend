import Vue from 'vue'
import Vuex from 'vuex' 
import pathify from 'vuex-pathify' 
import test from './test'
Vue.use(Vuex)




export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: { 
      test
    }
  });

  return Store;
}