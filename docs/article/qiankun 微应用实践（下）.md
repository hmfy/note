# 改造子应用

新增 public.js 文件
-
:::code-group
```javascript [public.js]
if (window['__POWERED_BY_QIANKUN__']) {
    __webpack_public_path__ = window['__INJECTED_PUBLIC_PATH_BY_QIANKUN__']
}
```
:::

改造 main.js
-
:::code-group
<<<@/public/micro-app/main.js
:::

改造 vue.config.js
-
:::code-group
<<<@/public/micro-app/vue.config.js
:::

将子应用路由模式和主应用保持一致
-
官方文档似乎并没有规定主应用和子应用路由模式需要一致

但是为了后续其它问题的处理简单一点，这里将路由模式保持一致

由于每个子应用都有一个固定的 `activeRule`, 因此需要给对应的子应用加上这个前缀： 

为所有路由增加前缀`#/micro-app`，与`activeRule`保持一致
```javascript
// 注意 hash 模式时，base 要对应地带上 #
const prefix = '#/micro-app'
{
    mode: 'hash'
    base: window['__POWERED_BY_QIANKUN__'] ? prefix : '#/'
}
```

到此为止，主应用和子应用都改造完毕，可以运行了

注意事项
-
某些特定情况下，子应用导出的生命周期函数，主应用可能找不到，解决方案：
* 将`vue.config.js`中的`library`值与`name`保持一致
* 使用插件对打包后的`main.js`的`script`标签添加`entry`属性

若使用到了`axios`，请使用最新版本 

相关插件 HtmlWebpackInjectAttributesPlugin
-
```javascript
new HtmlWebpackInjectAttributesPlugin({
    entry: tag => {
        if (tag.attributes.src) {
            return tag.attributes.src.includes('app')
        }
        return false
    }
})
```

其它配置见 [官方文档](https://qiankun.umijs.org/zh/guide/getting-started)