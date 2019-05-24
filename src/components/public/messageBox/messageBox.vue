<template>
  <div>
  <div v-if="messageBoxIsShow"  tabindex="-1" role="dialog" aria-modal="true"
       aria-label="标题名称" class="el-message-box__wrapper">
    <!--v-if="messageBoxIsShow"-->
    <div class="el-message-box"><div class="el-message-box__header">
      <div class="el-message-box__title"><!---->
        <span>标题名称</span>
      </div>
        <span class="el-message-box__close" @click="close">x</span>
    </div>
      <div class="el-message-box__content"><!---->
        <div class="el-message-box__message">
          <p>这是一段内容</p>
        </div>
        <div class="el-message-box__input" style="display: none;">
          <div class="el-input"><!----><input
            autocomplete="off"
            placeholder="" type="text"
            rows="2" validateevent="true"
            class="el-input__inner">
            <!----><!----><!---->
          </div>
          <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
        </div>
      </div>
      <div class="el-message-box__btns">
        <button type="button" class="el-button el-button--default el-button--small"
                style="display: none;">
          <!----><!---->
          <span>
          取消
        </span>
    </button>
        <button @click="confirm" type="button"
                class="el-button el-button--default el-button--small el-button--primary ">
        <!----><!---->
        <span>
          确定
        </span>
        </button>
      </div>
    </div>
  </div>
    <transition name="drop">
  <div v-if="messageBoxNoticeIsShow"
       role="alert" class="el-message el-message--info" style="z-index: 2096;">
    <i class="el-message__icon el-icon-info"></i>
    <p class="el-message__content">{{ message }}</p>
    <!---->
  </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'messageBox',
  data() {
    return {
      action: 'cancel',
      messageBoxNoticeIsShow: false,
      messageBoxIsShow: true,
      timer: null,
      closeIconIsTrue: false,
      message: `action: ${this.action}`,
    };
  },
  methods: {
    close() {
      this.action = 'cancel';
      // console.log(this.action);
      this.messageBoxNoticeIsShow = true;
      this.messageBoxIsShow = false;
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.messageBoxNoticeIsShow = false;
          this.action = 'cancel';
          // 实例还在 需要销毁
          // this.$destroy();
        }, this.duration);
      }
    },
    confirm() {
      this.action = 'confirm';
      this.messageBoxNoticeIsShow = true;
      this.messageBoxIsShow = false;
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.messageBoxNoticeIsShow = false;
          // 实例还在 需要销毁
          // this.$destroy();
        }, this.duration);
      }
    },
  },
  // watch: {
  //   messageBoxIsShow(newVal) {
  //     if (newVal === 'false') {
  //       callback: (action) => {
  //         this.$message({
  //           message: `action: ${action}`,
  //         });
  //       };
  //     }
  //   },
  // },

};
</script>

<style scoped>
  .el-message {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
  }
  div {
    display: block;
  }
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,
    Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  .el-message-box__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .el-message-box__wrapper:after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .el-message-box__header {
    position: relative;
    padding: 15px;
    padding-bottom: 10px;
  }
  .el-message-box__title{
    display: inline-block;
  }
  .el-message-box__close{
    position: relative;
    left: 300px;
    cursor: pointer;
  }
  /*.el-message-box__close: hover{*/
      /*color: aqua;*/
  /*}*/
  .el-message-box__content {
    position: relative;
    padding: 10px 15px;
    color: #606266;
    font-size: 14px;
  }
  .el-message-box__btns {
    padding: 5px 15px 0;
    text-align: right;
  }
  .el-message-box {
    display: inline-block;
    width: 420px;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .el-message-box__btns button:nth-child(2) {
    margin-left: 10px;
  }
  .el-button+.el-button {
    margin-left: 10px;
  }
  .el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  .el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }.el-button {
     display: inline-block;
     line-height: 1;
     white-space: nowrap;
     cursor: pointer;
     /*background: #fff;*/
     border: 1px solid #dcdfe6;
     /*border-color: #dcdfe6;*/
     /*color: #606266;*/
     -webkit-appearance: none;
     text-align: center;
     box-sizing: border-box;
     outline: none;
     margin: 0;
     transition: .1s;
     font-weight: 500;
     -moz-user-select: none;
     -webkit-user-select: none;
     -ms-user-select: none;
     padding: 12px 20px;
     font-size: 14px;
     border-radius: 4px;
   }
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,
    Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
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
</style>
