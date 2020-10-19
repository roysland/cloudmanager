import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FIcon from '@/components/FIcon.vue'
import '@/assets/scss/bundle.scss'
import Axios from 'axios'
import PortalVue from 'portal-vue'
Vue.config.productionTip = false
Vue.component('f-icon', FIcon)
Vue.use(PortalVue)
Axios.defaults.baseURL = 'http://localhost:8000'
if (window.localStorage.getItem('user')) {
  const user = JSON.parse(window.localStorage.getItem('user'))
  store.commit('setUser', user)
  Axios.interceptors.request.use((config) => {
    const token = store.state.user.api_token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
