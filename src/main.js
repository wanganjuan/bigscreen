
import Vue from "vue";
import App from "./App.vue";
import router from './router'
import {
  loading,
  borderBox13,
  digitalFlop,
  capsuleChart,
  borderBox8,
} from "@jiaminghi/data-view";

import "@/assets/css/public.scss";
import "@/assets/css/index.scss";

require("./mock/mock"); //是否使用mock
Vue.config.productionTip = false;

// 自定义组件



// datav组件
Vue.use(loading);
Vue.use(borderBox13);
Vue.use(borderBox8);
Vue.use(digitalFlop);
Vue.use(capsuleChart);

new Vue({router,
  render: (h) => h(App),
}).$mount("#app");
