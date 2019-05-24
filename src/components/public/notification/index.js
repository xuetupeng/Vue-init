import notification from './notification';

export default {
  install(Vue) {
    Vue.component(notification.name, notification);
  },
};
