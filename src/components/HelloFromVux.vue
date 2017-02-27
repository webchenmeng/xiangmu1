<template>
  <div class="wrap">
    <div class="w-content">
      <router-view></router-view>
    </div>
    <div class="w-foot">
      <ul>
        <li><router-link to='/index/home'>首页</router-link></li>
        <li><router-link to='/index/list'>上门</router-link></li>
        <li><router-link to='/index/mine'>问诊</router-link></li>
         <li><router-link to='/index/haha'>我的</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.wrap{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.w-content{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.w-foot{
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
}
.w-foot ul li{
  float: left;
  width: 25%;
  text-align: center;
  line-height: 50px;
}
.w-foot ul li a{
  color: #333;
}
</style>