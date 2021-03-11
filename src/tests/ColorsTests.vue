<template>
  <section class="my-6">
    <div class="row">
      <h1 class="c12 fs__h info-f">Colors</h1>
      <div class="c4">
        <div class="box one">Color one can be anyname</div>
        <div class="box one-1">One-1 created from Mix</div>
        <div class="box one-2">One-2 created from Mix</div>
        <div class="box one-3">One 3 created from Mix</div>
        <div class="box one-4">One 4 created from Mix</div>
      </div>
      <div class="c4">
        <div class="box two">Color two can be anyname</div>
        <div class="box two-1">Two-1 created from Mix with tonsurton</div>
        <div class="box two-2">Two-2 created from Mix with tonsurton</div>
        <div class="box two-3">Two 3 created from Mix with tonsurton</div>
        <div class="box two-4">Two 4 created from Mix with tonsurton</div>
        <div class="box two-5">Two 5 created from Mix with tonsurton</div>
        <div class="box two-6">Two 6 created from Mix with tonsurton</div>
        <div class="box two-7">Two 7 created from Mix with tonsurton</div>
        <div class="box two-8">Two 8 created from Mix with tonsurton</div>
      </div>
      <div class="c4">
        <div class="box info">Color Info can be anyname</div>
        <div class="box info-custom">Any color can have custom colors</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColorsTests",

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
