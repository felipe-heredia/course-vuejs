import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://course-vue-845ee-default-rtdb.firebaseio.com/",

      headers: {
        get: {
          Authorization: "abc123"
        }
      }
    });
  }
});
