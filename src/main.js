import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FIcon from '@/components/FIcon.vue'
import '@/assets/scss/bundle.scss'

import PortalVue from 'portal-vue'
Vue.config.productionTip = false
Vue.component('f-icon', FIcon)
Vue.use(PortalVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
