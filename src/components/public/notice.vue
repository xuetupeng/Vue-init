<template>
  <transition name="slide">
  <div v-if="noticeIsShow" class="ivu-notice_all" >
  <div class="ivu-notice">
    <div class="ivu-notice_header">
      <div class="ivu-notice-header_title">这是通知标题</div>
      <img class="ivu-notice-header_close"/>
    </div>
    <div class="ivu-notice_content">
      <span>这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述</span>
    </div>
  </div>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'notice',
  data() {
    return {
      noticeIsShow: false,
    };
  },
  created() {
    this.$bus.$on('showNotice', (conf) => {
      this.msg = conf.msg;
      this.delay = conf.delay;
      this.noticeIsShow = true;
      this.timer = setTimeout(() => {
        this.noticeIsShow = false;
      }, this.delay);
    });
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped lang="scss">
  .slide-enter, .slide-leave-to{
  transform: translate(374px, 0);
  }
  .slide-enter-active{
      transition: all 1s ease-in-out;
  }
  .slide-leave-active{
      transition: all 1s ease-in-out;
  }
  .slide-enter-to, .slide-leave {
    transform: translate(0, 0);
  }
  .ivu-notice_all {
    top: 24px;
    right: 0;
    width: 335px;
    margin-right: 24px;
    position: fixed;
    z-index: 1010;
  }
  .ivu-notice {
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    line-height: 1;
    position: relative;
    overflow: hidden;
  }
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  .ivu-notice-with-desc .ivu-notice-header_title {
    font-weight: 700;
    margin-bottom: 8px;
  }
  .ivu-notice-header_title {
    font-size: 14px;
    line-height: 17px;
    color: #17233d;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*font-weight: bold;*/
  }
  .ivu-notice_content {
    font-size: 12px;
    color: #515a6e;
    text-align: justify;
    line-height: 1.5;
  }
</style>
