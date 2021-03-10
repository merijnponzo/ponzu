import Alert from "./components/alert";

// import "./styles/index.less";
import { App } from "vue";

const components = {
  Alert,
};

function install(Vue: App) {
  for (const component in components) {
    Vue.component(components[component].name, components[component]);
  }

  Vue.config.globalProperties.$Message = Message;
  Vue.config.globalProperties.$Notification = Notification;
  Vue.config.globalProperties.$Loading = Loadingbar;
}

export default { install };

export { default as Alert } from "./components/alert";
