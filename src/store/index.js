import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    getUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
