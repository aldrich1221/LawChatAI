

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ChatRoom from "./components/ChatRoom.vue";
import Login from "./components/Login.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/chat", component: ChatRoom },
  { path: "/", component: Login }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
