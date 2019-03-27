import ElementParamsInput from "./element-params-input";

ElementParamsInput.install = Vue => {
  Vue.component(ElementParamsInput.name, ElementParamsInput);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ElementParamsInput);
}

export default ElementParamsInput;
