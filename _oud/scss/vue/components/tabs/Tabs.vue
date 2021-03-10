<template>
  <ul class="tabs__list" role="tablist">
    <li v-for="(tab, i) in tabsRendered">
      <a
        :class="{ selected: this.selected === i }"
        :aria-selected="this.selected === i"
        @click="setSelected(i)"
        href="#"
        role="tab"
        class="tab"
        >{{ tab.label }}</a
      >
    </li>
  </ul>
  <div class="tabs__panel" ref="tabContent">
    <slot></slot>
    <div
      v-for="(tab, t) in tabs"
      v-if="content"
      :class="{ selected: this.selected === t }"
    >
      {{ tab.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PTabs",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      tabsRendered: [],
      selected: null,
      content: false,
    };
  },
  mounted() {
    // render tabs from prop array
    if (this.tabs.length) {
      if (this.tabs[0].hasOwnProperty("content")) {
        this.content = true;
      }
      // render tabs from slot content
    } else {
      for (const t of this.$refs.tabContent.children) {
        this.tabsRendered.push({ label: t.getAttribute("label") });
      }
    }
    // set tab index selected
    this.setSelected(this.index);
  },
  methods: {
    setSelected(i) {
      // remove old selected
      if (this.selected !== null) {
        const oldPanel = this.$refs.tabContent.children[this.selected];
        if (oldPanel) {
          oldPanel.classList.remove("selected");
        }
      }
      // remove new selected
      const newPanel = this.$refs.tabContent.children[i];
      if (newPanel) {
        newPanel.classList.add("selected");
      }
      this.selected = i;
    },
  },
};
</script>
