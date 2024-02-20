## 默认配置
当不做任何处理时，webpack 有默认值，长这样：
```js
splitChunks: {
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
        defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
        },
        default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
        },
    },
}
```

## test

想要将 `node_modules` 中的某些包拆开并行请求，可以这样写：

```js
splitChunks: {
    chunks: 'all', // 同步和异步代码都处理
    minSize: 10, // 默认值是2000
    cacheGroups: {
        lodash: {
            test: /[\\/]lodash[\\/]/, // 这里的正则一定要带上前后的斜杠，
            name: 'tools_lodash' // 给包取个名字
        },
        vendor: {
            test: /[\\/](vue|element-ui|vue-router)[\\/]/, // 多个包的匹配
            name: 'tools_vendors',
        },
        utils: {
            test: module => {
                // test 可以是函数，这里通过 module 的 path 将自己定义的工具方法单独打包
                const path = require('path')
                return module.resource?.includes(`${path.sep}src${path.sep}utils.js`)
            },
            name: 'tools_utils'
        }
    }
}
```

## name

默认配置包含对 `node_modules` 的处理，即 `test: /[\\/]node_modules[\\/]/` 

因此可以不处理，默认会打包

如果需要自定义打包后的包名，则覆盖默认配置即可，如：

```js
node_modules: {
    test: /[\\/]node_modules[\\/]/, 
    name: 'tools_common'
    priority: -1,
}
```
> 打包出来文件名 tools_common.[hash].js

也可以不设置 `name`，直接修改当前配置项的 `key`, 即修改 `node_modules`，如：

```js
tools_common: {
    test: /[\\/]node_modules[\\/]/,
    priority: -1,
    // name: false  默认值为 false
}
```
> 打包出来的文件名 tools_common~[chunkName].[hash].js

为多个配置项配置同一个 `name` ，会将这些配置项的 `chunk` 合并为一个 `chunk`

::: danger 强烈提醒：
**不要将 name 设置为与 entry key 一致**

[如果 splitChunks.name 与 entry point 名称匹配，entry point 将被删除](https://www.webpackjs.com/plugins/split-chunks-plugin/#splitchunksname)

[已知在 webpack4 中会导致 MiniCssExtractPlugin 插件报错](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/341)
:::

## priority
***为什么后面重新定义的针对 `node_modules` 的处理可以覆盖默认的呢？***

因为 `priority` 这个属性，`priority` 表示权重

`webpack` 默认配置的 `priority` 值都是负数(-20)

而自己新定义的配置的 `priority` 值默认是 0