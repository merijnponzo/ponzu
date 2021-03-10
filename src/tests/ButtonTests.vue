<template>
  <section class="my-4">
    <div class="row">
      <div class="c12">
        <div class="box">
          <button class="btn one">Button One</button>
          <button class="btn two">Button Two</button>
          <button class="btn info">Button Info</button>
          <button class="btn warning">Button Warning</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ButtonTest",

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
