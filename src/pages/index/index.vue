<template>
  <div class="container">
    <div class="top">
      <div class="nav">
        <ul>
          <li class="list"><a href="#" class="list"></a></li>
          <li class="address"><a href="/pages/index/city/mian" class="address">{{address}}</a></li>
          <li class="message"><a href="#" class="message"></a></li>
        </ul>
      </div>
      <form class="form-container">
        <input placeholder="输入关键字进行精确查找"
               placeholder-class="pl-search"
               @click.lazy="goSearch"
               disabled />
      </form>
    </div>
    <div class="panel">
      <div class="panel-header">
        <span>附近订单</span>
        <span class="choose"></span>
      </div>
      <div class="panel-body">
        <ul>
          <li v-for="(order, index) in orderList" :key="index">
            <order-card :order="order"></order-card>
          </li>
        </ul>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from '@/components/bottom'
import order from '@/components/order'

export default {
  data () {
    return {
      latitude: '',
      longitude: '',
    }
  },
  components: {
    'order-card':order,
    bottom
  },
  computed: {
    address () {
      return this.$store.state.user.address
    },
    orderList () {
      return this.$store.state.order.orderList.list
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
        this.latitude = res.latitude
        this.longitude = res.longitude
        this.$store.dispatch('getAddress',[res.latitude, res.longitude])
      }
    })
  },
}
</script>

<style scoped lang="less">
  .top {
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    .nav ul{
      display: flex;
      font-size: 33rpx;
      line-height: 36rpx;
      color: #333;
      width: 90%;
      margin: 20rpx auto 28rpx;
      .list {
        width: 48rpx;
        height: 42rpx;
        background: url(../../../static/corn/list.png) no-repeat;
        background-size: 100% 100%;
      }
      .address {
        flex: 1;
        text-align: center;
        a {
          display: inline;
        }
      }
      .message {
        width: 48rpx;
        height: 46rpx;
        background: url(../../../static/corn/contact.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .panel {
    width: 100%;
    .panel-header {
      text-align: left;
      font-size: 36rpx;
      color: #666;
      background: #fff;
      padding: 20rpx 48rpx;
      margin-bottom: 20rpx;
      span.choose {
        float: right;
        width: 20rpx;
        height: 32rpx;
        margin-top: 6rpx;
        background: url(../../../static/corn/right.png) no-repeat;
        background-size: 100% 100%;
      }
    }
    .panel-body {
      box-sizing: border-box;
      width: 100%;
      max-height: calc(100vh - 400rpx);
      overflow: scroll;
      ul {
        display: flex;
        flex-direction: column;
        li {
          margin-bottom: 20rpx;
        }
      }
    }
  }
</style>

<style lang="less">
</style>
