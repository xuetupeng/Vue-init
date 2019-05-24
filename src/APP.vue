<template>
  <div id="app">
    <!--写一个入口（声明) 再使用-->
    <!--<message :msg="msg" ></message>-->
    <!--默认传值是字符串 如果需要用js环境 需要前面加上：-->
    <message msg="props!!!"
             :visible.sync="messageVisible"
             type="error"
             :delay="6000">slot1!!
    </message>
    <!--<slot><slot> 插口标签-->
    <button @click="messageVisible = true">triggerMessage</button>
    <br>
    <button @click="notificationVisible = true"
    >triggerNotification</button>
    <notification :visible.sync="notificationVisible"
                  :delay="3000"
                  :judge="true"></notification>
    <trend-icons :visible.sync="trendVisible"
                  :delay="3000"
                  type="error"></trend-icons>
    <!--:judge="true"-->
    <br>
    <button @click="trendVisible = true">trendVisible</button>
    <selfset-notification :visible.sync="selfsetVisible"
                            location="leftbottom"></selfset-notification>
    <br>
    <!--<button @click="selfsetVisible = true">RightTop</button>-->
    <button @click="selfsetVisible = true">看设置的location显示内容</button>
    <dialogSelf></dialogSelf>
    <button @click="triggerDialogMessage">triggerDialogMessage</button>
    <notice></notice>
    <button @click="triggerNotice">triggerNotice</button>
    <alert></alert>
    <button @click="triggerAlert">triggerAlert</button>
    <button @click="openNotice">openNotice</button>
    <button @click="openMessageBox">openMessageBox</button>
  <!--<app-header></app-header>-->
  <!--<app-body :abc='person'></app-body>-->
  <!--<app-footer></app-footer>-->
  </div>
</template>
<script>
import 'normalize.css';
import appHeader from './components/layout/appHeader';
import appBody from './components/layout/appBody';
import appFooter from './components/layout/appFooter';
import request from './http';
// import message from './components/public/message/message';
import dialogSelf from './components/public/dialog';
import notice from './components/public/notice';
import alert from './components/public/alert';

// 声明组件并且使用的几个步骤总结
// 1.首先需要创建Vue组件的文件 里面写好对应创建的组件格式 以及对应的样式
// 2.通过import调用 你创建的组件文件
// 3.再把你前面import 后面接的组件模块名称 放进对应的 声明组件components 里面
// 4.可以在 总组件文件 也就是APP.vue的template模板里面 通过你声明组件的名称使用了
export default {
  data() {
    return {
      person: [],
      selfsetVisible: false,
      notificationVisible: false,
      notCloseificationVisible: false,
      messageVisible: false,
      trendVisible: false,
      msg: 'hello,world!123',
      judge: 'false',
    };
  },
  // 挂载的时候 课可以看见
  // 子组件能使用父组件的东西 但是不能修改 除非.sync 也是同步 但是也需要委婉的修改
  // async 异步
  // 也就是

  methods: {
    openMessageBox() {
      this.$messageBox({
        duration: 1000,
      });
    },
    openNotice() {
      this.$message({
        duration: 1000,
        center: true,
        dangerouslyUserHTMLString: true,
        message: '<h1>dangerouslyUserHTMLString</h1>',
      });
    },
    triggerAlert() {
      this.$bus.$emit('showAlert', {
        type: 'error',
      });
    },
    triggerNotice() {
      this.$bus.$emit('showNotice', {
        delay: 3000,
      });
    },
    triggerMessage() {
      this.$bus.$emit('showMessage', {
        msg: '啦啦啦',
        type: 'warning',
        delay: 2000,
      });
    },
    triggerDialogMessage() {
      this.$bus.$emit('showModal', {
      });
    },
  },
  created() {
    request.getUser()
      .then((res) => {
        this.person = res.data.data;
      }).catch();
  },
  // message,
  components: { appHeader, appBody, appFooter, dialogSelf, notice, alert },
};
</script>
<style scoped>
  #app{
    width: 100vw;
    height: 100vh;
  }
</style>
