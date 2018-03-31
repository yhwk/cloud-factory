<template>
  <div class="container">
    <form class="form-container">
      <input placeholder="请输入订单、工厂" placeholder-class="placeholder" focus="true" auto-focus="true"/>
    </form>
    <div class="panel">
      <div class="panel-header">
        热门搜索
      </div>
      <div class="panel-body">
        <div class="box">
          <div v-for="(item, index) in hotList" :key="index" class="tag">
            <a href="#">{{item}}</a>
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
        hotList: ['代加工','纺织','内衣','订单折扣','边料','廉价代加工','辅料','原料','金华','义乌']
      }
    },
    components: {
      tag,
    }
  }
</script>

<style scoped>
  .form-container {
    width: 80%;
    background: rgba(166, 166, 166, .1);
    border-radius: 16px;
    margin: 10px 0;
  }
  input {
    padding: 6px 0 6px 20px;
    font-size: 15px;
  }
  .panel-header {
    text-align: center;
  }
  .panel-body {
    padding: 20rpx 40rpx;
  }
  .box {
    display: flex;
    flex-flow: wrap;
  }
  .tag {
    font-size: 15px;
    margin: 10px;
    white-space:nowrap;
    border: none
  }
  .tag a {
    border: 1px solid #F2F6FC;
    border-radius: 2px;
    padding: 5px 12px;
  }
</style>
