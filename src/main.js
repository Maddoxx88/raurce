import Vue from "vue";
import App from "./App.vue";
import VueCodeHighlight from "vue-code-highlight";
import VueClipboard from 'vue-clipboard2';
import "./assets/css/tailwind.css";
// import "../node_modules/vue-code-highlight/themes/window.css";

// import VueHighlightJS from "vue-highlight.js";
// import "vue-highlight.js/lib/allLanguages"

Vue.config.productionTip = false;

import "prism-es6/themes/prism-cb.css"

Vue.use(VueClipboard)
Vue.use(VueCodeHighlight);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
