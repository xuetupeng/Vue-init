<template>
  <transition name="slide">
  <div v-if="visible" role="alert" :class="['el-notification','right',`message-${type}`]">
    <i :class="['el-notification__icon','el-icon-success','iconfont',`icon-${type}`]">
    </i>
    <div class="el-notification__group is-with-icon">
      <!--<h2 class="el-notification__title">{{ `msg.${ type }` }}</h2>-->
      <h2 class="el-notification__title">{{ `${type}` }}</h2>
      <div class="el-notification__content">
        <p>这是一条{{ `${type}` }}的提示消息</p>
      </div>
      <div class="el-notification__closeBtn el-icon-close"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import '../style/iconfont.css';
import './style.css';

export default {
  name: 'trendIcons',
  data() {
    return {
      msg: {
        info: '警告',
        error: '错误',
        warning: '消息',
        success: '成功',
      },
    };
  },
  props: {
    delay: {
      type: Number,
      default: 3000,
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
