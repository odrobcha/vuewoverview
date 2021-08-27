import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import BaseCard from "@/components/ui/BaseCard";
import BaseBadge from "@/components/ui/BaseBadge";
import BaseSpinner from '@/components/ui/BaseSpinner'
import BaseDialog from "@/components/ui/BaseDialog";

import BaseButton from "@/components/ui/BaseButton";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  BaseCard,
  BaseButton,
  BaseBadge,
  BaseSpinner,
  BaseDialog
}).$mount('#app')
