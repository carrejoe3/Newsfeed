import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import moment from 'moment'

Vue.config.productionTip = false

// Filter that takes a ISO date as an argument and returns it in a readable format
Vue.filter('formatDateTime', (date) => {
  return moment.utc(date).local().format('dddd, MMMM Do YYYY, h:mm:ss a')
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
