<template>
  <div class="container">
    <div class="panel">
      <div class="panel-header">
        <span href="javascript:void(0)" @click="switchCert(1)" :class="{ active: certType == 1}">企业认证</span>
        <span href="javascript:void(0)" @click="switchCert(2)" :class="{ active: certType == 2}">个人认证</span>
      </div>
      <div class="panel-body company" v-if="certType == 1">
        <form>
          <!--<div class="img" @click="uploadImg">-->
            <!--<img :src="licenseImg" v-if="licenseImg" />-->
          <!--</div>-->
          <upload-img className="img" :on-success="companyUpload" >
          </upload-img>
          <div class="input-group">
            <input placeholder="企业名称">
          </div>
          <button class="button" type="button" @click="submit">提交审核</button>
        </form>
      </div>
      <div class="panel-body personal" v-if="certType == 2">
        <form>
          <upload-img className="img" :on-success="personalFrontUpload" >
          </upload-img>
          <upload-img className="img" :on-success="personalBackUpload" >
          </upload-img>
          <div class="input-group">
            <input placeholder="姓名">
          </div>
          <div class="input-group">
            <input placeholder="身份证号">
          </div>
          <button class="button" type="button" @click="submit">提交审核</button>
        </form>
      </div>
    </div>
    <bottom></bottom>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import bottom from '@/components/bottom'
import uploadImg from '@/components/uploadImg'

export default {
  data () {
    return {
      certType: 1,
      licenseImg: '',
      certImgFront: '',
      certImgBack: ''
    }
  },
  components: {
    bottom,
    'upload-img':uploadImg
  },
  computed: {
  },
  methods: {
    switchCert (type) {
      this.certType = type
    },
    submit () {
    },
    companyUpload (res) {
      console.log(res);
    },
    personalFrontUpload (res) {
      console.log(res);
    },
    personalBackUpload (res) {
      console.log(res);
    }
  }
}
</script>

<style scoped>
  .panel {
    width: 90%;
    margin: 40rpx auto;
  }
  .panel-header{
    display: flex;
    margin-bottom: 40rpx;
  }
  .panel-header span{
    flex: 1;
    font-size: 17px;
    text-align: center;
    color: #888;
  }
  .panel-header span:hover, .panel-header span.active{
    color: #000;
  }
  .input-group {
    width: 69vw;
    background: #f2f3f5;
    margin: 20rpx auto;
  }
  input {
    width: 100%;
    padding: 6px 0 6px 20px;
    font-size: 15px;
  }
  .button{
    width: 69vw;
    margin: 20rpx auto;
    background: #409EFF;
    color: #fff;
    text-align: center;
    font-size: 15px;
  }
</style>
