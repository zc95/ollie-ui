<template>
  <button :style="{ color }">测试tab-bar</button>
</template>

<script>
export default {
  name: 'OlSwitch',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>
