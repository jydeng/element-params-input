import ElementParamsInput from "./packages/element-params-input";

ElementParamsInput.install = function(Vue, opts = {}) {
  Vue.component(ElementParamsInput.name, ElementParamsInput);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ElementParamsInput);
}

export default ElementParamsInput;
