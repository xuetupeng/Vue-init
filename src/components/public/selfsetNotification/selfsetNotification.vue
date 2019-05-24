<template>
  <transition name="slide">
  <div v-if="visible" role="alert" :class="['el-notification',`${location}`]">
    <div class="el-notification__group">
      <h2 class="el-notification__title">自定义位置</h2>
      <img class="el-close" @click="closeMyself" src="../../../assets/baseline-close-px.png"/>
      <div class="el-notification__content">
        <p>右上角弹出的消息</p>
      </div>
      <div class="el-notification__closeBtn el-icon-close"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import './style.css';

export default {
  name: 'selfsetNotification',
  props: {
    msg: {
      type: String,
      // default: '这是一条提示信息!',
    },
    delay: {
      type: Number,
      default: 3000,
    },
    location: {
      type: String,
      default: 'lefttop',
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
};
</script>

<style scoped>

</style>
