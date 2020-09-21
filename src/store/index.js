import Vue from 'vue'
import Vuex from 'vuex' 
import pathify from 'vuex-pathify' 
import test from './test'
import home from './home'
import dorm from './dorm'
Vue.use(Vuex)




export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: { 
      test,
      home,
      dorm
    }
  });

  return Store;
}