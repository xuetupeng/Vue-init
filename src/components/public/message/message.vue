<template>
  <transition name="slide">
    <div v-if="visible" :class="['message-container', `message-${type}`]">
      <i :class="['iconfont', `icon-${type}`]"></i>
      <span>
        <span v-if="msg">{{ msg }}</span>
        <span v-else><slot></slot></span>
      </span>
      <span @click="closeMyself">X</span>
    </div>
  </transition>
</template>

<script>
import '../style/iconfont.css';
import '../style/styleColor.css';

export default {
  name: 'message',
  // data() {
  //   return {
  //     messageIsShow: true,
  //     msg1: '请求出错',
  //     // type: 'error',
  //     // delay: 1000,
  //     timer: null,
  //   };
  // },
  // created() {
  //   this.$bus.$on('showMessage', (conf) => {
  //     this.msg = conf.msg || this.msg;
  //     this.type = conf.type || this.type;
  //     this.delay = conf.delay || this.delay;
  //     this.messageIsShow = true;
  //     this.timer = setTimeout(() => {
  //       this.messageIsShow = false;
  //       // console.log(this.messageIsShow);
  //     }, this.delay);
  //   });
  //   // 像隐形的数据模型使用
  //   console.log(this.abc);
  // },
  // 传进来的数据模型
  // props: ['msg'],
  props: {
    msg: {
      type: String,
      // default: '这是一条提示信息!',
    },
    delay: {
      type: Number,
      default: 500,
    },
    type: {
      type: String,
      default: 'info',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMyself() {
      this.$emit('update:visible', false);
    },
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit('update:visible', false);
        }, this.delay);
      }
    },
  },
  // 组件消除之前 把定时器干掉
  // beforeDestroy() {
  //   clearTimeout(this.timer);
  // },
};
</script>
