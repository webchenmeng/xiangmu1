<template>
  <div>
    <router-view ></router-view>
  </div>
</template>

<script>

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@font-face{
	  font-family: "iconfont";
	  src : url("images/iconfont/iconfont.ttf");
	  src : url("images/iconfont/iconfont.woff");
	}
	.icon-font {
    	font-family: "iconfont";
  	}

ul,ol{
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
body>div{
	width: 100%;
	height: 100%;
}

</style>
