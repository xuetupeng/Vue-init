// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import App from './APP';
import './style.css';
import request from './http';
// import bus from './eventBus/index';
import bus from './event';
import '../node_modules/iview/dist/styles/iview.css';
import message from './components/public/message/index';
import notification from './components/public/notification/index';
import trendIcon from './components/public/trendIcons/index';
import selfsetNotification from './components/public/selfsetNotification/index';
import test from './components/public/test';
import messageBox from './components/public/messageBox';

// Vue.prototype.$bus = bus;
Vue.config.productionTip = false;
Vue.use(bus);
Vue.use(iView);
// Vue.component(message.name, message);
Vue.use(message);
Vue.use(notification);
Vue.use(trendIcon);
Vue.use(selfsetNotification);
Vue.use(test);
Vue.use(messageBox);

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  data: {
    httpData: [],
  },
  methods: {
    created() {
      request.getUser()
        .then((res) => {
          this.person = res.data.data;
        }).catch();
      request.getData()
        .then((res) => {
          this.httpData = res.result.data;
        }).catch();
    },
  },
  // template: '<App/>',
}).$mount('#app');
