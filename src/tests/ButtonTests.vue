<template>
  <section class="my-6">
    <div class="row">
      <div class="c12">
        <h1 class="c12 fs__h info-f">Buttons</h1>
        <div class="box p-0">
          <button class="btn toy">Button toy!</button>
          <button class="btn one">Button One</button>
          <button class="btn two">Button Two</button>
          <button class="btn info">Button Info</button>
          <button class="btn warning">Button Warning</button>
          <button class="btn one big">Button big</button>
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
