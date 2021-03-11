<template>
  <section class="my-4">
    <div class="row">
      <div class="c12 two-1 big p-4">
        <h1 class="fs__h info-f">Color Themes</h1>
        <div class="box">
          <h1 class="white-f">This is amazing</h1>
          <p class="text-c">
            H6 The quick brown fox jumps over the lazy dog Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur
          </p>
          <div class="box mt-3 w-50">
            <button class="btn two-6">Btn</button>
            <button class="btn one">Line btn</button>
            <button class="btn two">Line btn</button>
          </div>
          <div class="box dir-x spread-eq gap-5">
            <button class="btn two">Btn</button>
            <button class="btn two">Btn</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColorThemes",

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
