<template>
  <span class="ol-tag" @click="handleClick" :class="[type ? 'ol-tag--' + type : '', size ? 'ol-tag-size--' + size : '']">
    <span v-if="$slots.default" class="ol-tag__text"><slot></slot></span>
  </span>
</template>
<script>
export default {
  name: 'OlTag',

  props: {
    type: {
      type: String,
      default: 'default' // default/primary/warning/danger/success
    },
    size: String, // small/medium/large
    disabled: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style lang="less" scoped>
.ol-tag {
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
  border-radius: 2px;
  white-space: nowrap;
  font-size: 12px;
  height: 22px;
  line-height: 20px;
  padding: 0 12px;
  max-width: 120px;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  color: #fff;

  &--primary {
    background-color: #0052d9;
    border-color: #0052d9;
  }
  &--warning {
    background-color: #e34d59;
    border-color: #e34d59;
  }
  &--danger {
    background-color: #ed7b2f;
    border-color: #ed7b2f;
  }
  &--success {
    background-color: #00a870;
    border-color: #00a870;
  }
  &--default {
    background-color: #000000e6;
    border-color: #000000e6;
  }
  &-size--small {
    height: 20px;
    line-height: 18px;
    padding: 0 8px;
    font-size: 10px;
  }
  &-size--medium {
    height: 24px;
    line-height: 22px;
    padding: 0 11px;
    font-size: 12px;
  }
  &-size--large {
    height: 30px;
    line-height: 28px;
    padding: 0 15px;
    font-size: 14px;
  }
}
</style>
