import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import './registerServiceWorker'

Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
