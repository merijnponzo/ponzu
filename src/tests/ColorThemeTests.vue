<template>
  <section class="my-4">
    <div class="row">
      <div class="c12 two-1 big">
        <div class="box">
          <h1 class="white-f">This is amazing</h1>
          <p class="text-c w-75">
            H6 The quick brown fox jumps over the lazy dog Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur
          </p>
          <button class="btn two-6">Hello</button>
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
