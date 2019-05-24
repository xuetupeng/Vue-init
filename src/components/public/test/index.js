/* eslint-disable no-param-reassign */
import Vue from 'vue';
import test from './test';

const VueTest = Vue.extend(test);
function createTest(opt) {
  const vm = new VueTest({
    data() {
      return {
        message: opt.message || '这是默认提示',
        duration: opt.duration,
        type: opt.type || 'info',
        center: opt.center,
        dangerouslyUserHTMLString: opt.dangerouslyUserHTMLString || false,
      };
    },
  });
  vm.$mount();
  document.body.appendChild(vm.$el);
}
export default {
  install(_) {
    _.prototype.$message = createTest;
  },
};

