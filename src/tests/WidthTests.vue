<template>
  <section class="my-4">
    <div class="row">
      <div class="c12">
        <h1 class="fs__h info-f">Width</h1>
        <div class="box two-1 w-25">W-25</div>
        <div class="box two-2 w-50">W-50</div>
        <div class="box two-3 w-75">W-75</div>
        <div class="box two-4 w-100">W-100</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WidthTests",
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
