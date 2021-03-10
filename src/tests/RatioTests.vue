<template>
  <section class="my-4">
    <div class="row mt-3 gap-3">
      <div class="c3 c6:dv">
        <div class="box">
          <div class="r-1x1 one">
            <span
              >Note, a ratio box cannot be nested within a grid column
              (c..)Ratio 1x1</span
            >
          </div>
        </div>
      </div>
      <div class="c3 c6:dv">
        <div class="box">
          <div class="r-16x9 two"><span class="p-2">Ratio 16x9</span></div>
        </div>
      </div>
      <div class="c3 c6:dv">
        <div class="box">
          <div class="r-3x4 info"><span>Ratio 3x4</span></div>
        </div>
      </div>
      <div class="c3 c6:dv">
        <div class="box">
          <div class="r-4x3 bg"><span>Ratio 4x3</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RatioTest",

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
