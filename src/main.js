import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase";
import conf from './config/firebaseConf';
import store from './state/store';
import router from "./routes/index";

Vue.config.productionTip = false;

firebase.initializeApp(conf.firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  store.dispatch("fetchUser", user);
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
