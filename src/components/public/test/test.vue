<template>
  <transition name="drop">
    <div v-if="messageIsShow"
         class="message-container"
         :class="[`message-${type}`,{ 'center' : center }]">
      <span v-if="dangerouslyUserHTMLString" v-html="message"></span>
      <span v-else v-text="message"></span>
      <span @click="closeMySelf" v-show="closeIconIsShow">X</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      messageIsShow: true,
      timer: null,
      closeIconIsTrue: false,
      center: false,
    };
  },
  methods: {
    closeMySelf() {
      this.messageIsShow = false;
    },
  },
  created() {
    this.closeIconIsShow = !this.duration;
  },
  mounted() {
    if (this.duration) {
      this.timer = setTimeout(() => {
        this.messageIsShow = false;
        // 实例还在 需要销毁
        // this.$destroy();
      }, this.duration);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped>
  .message-container{
    width: 300px;
    height: 40px;
    background: orangered;
    color: #fff;
    line-height: 40px;
    text-indent: 2em;
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    margin: auto;
  }
  .drop-enter, .drop-leave-to{
    top: -40px;
    opacity: 0;
  }
  .drop-enter-active, .drop-leave-to {
    transition: all .3s ease-in;
  }
  .drop-enter-to, .drop-leave {
    top: 70px;
    opacity: 1;
  }
  .center {
    text-align: center;
  }
</style>
