<template>
  <div>
    active: {{ active }}
    <slot />
  </div>
</template>

<script>
export default {
  name: "PTab",
  props: {
    active: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log("this bitch is mounted");
  },
};
</script>
