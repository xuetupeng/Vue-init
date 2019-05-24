import selfsetNotification from './selfsetNotification';

export default {
  install(Vue) {
    Vue.component(selfsetNotification.name, selfsetNotification);
  },
};
