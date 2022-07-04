<template>
  <button :style="{ color }">测试按钮</button>
</template>

<script>
export default {
  name: 'OlButton',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>
