import Vue from 'vue'
import Vuex from 'vuex'
import test from '@/store/test/test'
import landingpage from '@/store/LandingPage/landingpage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    test,
    landingpage
  }
})
