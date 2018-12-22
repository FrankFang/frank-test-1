<template>
  <div class="page" style="position:relative;">
    <g-date-picker></g-date-picker>
    <p>其他内容</p>
  </div>
</template>
<style>
  .page {
    padding: 100px;
  }
</style>
<script>
  import GDatePicker from './date-picker/date-picker'

  export default {
    name: "demo",
    components: {GDatePicker},
    data () {
      return {}
    },
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
