<template>
  <div>
    <div v-if="messageDialogIsShow" class="dialog-mask" id="mask">
    <div class="dialog-wrap">
      <div class="_ivu-modal">
        <div class="ivu-modal-content">
          <div class="ivu-modal-header">
            <div class="ivu-modal-header-inner">普通的Modal对话框标题</div>
            <a class="_ivu-modal-close">
              <!--<i class="ivu-icon ivu-icon-ios-close"></i>-->
              <img class="_ivu-icon-ios-close "
                   @click="close" src="../../assets/baseline-close-px.png">
            </a>
          </div>
          <div class="ivu-modal-body">
            <!--<p>{{ data.msg }}</p>-->
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
          <div class="ivu-modal-footer">
            <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
              <span @click="cancel">取消</span>
            </button>
            <button type="button" @click="ok" class="ivu-btn ivu-btn-primary ivu-btn-large">
              <span >确定</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import './style/styleColor.css';
import '../../assets/baseline-close-px.png';

export default {
  name: 'dialogSelf',
  data() {
    return {
      messageDialogIsShow: false,
      msg: '默认参值',
    };
  },
  methods: {
    ok() {
      this.messageDialogIsShow = false;
    },
    cancel() {
      this.messageDialogIsShow = false;
    },
    close() {
      this.messageDialogIsShow = false;
    },
  },
  created() {
    this.$bus.$on('showModal', (conf) => {
      this.msg = conf.msg || this.msg;
      this.type = conf.type;
      this.delay = conf.delay;
      this.messageDialogIsShow = true;
    });
  },
};
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  /*style {*/
    /*z-index: 1094;*/
  /*}*/
  .dialog-mask{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,
    \\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #515a6e;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    z-index: 900;
  }

  .dialog-wrap{
    overflow: hidden;
    width: 80%;
    max-width: 800px;
    background: #fff;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /*.element.style {*/
    /*width: 520px;*/
  /*}*/
  .ivu-modal-wrap * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  ._ivu-modal {
    border-radius: 6px;
    width: auto;
    margin: 0 auto;
    position: relative;
    outline: 0;
  }
  .ivu-modal-content {
    position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
    background-clip: padding-box;
    box-shadow: 0 4px 12px rgba(0,0,0,.15);
  }
  .ivu-modal-wrap * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  ._ivu-modal-close{
    line-height: 51px;
  }
  ._ivu-modal-close :hover{
    /*color: #999;*/
   opacity: 0.5;
  }
  ._ivu-modal-close ._ivu-icon-ios-close {
    font-size: 31px;
    color: #D2D2D2;
    transition: color .2s ease;
    position: absolute;
    right: 11px;
    width:31px;
    top: 11px;
  }
  .ivu-modal-header {
    vertical-align: middle;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
  }
  .ivu-modal-header-inner, .ivu-modal-header p {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #17233d;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ivu-modal-body {
    padding: 16px;
    font-size: 12px;
    line-height: 1.5;
  }
  .ivu-modal-footer {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 1px solid #e8eaec;
    padding: 12px 18px;
    text-align: right;
  }
  .ivu-modal-wrap * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  .ivu-btn-primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .ivu-btn-text {
     color: #515a6e;
     background-color: transparent;
     border-color: transparent;
   }
  .ivu-btn-large {
    padding: 6px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  .ivu-btn, .ivu-btn:active, .ivu-btn:focus {
    outline: 0;
  }
  .ivu-btn, .ivu-btn>.ivu-icon {
    vertical-align: middle;
    line-height: 1.5;
  }
  .ivu-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,
    background-color .2s linear,border .2s linear,box-shadow .2s linear;
  }
</style>
