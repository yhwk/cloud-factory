<template>
  <div class="bottom">
    <!--<ul>-->
      <!--<li @click.lazy="redirectTo(0)">-->
        <!--<badge :value="0" :max="99">-->
          <!--<span>首页</span>-->
        <!--</badge>-->
      <!--</li>-->
      <!--<li @click.lazy="redirectTo(1)">-->
        <!--<badge :value="0" :max="99">-->
          <!--<span>工厂</span>-->
        <!--</badge>-->
      <!--</li>-->
      <!--<li class="center"  @click.lazy="redirectTo(2)">-->
        <!--<badge :value="0" :max="99">-->
          <!--<span>+</span>-->
        <!--</badge>-->
      <!--</li>-->
      <!--<li @click.lazy="redirectTo(3)">-->
        <!--<badge :value="1" :max="99">-->
          <!--<span>消息</span>-->
        <!--</badge>-->
      <!--</li>-->
      <!--<li @click.lazy="redirectTo(4)">-->
        <!--<badge :value="0" :max="99">-->
          <!--<span>我的</span>-->
        <!--</badge>-->
      <!--</li>-->
    <!--</ul>-->
    <img src="../../static/artboard.png">
  </div>
</template>

<script>
  import badge from '@/components/badge'

  export default {
    name: 'bottom',
    components: {
      badge
    },
    methods: {
      redirectTo (code) {
        let urlList = ['/pages/index/main','/pages/factory/mian',
          '/pages/publish/main','/pages/message/main','/pages/personal/main']
        let titleList = ['首页','工厂','发布需求','消息','我的']
        wx.redirectTo({
          url: urlList[code]
        })
        wx.setNavigationBarTitle({
          title: titleList[code]
        })
      }
    }
  }
</script>

<style scoped>
  .bottom {
    position: fixed;
    top: calc(100vh - 18vw);
    z-index: 9999
  }
  .bottom img {
    width: 100vw;
    height: 18vw;
  }
  ul li {
    width: 20%;
    float: left;
    text-align: center;
    font-size: 17px;
    line-height: 100rpx;
    color: #888;
  }
  li.center {
    font-size: 17px;
  }
</style>
