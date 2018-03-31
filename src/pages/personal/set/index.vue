<template>
  <div class="container">
    <div class="panel">
      <ul>
        <li><a href="/pages/personal/set/phone/main">手机号</a></li>
        <li><a href="/pages/personal/set/address/main">厂区地址</a></li>
        <li><a href="/pages/personal/set/contacts/main">常用联系人</a></li>
        <li><a href="/pages/personal/set/invoice/main">发票抬头</a></li>
        <li><a href="/pages/personal/set/about/main">关于云工程</a></li>
      </ul>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from '@/components/bottom'

export default {
  data () {
    return {
    }
  },
  components: {
    bottom,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
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
