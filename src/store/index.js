import Vue from 'vue'
import Vuex from 'vuex' 
import pathify from 'vuex-pathify' 
import test from './test'
import home from './home'
Vue.use(Vuex)




export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: { 
      test,
      home
    }
  });

  return Store;
}