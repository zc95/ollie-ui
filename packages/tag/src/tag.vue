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
