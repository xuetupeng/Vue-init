<template>
  <transition name:slide>
    <!--v-if="alertIsShow"-->
    <div v-if="alertIsShow">
      <Alert>An info prompt</Alert>
      <Alert :class="[`${type}`]">An {{type}} prompt</Alert>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert',
  data() {
    return {
      alertIsShow: false,
      type: 'error',
    };
  },
  created() {
    this.$bus.$on('showAlert', (conf) => {
      this.type = conf.type || this.type;
      this.alertIsShow = true;
    });
    this.alertIsShow = false;
  },
};
</script>

<style scoped>

</style>
