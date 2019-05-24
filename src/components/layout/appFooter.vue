<template>
  <ul class="menu-list">
    <li @click="toggle(key)" v-for="(val, key)
     in menu" :key="key" :class="{active:key === currentKey}">
      {{val}}
    </li>
  </ul>
</template>
<script>
// import bus from '../eventBus/index';
export default {
  data() {
    return {
      menu: ['女', '男', '移动', '年龄(升序)'],
      currentKey: -1,
    };
  },
  methods: {
    toggle(index) {
      this.currentKey = index;
      this.$bus.$emit('changeCurrentKey', index);
    },
  },
};
</script>
