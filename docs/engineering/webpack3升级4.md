## 说明
* 不要把所有的包直接升到最新
* 通过尽可能少的修改保证项目能正常编译、打包
* 在可兼容的版本基础上，适当调整包的版本
* 如果是想要从 3 升到 5，最好也先升级到 4，再逐步升级

## 根据可用的 package.json 安装对应的包
```json
"dependencies": {
    "axios": "^0.19.2",
    "cross-env": "^7.0.3",
    "less": "^3.13.1",
    "less-loader": "^5.0.0",
    "vue": "^2.3.4"
},
"devDependencies": {
    "clean-webpack-plugin": "^4.0.0",
    "compression-webpack-plugin": "^4.0.0",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.7.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^5.0.4",
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.0.1",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^1.6.2",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^3.0.0",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^2.1.0",
    "vue-loader": "^15.7.1",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.21",
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-middleware": "^3.7.1",
    "webpack-dev-server": "^3.8.0",
    "webpack-merge": "^4.2.2"
},
```

## 全局搜索并修改
* 注释以下插件的使用：
    * `webpack.HashedModuleIdsPlugin`
    * `webpack.optimize.ModuleConcatenationPlugin`
    * `webpack.optimize.CommonsChunkPlugin`
    * `webpack.NoEmitOnErrorsPlugin`
    * `webpack.NamedModulesPlugin`
    * `webpack.DefinePlugin`
* 增加 `vue-loader` 配置，[vue-loader 从 v14 迁移 15](https://vue-loader.vuejs.org/zh/migrating.html)
```js
const {VueLoaderPlugin} = require("vue-loader")
const devWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new VueLoaderPlugin()
    ]
})
```

## 修改 webpack.dev.conf.js
* 增加 `mode: "development"`
```js
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    ...
})
```

## 修改 webpack.prod.conf.js
* 增加 `mode: "production"`
```js
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    ...
})
```
* 注释以下插件的使用：
  * `ExtractTextPlugin`
  * `UglifyJsPlugin`
  * `OptimizeCSSPlugin`
* 增加一个全新的配置项：
```js
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const devWebpackConfig = merge(baseWebpackConfig, {
    ...,
    optimization: {
        // 取代 HashedModuleIdsPlugin
        moduleIds: 'hashed',
        // 取代 new webpack.optimize.ModuleConcatenationPlugin()
        concatenateModules: true,
        // 取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
        noEmitOnErrors: true,
        // 调整 UglifyJsPlugin 和 OptimizeCSSPlugin 的位置
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: false
                    }
                },
                sourceMap: config.build.productionSourceMap,
                parallel: true
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: config.build.productionSourceMap
                    ? { safe: true, map: { inline: false } }
                    : { safe: true }
            })
        ],
        // 取代 optimize.CommonsChunkPlugin
        runtimeChunk: {
            name: 'manifest'
        },
        // 取代 optimize.CommonsChunkPlugin
        splitChunks: {
            chunks: 'all'
        }
    },
    ...
})
```
* 增加插件：（取代 `ExtractTextPlugin`）
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devWebpackConfig = merge(baseWebpackConfig, {
    ...,
    new MiniCssExtractPlugin({
        filename: utils.assetsPath('css/[name].[contenthash].css'),
        ignoreOrder: true
    }),
    ...
})
```

## 修改 utils.js （如果有）
将以下逻辑注释：
```js
const ExtractTextPlugin = require("extract-text-webpack-plugin")
...
if (options.extract) {
    return ExtractTextPlugin.extract({
        use: loaders,
        fallback: "vue-style-loader"
    });
} else {
    return ["vue-style-loader"].concat(loaders);
}
```
并替换为：
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```js
return [
    options.extract ? MiniCssExtractPlugin.loader : 'vue-style-loader',
].concat(loaders)
```

## 注意事项
1. `MiniCssExtractPlugin` 的问题： 
   * `cacheGroups` 配置项中的 `name` 不能与 `entry` 配置项的 key 相同，
   * 会导致 `MiniCssExtractPlugin` 包报错，
   * 详情查看[issue](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/341)
2. 控制台可能有一个 warning：Conflicting order. Following module has been added:
   * 将 `MiniCssExtractPlugin` 包的配置项 `ignoreOrder` 设为 `ignoreOrder` 可消除
   * 具体原因见[官网说明](https://webpack.js.org/plugins/mini-css-extract-plugin/#remove-order-warnings)
3. 可能有一些包通过更新后不兼容原来的配置项写法，可查询文档后做对应修改，例如：
   * 将 `utils.js` 中的 `javascriptEnabled: true` 改为：
   ```js
    lessOptions: {
        javascriptEnabled: true
    }
    ```
   * `css-loader` 的 `minimize` 在 `0.28.11` 版本后被取消，可用 OptimizeCSSPlugin 或 CssMinimizerPlugin 压缩
   * 在 webpack3 时使用的 ExtractTextPlugin 打包时，所有的样式被打包到了一个 css 内
   * 而改为 `MiniCssExtractPlugin` 后，每一个 js 对应的样式都会打包出一个 css 文件
4. 更新版本后，语法可能更严格了，一些不规范的写法可能会报错，例如我这里控制台就报了这个错：
    ```shell
    Module parse failed: Unexpected token (2:0)
    File was processed with these loaders:
     * ./node_modules/vue-loader/lib/index.js
    You may need an additional loader to handle the result of these loaders.
    | 
    > .el-date-editor .el-input__inner {
    |   padding-left: 0.45rem;
    | }
    ```
   * 找到这段代码所在的文件发现：
    ```vue
    <style lang="">
        .el-date-editor .el-input__inner {
            padding-left: 0.45rem;
        }
    </style>
    ```
    * 有一个 `lang` 给了无效的值，删掉即可
    * 如果还有其它类似的不规范的，也一并删掉
5. `webpack-dev-server` `v3` 以上版本会根据 `hot: true/hot: "only"`, 自动使用 `HotModuleReplacementPlugin` 插件，不需要手动写
6. 升到 `v4` 后，`webpack-dev-server` 可以选择继续用 `v3` 版本，也可以选择[升级一下](https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md)
7. 如果浏览器报错 `exports is not defined `，把 `.babelrc` 文件的 `"modules": false,` 删掉
8. 升级`webpack4`后发现控制台很多编译信息，可以通过 [stats](https://webpack.docschina.org/configuration/stats/#root) 配置
    