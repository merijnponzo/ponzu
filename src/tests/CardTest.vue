<template>
  <section class="my-6">
    <div class="row gap-4">
      <h1 class="c12 fs__h info-f">Card Patterns</h1>
      <div class="c4 bg line">
        <div class="ra-16x9 one">Visual</div>
        <div class="box">
          <h4 class="fs__t toy">This is a card</h4>
          <p>
            H6 The quick brown fox jumps over the lazy dog Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <ul class="chips dir-x gap-1 px-3 pb-3">
          <li class="one">New</li>
          <li class="line two">€3000</li>
          <li class="bg">Sold</li>
        </ul>
      </div>
      <div class="c6 info-custom big p-4">
        <div class="box">
          <h1>This is another card, with card</h1>
          <pre>With a .info-custom color</pre>
          <ul class="chips dir-x gap-1 px-3 pb-3">
            <li class="one">New</li>
            <li class="line two">€3000</li>
            <li class="bg">Sold</li>
          </ul>
          <p class="fs__r">
            H6 The quick brown fox jumps over the lazy dog Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <button class="btn two">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardTests",

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
