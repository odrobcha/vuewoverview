import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  BaseCard,
  BaseButton,
  BaseBadge,
}).$mount('#app')
