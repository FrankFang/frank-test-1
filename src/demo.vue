<template>
  <div class="page" style="position:relative;">
    <g-date-range-picker :value="d" @input="d = $event" :scope="scope"></g-date-range-picker>
    <p>其他内容</p>
  </div>
</template>
<style>
.page {
  padding: 100px;
}
</style>
<script>
import GDatePicker from "./date-picker/date-picker";
import GDateRangePicker from "./date-picker/date-range-picker";

export default {
  name: "demo",
  components: { GDatePicker, GDateRangePicker },
  data() {
    return {
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)]
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: white;
}
</style>
<style scoped lang="scss">
</style>
