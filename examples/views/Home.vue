<template>
  <div class="home">
    <h3>Button 按钮</h3>

    <ol-button>基础按钮</ol-button>
    <ol-button type="danger">警告按钮</ol-button>

    <ol-button size="small">小按钮</ol-button>
    <ol-button size="large">大按钮</ol-button>

    <ol-button disabled>禁用</ol-button>
    <ol-button type="danger" disabled>禁用</ol-button>

    <h3>Switch 开关 {{ checked }}</h3>
    <ol-switch v-model="checked"></ol-switch>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang="less" scoped>
/deep/ .ol-button {
  margin: 5px;
}
</style>
