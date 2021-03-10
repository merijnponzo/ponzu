<template>
  <ul class="grid">
    <li class="c6"></li>
    <li class="c6 c12:u">
      <a href="#">Link 2</a>
    </li>
    <li class="c6 c12:sm">
      <a href="#">Link 3</a>
    </li>
    <li class="c6 c3:s">
      <a href="#">Link 4</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Grid",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
li {
  border: 1px solid #ccc;
}
.c6-m {
  background: red;
}
</style>
