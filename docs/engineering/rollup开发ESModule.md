## tree-shaking
在使用一些第三库时，通常可以按需引入，即：
```javascript
import { init } from 'echarts'

console.log(init)
```
通过这样的写法在工程里面使用时，会只将被使用的这个 `init` 函数及其依赖的代码打包进项目，

而其它没有被用到的代码，会被剔除，而这就是 `tree-shaking`, 具体细节描述见[官网](https://www.webpackjs.com/guides/tree-shaking/)

而正常用 `webpack` 开发一个库供工程里面使用，一般是没有 `tree-shaking` 效果的，这是因为构建目标的原因

从官网可以看到：

![img.png](/article/tree-shaking.png)

我们引入的库文件，导出方式需要是 `ESModule`, 而在 `webpack5` 之前的版本，是不支持输出 `ESModule` 的内容的

因此可以确定，如果使用 5 之前的版本打包工具库，在工程里面引入使用，是不会有 `tree-shaking` 的

## webpack5 的实验性属性

在 `webpack5` 中，增加了一个实验性属性，支持将打包结果以 `ESModule` 形式导出

通过配置 `outputModule` 和 `type: module` 即可开启：
```javascript
module.exports = {
    experiments: {
        outputModule: true,
    },
    library: {
        type: 'module'
    },
}
```

例如源码内容：
```javascript
const getWord = (a, b) => a + b + 'word'
const getTest = /* #PURE */(num) => {
    console.log('random')
}
export {
    getTest,
    getWord
}
```

通过配置以上配置后，打包后发现，导出方式确实为 `ESModule`：
```javascript
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
    /******/ 	// define getter functions for harmony exports
    /******/ 	__webpack_require__.d = (exports, definition) => {
        /******/ 		for(var key in definition) {
            /******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                /******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                /******/ 			}
            /******/ 		}
        /******/ 	};
    /******/ })();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
    /******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ })();
/******/
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   o: () => (/* binding */ getWord),
    /* harmony export */   y: () => (/* binding */ getTest)
    /* harmony export */ });
const getWord = (a, b) => a + b + 'word'
const getTest = /* #PURE */(num) => {
    console.log('random')
}

var __webpack_exports__getTest = __webpack_exports__.y;
var __webpack_exports__getWord = __webpack_exports__.o;
export { __webpack_exports__getTest as getTest, __webpack_exports__getWord as getWord };

//# sourceMappingURL=index.js.map
```

那是不是意味着这个文件在工程内使用的时候，就可以 `tree-shaking` 呢？

其实也不行，下面是在工程里引入使用，并将工程打包后的结果：

在工程里引入使用：
```javascript
import { getTest  } from 'active-package'
console.log(getTest)
```

工程打包后的结果（将 `active-package` 单独做了分包）：
```javascript
(window["webpackJsonp_e-one"] = window["webpackJsonp_e-one"] || []).push([["activePackage"], {
  c8f5: function(o, e, n) {
    "use strict";
    n.d(e, "a", (function() {
      return c;
    }));
    n = {};
    (() => {
      n.d = (o, e) => {
        for (var r in e) n.o(e, r) && !n.o(o, r) && Object.defineProperty(o, r, { enumerable: !0, get: e[r] });
      };
    })(), (() => {
      n.o = (o, e) => Object.prototype.hasOwnProperty.call(o, e);
    })();
    e = {};
    n.d(e, { n0: () => r, yD: () => a, oz: () => t });
    const r = (o, e) => o + e, t = (o, e) => o + e + "word", a = o => {
      const e = 123;
      return console.log("random"), o + e * Math.random();
    };
    e.n0;
    var c = e.yD;
    e.oz;
  }
}]);
//# sourceMappingURL=activePackage.3efe34a6.js.map
```

可以看到只使用了 `getTest`，但是另一个函数仍然被打包进去了，这是为什么？

可以看到库的打包代码并不是简单的通过 `export` 导出，而是先定义了一个 `__webpack_exports__` 变量

然后再将所有导出的函数挂到这个对象上，再依次导出

那么这样有什么区别呢？这是因为 `webpack` 无法判断这些代码没有被使用，或者说没有 `副作用`

那什么叫 `副作用` 呢？

上述代码包含两处两处自执行函数，一处函数调用

因为自执行函数里的内容很可能操作了 `window` 或者做了其它的影响了外部的事情

`webpack` 又不会执行代码，因此并不能判断这里面是否对外界存在影响，因此就不能随意剔除

所以这几部分是没办法直接被 `tree-shaking` 的，而这几个自执行函数实际做了什么呢？

主要关注一下 `__webpack_require__.d` 这个函数，这里会将所有导出的函数写到 `object` 字面量内

然后通过 `__webpack_require__.d` 函数将这些函数挂到 `__webpack_exports__` 上

因此发现，只要导出的函数，会被这个 `object` 字面量引用，因此无法 `tree-shaking`

## Rollup

而使用 `rollup` 进行工具库的打包，就可以很好的解决上述问题

并且 `rollup` 默认的构建目标就是 `ESModule`, 因此几乎可以做到零配置

主要安装这三个插件 `@rollup/plugin-node-resolve`, `@rollup/plugin-json`, `@rollup/plugin-commonj` 就可以了

`rollup` 打包后的代码：
```javascript
const getWord = (a, b) => a + b + 'word';
const getTest = /* #PURE */(num) => {
    console.log('random');
};

export { getTest, getWord };
//# sourceMappingURL=index.js.map
```

可以看出区别，`rollup` 打包后的结果没有运行时，几乎没有对源码做任何处理

（可以用 `terser` 进行压缩，处理注释等，配置项和 `webpack` 中的 `terser` 插件几乎一样）

很明显，上述的代码在工程内引入时，是可以 `tree-shaking` 的：
```javascript
import { getTest  } from 'active-package'
console.log(getTest)
```

工程打包后的结果：
```javascript
(window["webpackJsonp_e-one"] = window["webpackJsonp_e-one"] || []).push([["activePackage"], {
  c8f5: function(n, o, e) {
    "use strict";
    e.d(o, "a", (function() {
      return c;
    }));
    const c = n => {
      console.log("random");
    };
  }
}]);
//# sourceMappingURL=activePackage.2999c469.js.map
```

可以看到只有 `getTest` 函数被打包进来了，`getWord` 函数被剔除了，达到了我们想要的效果

## 同时输出多种构建目标
在 `rollup` 中，如果想要同时输出既给工程用的 `ESModule` 库，同时输出给浏览器用的 `umd`

只需要再加一份 `output` 配置，并设置 `format: "iife"`：
```javascript
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import clear from 'rollup-plugin-clear';

const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
  terser(),
  clear({
    targets: ['dist']
  })
]

export default [{
  input: "src/index.js",
  output: {
    dir: "dist/es",
    format: "esm",
    sourcemap: true
  },
  plugins
}, {
  input: "src/index.js",
  output: {
    inlineDynamicImports: true,
    dir: "dist/browser",
    name: 'initChart',
    format: "iife"
  },
  plugins
}];
```






