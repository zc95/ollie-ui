<template>
  <button
    class="ol-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type ? 'ol-button--' + type : '',
      size ? 'ol-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >
    <i class="ol-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default" class="ol-button__text"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'OlButton',

  props: {
    type: {
      type: String,
      default: 'default' // primary/danger
    },
    size: String, // small/medium/large
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style lang="less" scoped>
.ol-button {
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  touch-action: manipulation;
  font-size: 14px;
  height: 40px;
  background-color: transparent;
  outline: none;
  border: 0;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;

  &__text {
    position: relative;
    z-index: 1;
    line-height: 22px;
  }

  &--default {
    color: #ffffffe6;
    background-color: #0052d9;
  }
  &--danger {
    color: #ffffffe6;
    background-color: #e34d59;
  }

  &--small {
    line-height: 22px;
    height: 36px;
    font-size: 14px;
  }
  &--large {
    line-height: 24px;
    height: 44px;
    font-size: 16px;
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
}
</style>
