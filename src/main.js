
import Vue from "vue";
import App from "./App.vue";
import router from './router'
import dataV from '@jiaminghi/data-view'
// datav组件
Vue.use(dataV);

import "@/assets/css/public.scss";
import "@/assets/css/index.scss";

require("./mock/mock"); //是否使用mock
Vue.config.productionTip = false;

// 自定义组件




new Vue({router,
  render: (h) => h(App),
}).$mount("#app");
