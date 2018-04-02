<template>
  <div class="container">
    <form class="form-container">
      <input placeholder="输入关键字进行精确查找"
             placeholder-class="pl-search"
             focus="true"
             auto-focus="true"/>
    </form>
    <div class="panel">
      <div class="panel-header">
        需求
      </div>
      <div class="panel-body">
        <div class="box">
          <div v-for="(item, index) in hotList" :key="index" class="tag">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header">
        工厂
      </div>
      <div class="panel-body">
        <div class="box">
          <div v-for="(item, index) in factoryList" :key="index" class="line">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tag from '@/components/tag'

  export default  {
    name: 'search',
    data () {
      return {
        hotList: ['代加工','纺织','内衣','订单折扣狗','边料','廉价代加工','辅料','原料','金华','义乌'],
        factoryList: ['浙江棒杰针织品数码有限公司']
      }
    },
    components: {
      tag,
    }
  }
</script>

<style scoped lang="less">
  .container {
    background: #fff;
    .form-container {
      margin-top: 32rpx;
      margin-bottom: 32rpx;
    }
    .panel {
      width: 100%;
      border-top: 1px solid #eee;
      box-sizing: border-box;
      padding: 32rpx 40rpx;
    }
  }
  .panel-header {
    text-align: left;
    font-size: 32rpx;
    color: #333
  }
  .panel-body {
    margin: 18rpx -14rpx
  }
  .box {
    display: flex;
    flex-flow: wrap;
  }
  .tag {
    font-size: 24rpx;
    color: #666;
    padding: 12rpx 32rpx;
    margin: 14rpx;
    white-space:nowrap;
    border: none;
    background: #F2F2F2;
    box-sizing: border-box;
    border-radius: 8rpx;
  }
  .tag a {
    border: 1px solid #F2F6FC;
    border-radius: 2px;
    padding: 5px 12px;
  }
</style>
