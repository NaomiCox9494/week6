import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';

Vue .component('app-Footer-Global', Footer)
Vue .component('app-Header-Global', Header)

new Vue({
  el: '#app',
  render: h => h(App)
})



