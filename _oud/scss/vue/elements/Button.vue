<script>
import { h } from "vue";
export default {
  props: {
    label: {
      type: String,
      default: "View",
    },
    status: {
      type: String,
      default: null,
    },
    cast: {
      type: String,
      default: "button",
    }
  },
  render() {
    return h(this.cast, { class: "btn" }, this.label);
  },
};
</script>
