<template>
   <div class="wenzhen">
       <header class="header">
         <h2>门诊</h2>
       </header>
       <main class="main">
         <section class="section">
          <div class="img">
    <router-link to='/liantian'><img src="../images/11_02.png" ></router-link>
          </div>
         </section>
       </main>
     </div>

</template>

<script>
/*import { Group, Cell, Alert, XSwitch } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Alert,
    XSwitch
  },
  data () {
    return {
      val: false,
      msg: 'Hello World!',
      tit: '个人资料',
      set: '设置'
    }
  },
  methods: {
    showPlu () {
      console.log(this.$router)
      this.$router.push({
        path: '/detail'
      })
    }
  }
}*/
</script>

<style>
.wenzhen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction: column; }
  .wenzhen .header {
    width: 100%;
    height: .5rem;
    font-size: .2rem;
    text-align: center;
    line-height: .5rem;
    border: 1px solid #ccc;
    color: #6b6363;
    background: #f9f9f9; }
  .wenzhen .main {
    width: 100%;
    -webkit-flex: 1;
    overflow: hidden; }
    .wenzhen .main img {
      width: 100%; }

.wode {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction: column; }
  .wode .one {
    width: 100%;
    height: 2rem;
    background: #29c4be; }
    .wode .one p {
      line-height: .7rem;
      font-size: .18rem;
      color: #fff;
      margin-left: 80%; }
      .wode .one p span {
        padding-left: 18%; }
    .wode .one dl {
      margin-left: 40%; }
      .wode .one dl dt {
        width: .75rem;
        height: .75rem; }
        .wode .one dl dt img {
          width: 100%;
          height: 100%; }
      .wode .one dl dd {
        font-size: .16rem;
        line-height: .67rem;
        color: #f4fbfb; }
        .wode .one dl dd i {
          padding-left: 2%; }
  .wode .main {
    width: 100%;
    -webkit-flex: 1;
    background: #f0f2f5;
    overflow: hidden; }
    .wode .main section {
      width: 100%; }
  .wode .two {
    width: 100%;
    display: -webkit-flex;
    background: #fff;
    margin-bottom: 10px; }
    .wode .two dl {
      width: 33.3%;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      -webkit-justify-content: center;
      -webkit-align-items: center; }
    .wode .two dt {
      margin-top: .15rem;
      width: .5rem;
      height: .46rem; }
      .wode .two dt img {
        width: 100%;
        height: 100%;
        display: block; }
    .wode .two dd {
      font-size: .14rem;
      line-height: .41rem; }
  .wode .stree {
    width: 100%; }
    .wode .stree p {
      width: 100%;
      line-height: .5rem;
      font-size: .16rem;
      display: -webkit-flex;
      background: #ffffff;
      border-bottom: 1px solid #f0f2f5; }
      .wode .stree p span:nth-of-type(1) {
        margin-left: 3%;
        display: block;
        width: 90%;
        color: #141414; }
        .wode .stree p span:nth-of-type(1) i {
          color: #9b9b9b;
          font-size: .18rem;
          margin-right: 3%; }
      .wode .stree p span:nth-of-type(2) {
        display: block;
        line-height: .5rem;
        font-size: .2rem; }
    .wode .stree p:nth-of-type(4) {
      margin: 10px 0; }
</style>