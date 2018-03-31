<template>
  <div class="container">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="panel">
      <ul>
        <li><a href="/pages/personal/cert/main">实名认证</a></li>
        <li><a href="#">联系客服</a></li>
        <li><a href="/pages/personal/set/main">设置</a></li>
      </ul>
    </div>
    <bottom></bottom>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'
import bottom from '@/components/bottom'

export default {
  data () {
  },
  components: {
    card,
    bottom
  },
  computed: {
    userInfo () {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style scoped>
  input {
    padding: 6px 0 6px 20px;
    font-size: 15px;
  }
  .panel {
    width: 90%;
    margin: 40rpx auto;
  }
  .panel li a{
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding: 40rpx 0;
    font-size: 17px
  }
</style>
