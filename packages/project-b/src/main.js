import Vue from 'vue';
import Layout from 'component-layout';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Layout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
