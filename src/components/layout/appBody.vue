<template>
  <ul class="user-list">
    <li>
    <!--<li v-show="abc.length">-->
        <span>姓名</span>
        <span>性别</span>
        <span>电话</span>
        <span>年龄</span>
        <span>编辑</span>
    </li>
    <li v-for="(val, key) in arr" :key="val.phone">
        <span>{{val.name}}</span>
        <span>{{val.gender|toGender}}</span>
        <span>{{val.phone}}</span>
        <span>{{val.age}}</span>
        <span @click="del(key)">删除</span>
    </li>
  </ul>
    </template>
<script>
export default {
  data() {
    return {
      'currentKey': -1,
    };
  },
  'computed': {
    arr() {
      const mobileReg = /^1(3[4-9]|5[0-27-9]|8[78])\d{8}$/;
      const selectedHandle = {
        /* eslint quote-props: ["error", "always"] */
        /* eslint-env es6 */
        '-1': () => this.abc,
        '0': () => this.abc.filter(val => !val.gender),
        '1': () => this.abc.filter(val => val.gender),
        '2': () => this.abc.filter(val => mobileReg.test(val.phone)),
        '3': () => [...this.abc].sort((prev, next) => prev.age - next.age),
      };
      return selectedHandle[this.currentKey]();
    },
  },
  'methods': {
    del(index) {
      this.abc.splice(index, 1);
    },
  },
  'props': ['abc'], /* 隐形的数据模型 不然取不到外层的值 */
  created() { /* 组件在渲染的时候 会自动执行 */
    this.$bus.$on('changeCurrentKey', (index) => {
      this.currentKey = index;
      // console.log(index);
    });
  },
  'filters': {
    toGender(val) {
      return val ? '男' : '女';
    },
  },
};
</script>
    <!--使用以后变成私有-->
    <style lang="scss" scoped>
        .user-list{
            li{
                font-size: 0;
                text-align: center;
                line-height: 30px;
                color: white;
                background: tomato;
                span{
                    font-size: 14px;
                    display: inline-block;
                    width: 20%;
                }
            }
        }
    </style>
