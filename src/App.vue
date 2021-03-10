<template>
  <main class="pz">
    <ColorsTests />
    <TypographyTests />
    <ButtonsTests />
    <RatioTests />
    <ColorThemeTests />
  </main>
</template>

<script setup>
import ColorsTests from "./tests/ColorsTests.vue";
import TypographyTests from "./tests/TypographyTests.vue";
import ButtonsTests from "./tests/ButtonTests.vue";
import RatioTests from "./tests/RatioTests.vue";
import ColorThemeTests from "./tests/ColorThemeTests.vue";
</script>

<style lang="scss">
@import "./scss/ponzu.scss";
</style>
