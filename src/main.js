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
	//si on presse space ou entrée et que le focus n'est pas sur un champ ou un bouton
	if ( (evt.code === "Space" || evt.code === "Enter")  && (document.activeElement.tagName === "BODY") ) {
		store.toggle()
		}
	}
  },
  created: function() {
	document.addEventListener('keyup', this.SpaceListener);
  },
}).$mount('#app')
