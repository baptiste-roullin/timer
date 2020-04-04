import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = true;
Vue.config.devtools = true;
import { store } from './store.js';


new Vue({
  render: h => h(App),
  methods: {
	SpaceListener: function(evt) {
	if (evt.code === "Space" || evt.code === "Enter") {
		store.toggle()
		}
	}
  },
  created: function() {
	document.addEventListener('keyup', this.SpaceListener);
  },
}).$mount('#app')
