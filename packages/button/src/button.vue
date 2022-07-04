<template>
  <button
    class="ol-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type ? 'ol-button--' + type : '',
      size ? 'ol-button-size--' + size : '',
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
