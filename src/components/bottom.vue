<template>
  <div class="bottom">
    <ul>
      <li @click.lazy="redirectTo(0)">
        <badge :value="0" :max="99">

          <img src="../../static/corn/home.png">
          <span>首页</span>
        </badge>
      </li>
      <li @click.lazy="redirectTo(1)">
        <badge :value="0" :max="99">
          <img src="../../static/corn/factory.png">
          <span>工厂</span>
        </badge>
      </li>
      <li @click.lazy="redirectTo(2)">
        <badge :value="0" :max="99">
          <div class="center" ><img src="../../static/corn/publish.png"></div>
          <span>发布</span>
        </badge>
      </li>
      <li @click.lazy="redirectTo(3)">
        <badge :value="1" :max="99">
          <img src="../../static/corn/message.png">
          <span>消息</span>
        </badge>
      </li>
      <li @click.lazy="redirectTo(4)">
        <badge :value="0" :max="99">
          <img src="../../static/corn/my.png">
          <span>我的</span>
        </badge>
      </li>
    </ul>
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

<style scoped lang="less">
  @displacement: -28rpx;

  .bottom {
    position: fixed;
    width: 100%;
    top: calc(100vh - 20vw);
    z-index: 9999;
    padding-top: 42rpx;
    background: url(../../static/bottom.png);
    background-position: top ;
    background-size: 100vw auto;
    img {
    }
    ul {
      li {
        padding:0 calc(10% - 26rpx);
        float: left;
        text-align: center;
        font-size: 24rpx;
        line-height: 100rpx;
        color: #333;
        box-sizing: border-box;
        width: 20%;
        img {
          width: 52rpx;
          height: 52rpx;
          object-fit: contain;
        }
        span {
          line-height: 48rpx
        }
        &:first-child img {
          width: 56rpx;
          height: 48rpx;
        }
        &:nth-child(3) {
          padding:0 calc(10% - 40rpx);
          img {
            width: 80rpx;
            height: 80rpx;
            position: absolute;
            margin-top: @displacement;
          }
        }
        .center {
          width: 80rpx;
          height: 80rpx + @displacement;
        }
      }
    }
  }
</style>

<style>
  .bottom li div {
    display: flex;
    flex-direction: column;
  }
</style>
