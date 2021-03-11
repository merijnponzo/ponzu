<template>
  <div class="row gap-6 my-6">
    <div class="c6">
      <h1 class="fs__h info-f">Typography</h1>
      <div class="box">
        <h1>H1 The quick brown fox jumps over the lazy dog, this is sweet</h1>
        <h2>H2 The quick brown fox jumps over the lazy dog</h2>
        <h3>H3 The quick brown fox jumps over the lazy dog</h3>
        <h4>H4 The quick brown fox jumps over the lazy dog</h4>
        <h5>H5 The quick brown fox jumps over the lazy dog</h5>
        <br />
        <h6>H6 The quick brown fox jumps over the lazy dog</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
    </div>
    <div class="c6">
      <p class="fs__h one-f">Hero</p>
      <p class="fs__t">Title</p>
      <p class="fs__s">Subtitle</p>
      <p class="fs__r">Read</p>
      <p class="fs__a">Author</p>
      <p class="fs__m">Meta</p>
      <p class="fs__b">Button</p>
      <p class="fs__i">Input</p>
      <p class="fs__l">Label</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypographyTests",

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
