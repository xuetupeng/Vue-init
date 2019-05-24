import Vue from 'vue';

// 调用所有的模块 都需要另写一个模块 然后使用use暴露出来
export default {
  install(_Vue) {
    /* eslint-disable no-param-reassign */
    _Vue.prototype.$bus = new Vue();
  },
};
