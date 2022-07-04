<template>
  <span
    class="ol-switch"
    :class="[
      {
        'is-checked': value,
        'is-disabled': disabled
      }
    ]"
    @click.prevent="switchValue"
  >
    <span class="ol-switch__node"></span>
  </span>
</template>

<script>
export default {
  name: 'OlSwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  methods: {
    switchValue() {
      if (this.disabled) return;
      this.$emit('change', !this.value);
    }
  }
};
</script>
