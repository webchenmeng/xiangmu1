<template>

   <div class="shouye">
          <!-- 头部-->
          <header class="header">
            <div class="left">
              <span>2017</span>
            </div>
            <div class="center">
              <h2>医护到家</h2>
            </div>
            <div class="right">
              <span class="icon-font">&#xe63c;</span>
            </div>
          </header>

          <!--轮播-->

           <main class="main" id="main">
            <scroller lock-x >
            <section class="section">
          <div class="banner swiper-container">
            <ul class="swiper-wrapper">
              <!-- <li class="swiper-slide">
                <img src="../images/2a.png">
              </li>
               <li class="swiper-slide">
                <img src="../images/2b.png">
              </li>
               <li class="swiper-slide">
                <img src="../images/2c.png">
              </li>
               <li class="swiper-slide">
                <img src="../images/2d.png">
              </li> -->
                <li class="swiper-slide" v-for="item in banner">
                <img :src="item">
              </li>
            </ul>
             <div class="swiper-pagination"></div>
          </div>

                <div class="one">
            <div class="left">
              <a><img src="../images/3_02.png"></a>

            </div>
            <div class="right">
               <div class="right1">
              <a><img src="../images/3_03.png"></a>

            </div>
             <div class="right2">
              <a><img src="../images/3_04.png"></a>

            </div>
            </div>

          </div>
          <div class="two">
            <dl>
              <dt>
                <img src="../images/4_03.png">
              </dt>
              <dd>
                <span>
                        护士上门
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/4_05.png">
              </dt>
              <dd>
                <span>
                        健康体验
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/4_07.png">
              </dt>
              <dd>
                <span>
                        中医理疗
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/4_09.png">
              </dt>
              <dd>
                <span>
                        催乳师
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/4_11.png">
              </dt>
              <dd>
                <span>
                        送药到家
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/5_03.png">
              </dt>
              <dd>
                <span>
                        上门体验
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/5_05.png">
              </dt>
              <dd>
                <span>
                        护工护理
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/5_07.png">
              </dt>
              <dd>
                <span>
                        家具养老
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/5_09.png">
              </dt>
              <dd>
                <span>
                        育儿月嫂
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../images/5_11.png">
              </dt>
              <dd>
                <span>
                         智能硬件
                </span>
              </dd>
            </dl>
          </div>
          <div class="three">
            <p class="remen">
            <i class="fa fa-heart"></i>
              <span>热门服务</span>

            </p>
          </div>
          <div class="fore">
            <ul>
              <li>
                  <span>输液</span>
              </li>

              <li>
                  <span>专业护士静脉点滴</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>打针</span>
              </li>

              <li>
                  <span>肌肉注册，皮下注册</span>
              </li>
             </ul>
             <ul>
              <li>
                  <span>普通换药</span>
              </li>
              <li>
                  <span>伤口清洁消毒，换敷料</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>美白针</span>
              </li>
              <li>
                  <span>静脉注射美白针</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>导尿</span>
              </li>
              <li>
                  <span>插尿管，尿管护理，更换尿管</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>静脉采血</span>
              </li>
              <li>
                  <span>用于常规或特殊检测，辅助诊断疾病等</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>鼻饲</span>
              </li>
              <li>
                  <span>鼻腔输入营养和药物，更换胃管</span>
              </li>
            </ul>
            <ul>
              <li>
                  <span>催乳</span>
              </li>
              <li>
                  <span>产后开奶、催乳、通乳、回奶离乳指导等</span>
              </li>
            </ul>
          </div>
          </section>
            </scroller>
          </main>

             </div>
          <!--one-->




  </div>
</template>

<script>
import { Scroller } from 'vux'
export default {
  components: {
    Scroller

  },
  data:function(){
    return{
      banner:{}
    }
  },
  methods:{
    getData:function(){
      var vm=this;
      vm.$http({
        url:"http://localhost:8182/api/banner",
        methods:"GET"
      }).then(function (res){
        console.log(res.body)
        vm.banner=res.body.data.banner
      },function(err){
        console.log(err)
      })
    }
  },
  mounted:function(){
    this.getData()

  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;


}
html{
  font-size: 100px;
}
body{
  font-size: 14px;
}
.shouye {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  overflow: hidden;
  /*header*/
  /*banner*/ }
  .shouye .header {
    width: 100%;
    height: .5rem;
    background: #f9f9f9;
    display: -webkit-flex;
    color: #00c6a2;
    text-align: center;
    line-height: .5rem;
    font-size: .14rem; }
    .shouye .header .left {
      width: 15%; }
    .shouye .header .center {
      width: 70%;
      font-size: .18rem; }
    .shouye .header .right {
      width: 15%; }
  .shouye .banner {
    width: 100%;
    height: auto; }
    .shouye .banner ul {
      width: 100%;
      display: -webkit-box; }
      .shouye .banner ul li {
        width: 100%; }
        .shouye .banner ul li img {
          width: 100%;
          display: block; }
  .shouye #main {
    width: 100%;
    -webkit-flex: 1;
    overflow: hidden;
    background: #e9efef;
    /*one*/
    }
    .shouye #main .section {
      width: 100%; }
    .shouye #main .one {
      width: 100%;
      height: 1.69rem;
      display: -webkit-flex;
      margin-bottom: 16px;
      margin-top: 8px;
      background: #fff; }
      .shouye #main .one .left {
        width: 40%;
        height: 100%;
        margin-top: 2.5%; }
        .shouye #main .one .left img {
          width: 100%;
          height: 100%; }
      .shouye #main .one .right {
        width: 60%;
        height: 100%; }
        .shouye #main .one .right .right1 {
          width: 100%;
          height: 50%; }
        .shouye #main .one .right .right2 {
          width: 100%;
          height: 50%; }
        .shouye #main .one .right img {
          width: 100%;
          height: 100%; }
    .shouye #main .two {
      width: 100%;
      display: -webkit-flex;
      -webkit-flex-wrap: wrap;
      background: #fff;
      padding-top: .06rem;
      color: #535353; }
      .shouye #main .two dl {
        width: 20%;
        height: auto;
        display: -webkit-flex;
        -webkit-flex-direction: column;
        justify-content: center;
        align-items: center; }
        .shouye #main .two dl dt {
          width: .44rem;
          height: .44rem; }
          .shouye #main .two dl dt img {
            width: 100%;
            height: 100%;
            display: block; }
        .shouye #main .two dl dd {
          font-size: .1rem;
          padding: .06rem 0; }
    .shouye #main .three {
      margin-top: 10px;
      width: 100%;
      background: #fff; }
      .shouye #main .three p {
        margin-left: 5%;
        line-height: .41rem;
        font-size: .14rem;
        color: #010101; }
        .shouye #main .three p i {
          color: #61dcc6;
          padding-right: 2%; }
    .shouye #main .fore {
      margin-bottom: 8px;
      margin-top: 1px;
      width: 100%;
      display: -webkit-flex;
      -webkit-flex-wrap: wrap; }
      .shouye #main .fore ul {
        text-align: center;
        width: 50%; }
        .shouye #main .fore ul li:nth-of-type(1) {
          line-height: .43rem;
          font-size: .14rem;
          color: #85d9e8; }
        .shouye #main .fore ul li:nth-of-type(2) {
          font-size: .14rem;
          padding-bottom: .2rem;
          font-size: .1rem;
          color: #999999;
          margin-left: 3%;
          margin-right: 3%; }
      .shouye #main .fore ul:nth-of-type(1), .shouye #main .fore ul:nth-of-type(4), .shouye #main .fore ul:nth-of-type(5), .shouye #main .fore ul:nth-of-type(8) {
        background: #fff; }
      .shouye #main .fore ul:nth-of-type(1) li:nth-of-type(1), .shouye #main .fore ul:nth-of-type(2) li:nth-of-type(1), .shouye #main .fore ul:nth-of-type(5) li:nth-of-type(1), .shouye #main .fore ul:nth-of-type(6) li:nth-of-type(1) {
        color: #ff717b; }
</style>
