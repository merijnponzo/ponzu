<template>
  <div class="row">
    <div class="c12">
      <div class="box w-75:ds">
        <h1>H1 The quick brown fox jumps over the lazy dog</h1>
        <h2>H2 The quick brown fox jumps over the lazy dog</h2>
        <h3>H3 The quick brown fox jumps over the lazy dog</h3>
        <h4>H4 The quick brown fox jumps over the lazy dog</h4>
        <h5>H5 The quick brown fox jumps over the lazy dog</h5>
        <h6>H6 The quick brown fox jumps over the lazy dog</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <hr />
        <p class="fs__h one-f">Fontsize Hero This is the second line</p>
        <p class="fs__t">Fontsize Title This is the second line</p>
        <p class="fs__s">Fontsize Subtitle This is the second line</p>
        <p class="fs__r">Fontsize Read This is the second line</p>
        <p class="fs__a">Fontsize Author This is the second line</p>
        <p class="fs__m">Fontsize Meta This is the second line</p>
        <p class="fs__b">Fontsize Button This is the second line</p>
        <p class="fs__i">Fontsize Input This is the second line</p>
        <p class="fs__l">
          Fontsize Label<br />
          This is the second line
        </p>
      </div>
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
