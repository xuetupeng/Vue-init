<template>
  <!--<transition :name="`[judge?${slide}]`">-->
  <!--<transition :name="`judge?slide:notSlide`">-->
  <transition name="slide">
    <!--v-if="visible"-->
  <div v-if="visible" role="alert"
       class="el-notification right"><!---->
    <div class="el-notification__group">
      <h2 class="el-notification__title">{{ title }}</h2>
      <div class="el-notification__content">
        <i style="color: teal;">
          {{ msg }}
        </i>
      </div>
      <div class="el-notification__closeBtn el-icon-close"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import './style.css';

export default {
  name: 'notification',
  data() {
    return {};
  },
  methods: {
    closeMyself() {
      this.$emit('update:visible', false);
    },
  },
  // 传进来的数据模型
  // props: ['msg'],
  props: {
    title: {
      type: String,
      default: '标题名称',
    },
    msg: {
      type: String,
      default: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案',
    },
    delay: {
      type: Number,
      default: 1000,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    judge: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: String,
      default: 'slide',
    },
  },
  watch: {
    // if (this.judge === 'false') {
    // this.slide = 'notSlide';
    // console.log(this.slide);
    // } else {
    //
    // }
    visible(newVal) {
      if (newVal) {
        setTimeout(() => {
          // 理论上所有的组件都能 发送数据
          this.$emit('update:visible', this.judge);
        }, this.delay);
      }
    },
  },
};
</script>

<style scoped>

</style>
