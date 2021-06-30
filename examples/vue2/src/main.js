import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['guillotin-modal-outlet'];

new Vue({
  render: h => h(App),
}).$mount('#app');
