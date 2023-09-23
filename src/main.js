import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

Vue.config.productionTip = false;

//Make Blod Custom Directive
Vue.directive("bold", {
  bind: function (el) {
    el.style.fontWeight = "bold";
  },
});

//Make Dynamic font Size Custom Directive
Vue.directive("fontSize", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
    console.log(`Directive Name => ${binding.name}`);
    console.log(`Directive Value => ${binding.value}`);
  },
});
// Make UpperCase
Vue.filter("uppercase", function (v) {
  return v.toUpperCase();
});

//Make Reverse
Vue.filter("reverse", function (v) {
  return v.split("").reverse().join("");
});

//Shorten Text
Vue.filter("shorten", function (v, textln) {
  return v.substring(0, textln) + "...";
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
