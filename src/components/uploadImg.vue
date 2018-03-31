<template>
  <div @click.lazy="upload" :class="className">
    <img :src="path">
  </div>
</template>

<script>
  export default {
    props: ['path', 'className', 'name', 'url', 'on-success', 'fail'],
    methods: {
      upload () {
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: (res) => {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            this.path = res.tempFilePaths
            this['onSuccess'](res.tempFilePaths)
            wx.uploadFile({
              url: this.url || '/upload', //仅为示例，非真实的接口地址
              filePath: res.tempFilePaths,
              name: this.name || 'pic',
              success: (res) => this.success,
              fail: (res) => this.fail
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 0 auto;
    background: #f2f3f5;
  }
  div img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
