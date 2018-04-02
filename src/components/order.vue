<template>
  <div class="card">
    <p class="title">
      {{data.title}}
    </p>
    <div class="body">
      <div class="line">
        <p>数量 : {{data.num}}件</p>
        <span class="min">
          {{data.region}} {{distance}}
        </span>
      </div>
      <div class="line">
        <p>单价 : {{data.minimumprice}}-{{data.max}}元</p>
      </div>
      <div class="line min">
        <p class="light">{{data.publishuser}}</p>
        <p>{{data.deliverydate}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTitle,formatTime, calcDistance} from '@/utils/index.js'
  export default {
    props: ['order'],
    computed: {
      data () {
        this.order.title = formatTitle(this.order.title)
        this.order.deliverydate = formatTime(this.order.deliverydate)
        return this.order
      },
      distance () {
        return calcDistance([this.order.latitude, this.order.longitude], this.$store.state.user.position)
      }
    }
  }
</script>

<style scoped lang="less">
  .card {
    background: #fff;
    padding: 20rpx 32rpx;
    line-height: 47rpx;
    .title {
      font-size: 33rpx;
      color: #333;
      line-height: 52rpx;
    }
    .body {
      color:#666;
      font-size: 30rpx;
    }
    .line {
      display: flex;
      justify-content: space-between;
    }
    .min {
      font-size: 24rpx;
    }
    .light {
      color: #999
    }
  }
</style>
