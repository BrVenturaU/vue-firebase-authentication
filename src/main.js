import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKgWe_HdZQbM12cUfuIxJ9Y1nxqS3l2Uo",
  authDomain: "vue-firebase-authenticat-9bb15.firebaseapp.com",
  projectId: "vue-firebase-authenticat-9bb15",
  storageBucket: "vue-firebase-authenticat-9bb15.appspot.com",
  messagingSenderId: "785227655542",
  appId: "1:785227655542:web:68a018d9f813ecf7e8b257"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
