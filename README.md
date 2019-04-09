# Element UI 地址参数辅助输入框
类似postman地址输入框，自动筛选参数，可视化输入

## Install

``` shell
npm install element-params-input -S
```
OR

``` shell
yarn add element-params-input 
```
## Demo

[Online](http://123.207.117.50/#/params)

## Quick Start

``` javascript
import elementParamsInput from "element-params-input";

Vue.use(elementParamsInput);
```

``` html
<element-params-input v-model="test" placeholder="placeholder"></element-params-input>
```

OR

``` html
 <script src="./element-params-input.js"></script>
```

``` html
<element-params-input v-model="test" placeholder="placeholder"></element-params-input>
```
## Props

1. `v-model`: 双向绑定，与el-input一致
2. `placeholder`: 占位，与el-input表现一致
3. `absolute`: 参数输入框的定位，未指定将是流定位
4. `prefixicon`: 输入框图标，font-class


## License

[MIT](./LICENSE)




