// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入UI组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vuex from 'vuex';
import store from './vuex/store';
import moment from 'moment/moment';

Vue.use(Mint)
Vue.use(Vuex)
Vue.config.productionTip = false;

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString); // value可以是普通日期 20170723
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
