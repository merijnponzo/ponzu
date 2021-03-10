<template>
  <section class="my-4">
    <div class="row">
      <div class="c4">
        <div class="box one">Color one can be anyname</div>
        <div class="box one-1">One-1 created from Mix</div>
        <div class="box one-2">One-2 created from Mix</div>
        <div class="box one-3">One 3 created from Mix</div>
        <div class="box one-4">One 4 created from Mix</div>
      </div>
      <div class="c4">
        <div class="box two">Color two can be anyname</div>
        <div class="box two-1">One-1 created from Mix with tonsurton</div>
        <div class="box two-2">One-2 created from Mix with tonsurton</div>
        <div class="box two-3">One 3 created from Mix with tonsurton</div>
        <div class="box two-4">One 4 created from Mix with tonsurton</div>
        <div class="box two-5">One 5 created from Mix with tonsurton</div>
        <div class="box two-6">One 6 created from Mix with tonsurton</div>
        <div class="box two-7">One 7 created from Mix with tonsurton</div>
        <div class="box two-8">One 8 created from Mix with tonsurton</div>
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
