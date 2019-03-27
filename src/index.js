import ElementParamsInput from "./packages/element-params-input";

const install = function(Vue, opts = {}) {
  Vue.component(ElementParamsInput.name, ElementParamsInput);
};

if (typeof window !== "undefined" && window.Vue) {
  install(Window.Vue);
}

export default {
  install,
  ElementParamsInput
};
