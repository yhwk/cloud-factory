<template>
  <div>
    <slot></slot>
    <sup class="badge" v-if="value&&value>0">{{ cot }}</sup>
  </div>
</template>

<script>
  export default {
    name: 'badge',
    props: ['value','max'],
    computed: {
      cot () {
        if (this.max && this.max < this.value) {
          return `${this.max}+`
        } else {
          return this.value
        }
      }
    }
  }
</script>

<style scoped>
.badge {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
  position: absolute;
  /*top: 0;*/
  transform: translateY(-50%) translateX(100%);
}
</style>
