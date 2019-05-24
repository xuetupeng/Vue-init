/* eslint-disable no-param-reassign */
import Vue from 'vue';
import messageBox from './messageBox';

const VueTest = Vue.extend(messageBox);
function createMessageBox(opt) {
  const vm = new VueTest({
    data() {
      return {
        // message: opt.message || '这是默认提示',
        duration: opt.duration,
        // type: opt.type || 'info',
        // center: opt.center,
        // dangerouslyUserHTMLString: opt.dangerouslyUserHTMLString || false,
      };
    },
  });
  vm.$mount();
  document.getElementById('app').appendChild(vm.$el);
}
export default {
  install(_) {
    _.prototype.$messageBox = createMessageBox;
  },
};

