<template>

<div class="liantian">
          <header class="header">
              <div class="left">

                  <router-link to='/index/haha'><span class="icon-font">&#xe639</span></router-link>
              </div>
              <div class="center">
                  <h2>
                      李医生
                  </h2>
              </div>
              <div class="right">
                  <span class="fa fa-phone"></span>
                  <span class="fa fa-user"></span>
              </div>
          </header>
          <main class="main" id="main">
              <section class="section">
              <div class="one ch">
                  <p>
                    <img src="../images/1.jpg">
                    <span>
                        你好，在吗，
                        <em></em>
                    </span>
                  </p>
              </div>
              <div class="two ch">
                      <p>

                    <span>
                        嗯呢
                        <em></em>
                    </span>
                     <img src="../images/2.jpeg">
                  </p>
              </div>
              <div class="one ch">
                  <p>
                    <img src="../images/1.jpg">
                    <span>
                        请问您有什么需要帮助的
                        <em></em>
                    </span>
                  </p>
              </div>
                      <div class="two ch">
                      <p>

                    <span>
                        这几天主要是腰腿疼痛
                        <em></em>
                    </span>
                     <img src="../images/2.jpeg">
                  </p>
              </div>
              <div class="one ch">
                   <p>
                    <img src="../images/1.jpg">
                    <span>
                        那就服万通筋骨片
                        <em></em>
                    </span>
                   </p>
              </div>
                            <div class="two ch">
                      <p>

                    <span>
                        好哒，谢谢
                        <em></em>
                    </span>
                     <img src="../images/2.jpeg">
                  </p>
              </div>



              </section>
          </main>
          <footer class="footer">
              <p>
                  <input type="text">
                  <span class="send">发送</span>
              </p>
              <p>
                <a>
                  <span class="fa fa-user"></span>
                </a>
                <a>
                  <span class="fa fa-eye"></span>
                </a>
                <a>
                  <span class="fa fa-star"></span>
                </a>
                <a>
                  <span class="fa fa-heart"></span>
                </a>
                <a>
                  <span class="fa fa-home"></span>
                </a>
                <a>
                  <span class="fa fa-phone"></span>
                </a>
              </p>
          </footer>
      </div>


</template>
<style>
body,html{
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




.liantian {
	 width: 100%;
  height: 100%;
   overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction: column; }

.liantian .header {
  width: 100%;
  height: .44rem;
  background: #3EC2E7;
  line-height: .44rem;
  text-align: center;
  display: -webkit-flex;
  font-size: .2rem;
  color: #fff; }
  .liantian .header .left {
    width: 15%; }
 .liantian  .header .right {
    width: 20%; }
    .liantian .header .right span {
      margin-right: .2rem; }
  .liantian .header .center {
    width: 65%; }

.liantian .main {
  width: 100%;
  -webkit-flex: 1;
  background: #eee;
  overflow: hidden; }

.liantian .section {
  padding-top: 5%; }
  .liantian .section .one, .section .two {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%; }
    .liantian .section .one p, .section .two p {
      width: 80%;
      display: -webkit-flex;
      display: -webkit-box;
      padding-bottom: 5%; }
      .liantian .section .one p img, .section .two p img {
        width: .4rem;
        height: .4rem;
        -webkit-flex-shrink: 0; }
      .liantian .section .one p span, .section .two p span {
        display: block;
        line-height: .21rem;
        padding: 5%;
        position: relative;
        border-radius: 7px; }
        .liantian .section .one p span em, .section .two p span em {
          width: .26rem;
          height: .26rem;
          position: absolute;
          top: .1rem; }
          .liantian .section .one p span em:after, .section .two p span em:after {
            content: '';
            width: .2rem;
            height: .2rem;
            border-radius: 100%;
            position: absolute;
            top: .04rem;
            z-index: 1; }
          .liantian .section .one p span em:before, .section .two p span em:before {
            content: '';
            width: .16rem;
            height: .16rem;
            border-radius: 100%;
            background: #efefef;
            position: absolute;
            top: -.04rem;
            z-index: 2; }
  .liantian .section .one span {
    background: #fff;
    color: #000;
    margin-left: 6%; }
  .liantian .section .one em {
    left: -.11rem; }
    .liantian .section .one em:before {
      left: -.04rem;
      background: #fff; }
    .liantian .section .one em:after {
      left: -.01rem;
      background: #fff; }
  .liantian .section .two {
    display: -webkit-flex;
    -webkit-justify-content: flex-end;
  /*          display: -webkit-box ;
      -webkit-box-pack:end;
overflow: hidden;
 */ }
    .liantian .section .two p {
      display: -webkit-flex;
      -webkit-justify-content: flex-end;
      padding-right: 5%;
      /*
                  position: relative;
               -webkit-box-pack:end;
               display: -webkit-flex;
                  -webkit-justify-content: flex-end;
                     display: -webkit-flex;
                                       display:  -ms-flex;
                                   -webkit-justify-content: flex-end;
                                   -ms-justify-content: flex-end;

                    margin-right: 1px; */ }
    .liantian .section .two span {
      background: #3EC2E7;
      color: #fff;
      margin-right: 8%;
      /*     display: -webkit-box;
       -webkit-box-pack:end; */ }
    .liantian .section .two em {
      right: -.11rem; }
      .liantian .section .two em:before {
        right: -.04rem;
        background: #3EC2E7; }
      .liantian .section .two em:after {
        right: -.01rem;
        background: #3EC2E7; }

.liantian .footer {
  width: 100%;
  height: .44rem;
  background: #eee; }
  .liantian .footer p:nth-of-type(1) {
    width: 100%;
    height: .44rem;
    display: -webkit-flex;
    text-align: center;
    line-height: .44rem;
    color: #fff; }
    .liantian .footer p:nth-of-type(1) input {
      width: 82%;
      border-radius: 1px;
      border: none;
      margin-right: 3px;
      padding-left: 1%;
      margin-left: 1px; }
    .liantian .footer p:nth-of-type(1) .send {
      display: block;
      -webkit-flex: 1;
      background: #ccc;
      border-radius: 2px;
      margin-right: 2px; }
    .liantian .footer p:nth-of-type(1) .send_active {
      background: #3EC2E7; }
  .liantian .footer p:nth-of-type(2) {
    font-size: .2rem;
    line-height: .44rem;
    display: -webkit-flex;
    text-align: center;
    color: #9f9fa9; }
    .liantian .footer p:nth-of-type(2) a {
      -webkit-flex: 1; }

/*# sourceMappingURL=style.css.map */


</style>

<script>
import $ from '../jquery-1.10.1.min.js'

$(function(){


	var input=$(".footer").find("input"),
		send=$(".send");

	input.on("input propertychange",function(){
		var Trim=$.trim($(this).val());
		if(Trim.length>0){
			send.addClass("send_active");
		}else{
			send.removeClass("send_active");
		}
	});9

	send.on("tap",function(){
		if(!$(this).hasClass("send_active")) return;
		var val=input.val()

		var top='<div class="two ch"><p><span>'+val+'<em></em></span><img src="../images/2.jpeg"></p></div>';
		/*top=top.replace("{{info}}",val);*/
		$(top).appendTo($(".section"));
		myScroll.refresh();
		input.val('');
		$(this).removeClass("send_active");
		myScroll.scrollToElement($(".section .ch:last")[0])
	})
  input.on("keyup",function(even){
    if(even.keyCode==13){
        var val=input.val()

		if(val=="") return
		var top='<div class="two ch"><p><span>'+val+'<em></em></span><img src="../images/2.jpeg"></p></div>';
		top=top.replace("{{info}}",val);
		$(top).appendTo($(".section"));
		myScroll.refresh();
		input.val('');
		send.removeClass("send_active");
		myScroll.scrollToElement($(".section .ch:last")[0])

    }
  })

})

</script>
