<template>
<!--   <div class="listpage">
  <div class = "loading" v-if = "loading">loading...</div>
  <div class = "error" v-if = "err">{{errData}}</div>
  <scroller lock-x scrollbar-y height="100%" v-if = "listc">
    <div class="isc">
      <div class="list-li" v-for="(i,k) in msg">
        <div class="list-t">{{i.title}}</div>
        <div class="list-c">{{i.txt}}</div>
      </div>
    </div>
  </scroller>
</div> -->


 <div class="shangmen">
         <header class="header">
           <h2>上门</h2>
         </header>
           <scroller lock-x >
         <main class="main" id="main">

           <section class="section">
           <p class="re">
              <i class="fa fa-heart"></i><span>热门项目</span>
            </p>
         <div class="one">
           <ul>
             <li>
               输液
             </li>
           </ul>
            <ul>
             <li>
               打针
             </li>
           </ul>
            <ul>
             <li>
               美白针
             </li>
           </ul>
            <ul>
             <li>
               换药
             </li>
           </ul>
            <ul>
             <li>
               导尿
             </li>
           </ul>
            <ul>
             <li>
               鼻饲
             </li>
           </ul>
         </div>
                <div class="stree ">
           <p class="hu">
             <span>
               中医理疗
             </span>
             <span>
               全部
               <i class="icon-font">&#xe608;</i>
             </span>
           </p>
           <div class="swiper-container heng">
           <div class="swiper-wrapper t1">
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_07.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>

           </div>
         </div>
         </div>
          <div class="two ">
           <p class="hu">
             <span>
               上门问诊
             </span>
             <span>
               全部
               <i class="icon-font">&#xe608;</i>
             </span>
           </p>
           <div class="swiper-container heng">
           <div class="swiper-wrapper t1">
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_07.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_13.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
           <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>
              <dl class="swiper-slide">
             <dt>
               <img src="../images/99_14.png">
             </dt>
             <dd>
               <span>郑高颖</span>
               <span>肿瘤综合科</span>
               <span>1313.1km</span>
               <span>224人预约过</span>
             </dd>
           </dl>

           </div>
         </div>
         </div>
           </section>

         </main>
  </scroller>
      </div>

</template>

<script>
import { Scroller } from 'vux'
export default {
  components: {
    Scroller

  }
}
</script>
<style>
.shangmen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  font-size: 14px; }
  .shangmen .header {
    width: 100%;
    height: .5rem;
    font-size: .2rem;
    text-align: center;
    line-height: .5rem;
    border: 1px solid #ccc;
    color: #6b6363;
    background: #f9f9f9; }
  .shangmen .main {
    width: 100%;
    -webkit-flex: 1;
    overflow: hidden;
    background: #e9efef;
    overflow-y: auto; }
    .shangmen .main .section {
      width: 100%; }
      .shangmen .main .section .re {
        width: 100%;
        line-height: .44rem;
        padding-left: 3%; }
        .shangmen .main .section .re i {
          color: #12c49f; }
        .shangmen .main .section .re span {
          padding-left: 2%;
          color: #272929; }
      .shangmen .main .section .one {
        width: 100%;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap; }
        .shangmen .main .section .one ul {
          width: 33%;
          line-height: .42rem;
          text-align: center;
          border: 1px solid #e9efef;
          background: #fff;
          border-bottom: none;
          border-right: none;
          color: #1cc6a3; }
      .shangmen .main .section .two, .shangmen .main .section .stree {
        display: -webkit-flex;
        -webkit-flex-direction: column;
        overflow: hidden;
        width: 100%; }
        .shangmen .main .section .two .swiper-container, .shangmen .main .section .stree .swiper-container {
          width: 100%; }
        .shangmen .main .section .two .hu, .shangmen .main .section .stree .hu {
          margin-top: 3%;
          width: 100%;
          line-height: .42rem;
          display: -webkit-flex;
          border-bottom: 1px solid #e9efef;
          background: #fff; }
          .shangmen .main .section .two .hu span:nth-of-type(1), .shangmen .main .section .stree .hu span:nth-of-type(1) {
            width: 80%;
            padding-left: 3%; }
          .shangmen .main .section .two .hu span:nth-of-type(2), .shangmen .main .section .stree .hu span:nth-of-type(2) {
            color: #868686; }
            .shangmen .main .section .two .hu span:nth-of-type(2) i, .shangmen .main .section .stree .hu span:nth-of-type(2) i {
              padding-left: .05rem;
              font-size: .16rem; }
        .shangmen .main .section .two .heng, .shangmen .main .section .stree .heng {
          -webkit-flex: 1;
          background: #fff;
          overflow: hidden; }
        .shangmen .main .section .two .t1, .shangmen .main .section .stree .t1 {
          display: -webkit-box;
          background: #fff;
          /*  overflow-x:scroll;
          overflow-y:hidden; */ }
          .shangmen .main .section .two .t1 dl, .shangmen .main .section .stree .t1 dl {
            width: 26%;
            display: -webkit-flex;
            -webkit-flex-direction: column;
            margin-left: 3%;
            padding: 2% 0; }
            .shangmen .main .section .two .t1 dl dt, .shangmen .main .section .stree .t1 dl dt {
              width: .76rem;
              height: .76rem;
              padding-bottom: 2%;
              margin-left: 4%; }
              .shangmen .main .section .two .t1 dl dt img, .shangmen .main .section .stree .t1 dl dt img {
                width: 100%;
                height: 100%; }
            .shangmen .main .section .two .t1 dl dd span, .shangmen .main .section .stree .t1 dl dd span {
              display: block;
              text-align: center;
              line-height: .21rem; }
            .shangmen .main .section .two .t1 dl dd span:nth-of-type(2), .shangmen .main .section .stree .t1 dl dd span:nth-of-type(2) {
              font-size: .12rem; }
            .shangmen .main .section .two .t1 dl dd span:nth-of-type(3), .shangmen .main .section .two .t1 dl dd span:nth-of-type(4), .shangmen .main .section .stree .t1 dl dd span:nth-of-type(3), .shangmen .main .section .stree .t1 dl dd span:nth-of-type(4) {
              font-size: .10rem;
              color: #7d7d7d; }
</style>