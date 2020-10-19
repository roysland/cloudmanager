import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Axios.defaults.baseUrl = 'http://localhost:8000/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    currentService: null,
    services: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      window.localStorage.setItem('user', JSON.stringify(payload))
    },
    'SET_SERVICE' (state, payload) {
      state.currentService = payload
    },
    'SET_SERVICES' (state, payload) {
      state.services = payload
    },
    'PUSH_SERVICE' (state, payload) {
      state.services.push(payload)
    }
  },
  modules: {
  }
})
