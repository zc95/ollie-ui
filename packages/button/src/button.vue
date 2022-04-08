<template>
  <button :style="{ color }">测试按钮</button>
</template>

<script>
export default {
  name: 'WaButton',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="less" scoped>
button {
  background-color: aqua;
}
</style>
