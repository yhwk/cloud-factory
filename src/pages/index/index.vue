<template>
  <div class="container">
    <div class="top">
      <a href="#" class="list"></a>
      <a href="/pages/index/city/mian" class="address">{{address}}</a>
      <a href="#" class="message"></a>
    </div>
    <form class="form-container">
      <input placeholder="输入关键字进行精确查找"
             placeholder-style="color:#ccc;letter-spacing:1rpx;background: url(../../../static/corn/search.png) no-repeat center left;background-size: 30rpx 30rpx;padding-left: 42rpx; ;"
             @click.lazy="goSearch"
             disabled />
    </form>
    <div class="panel">
      <div class="panel-header">
        <span>附近订单 | <a href="/pages/index/city/mian">{{address}}</a></span>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
    <!--<div class="userinfo" @click="bindViewTap">-->
      <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
      <!--<div class="userinfo-nickname">-->
        <!--<card :text="userInfo.nickName"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="usermotto">-->
      <!--<div class="user-motto">-->
        <!--<card :text="motto"></card>-->
      <!--</div>-->
    <!--</div>-->
    <bottom></bottom>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'
import bottom from '@/components/bottom'

export default {
  data () {
    return {
      latitude: '',
      longitude: '',
    }
  },
  components: {
    card,
    bottom
  },
  computed: {
    address () {
      return this.$store.state.user.address
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.$store.commit('setUserInfo', res.userInfo)
            }
          })
        }
      })
    },
    goSearch() {
      wx.navigateTo({
        url: '/pages/index/search/main'
      })
    }
  },
  created () {
    wx.getSetting ({
      success: (res) => {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize ({
            scope: 'scope.userInfo',
            success: () => {
              this.getUserInfo()
            }
          })
        } else {
          this.getUserInfo()
        }
      }
    }),
    wx.getLocation ({
      success: (res) => {
        this.longitude = res.longitude
        this.latitude = res.latitude
        this.$store.dispatch('getAddress',`${res.latitude},${res.longitude}`)
      }
    })
  },
}
</script>

<style scoped lang="less">
  .form-container {
    width: 88%;
    height: 60rpx;
    background: rgba(166, 166, 166, .1);
    border-radius: 8px;
    input {
      padding: 6rpx 0 6rpx 120rpx;
      font-size: 28rpx;
      line-height: 60rpx;
    }
    .input-placeholder {
      background: url(../../../static/corn/search.png);
    }
  }
  .panel {
    width: 90%;
    margin: 40rpx auto;
    padding: 0 60rpx;
    .panel-header {
      text-align: left;
      font-size: 16px;
      a {
        display: inline-block;
      }
    }
  }
  .top {
    display: flex;
    font-size: 32rpx;
    color: #333;
    width: 90%;
    margin-bottom: 32rpx;
    .list {
      width: 48rpx;
      height: 42rpx;
      background: url(../../../static/corn/list.png) no-repeat;
      background-size: 100% 100%;
    }
    .address {
      flex: 1;
      text-align: center;
    }
    .message {
      width: 48rpx;
      height: 46rpx;
      background: url(../../../static/corn/message.png) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>

