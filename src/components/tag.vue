<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tag',
  }
</script>

<style>
  .tag {
    border: 1px solid #F2F6FC;
    border-radius: 2px;
  }
</style>
