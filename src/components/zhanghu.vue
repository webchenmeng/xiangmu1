<template>
  <div>





       <div class="left">
          <router-link to='/index/haha'><span class="icon-font">&#xe639</span></router-link>
       </div>



       <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <group :title="aa">
      <cell :title="bb" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle"></span>
          <badge text="8"></badge>
        </div>
      </cell>
        <cell :title="cc" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle"></span>
        </div>
      </cell>
   
      <x-switch :title="kk"></x-switch>
      
      <x-switch :title="q" v-model="show1"></x-switch>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>


     <x-switch :title="e" v-model="show5"></x-switch>
    <actionsheet v-model="show5" :menus="menus3" @on-click-menu="click"></actionsheet>


    <group :title="vv">
      <x-number :name="nn" :title="nn"></x-number>
    </group>


   
  </div>

  
    

    

     
    </group>
  </div>
  
</template>

<style>
  .popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}

</style>



<script>
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2List = baseList.slice(0, 2)

import { Actionsheet,Badge, Group, Cell ,XSwitch,Toast,XNumber,Swiper,SwiperItem ,GroupTitle} from 'vux'

export default {
  components: {
    Badge,
    Group,
    Cell,
    XSwitch,
    Actionsheet,
    Toast,
    XNumber,
    Swiper,
    SwiperItem,
    GroupTitle

  },
  data:function(){
    return{
         bb:"我的消息",
         cc:"资料编辑",
         kk:"音量开启",
         show1: false,
         q:"发送给朋友",
         w:"ww",
         e:"删除",
          demo06_list: urlList,
      
      swiperItemIndex: 1,
       
          nn:"数量",
          menus1: {
            menu1: '分享到朋友圈',
            menu2: '分享到微博'
          },
          show2: false,
          menus2: {
            menu1: 'Take Photo',
            menu2: 'Choose from photos'
          },
          show3: false,
          show4: false,
          show5: false,
          menus5: [{
            label: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
            type: 'info'
          }, {
            label: 'Primary',
            type: 'primary',
            value: 'primary'
          }, {
            label: 'Warn',
            type: 'warn'
          }, {
            label: 'Disabled',
            type: 'disabled'
          }, {
            label: 'Default'
          }],
          showSuccess: false,
          menus3: {
            'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
            delete: '<span style="color:red">Delete</span>'
          }
    }

      
    },
  
  mounted () {
    document.title = 'actionsheet'
    setTimeout(() => {
      document.title = 'actionsheet again'
    }, 5000)
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  }





}
</script>

<style >
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
.left{
  width:100%;
  height:80px;
  background:#000;
  color:#fff;
}
.left span{
  color:#fff;
  width: 40px;
  line-height: 80px;
  text-align: center;
  display:block;
}
</style>
