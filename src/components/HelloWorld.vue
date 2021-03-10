<template>
  <div class="box">
    <button class="btn one" disabled>Button!</button>
    <button class="btn one mt-5 w-50:dv">Button!</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: String,
    default: "",
  },

  data() {
    return {
      count: 0,
    };
  },
};
</script>
