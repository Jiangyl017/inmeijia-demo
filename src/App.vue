<template>
  <div id="app">
      <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from '@/components/header.vue'
export default {
    components:{myheader},
    name: "app"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "./assets/css/style.css";                                                                                                                                                                                               

body {
    background-color: #fbf9fe;
}
</style>
