# 改造主应用

引入 qiankun
-
见 [官方文档](https://qiankun.umijs.org/zh/guide/getting-started)

提供子应用容器
-
在`app.vue`内添加一个元素作为微应用统一的容器

如
```vue
<template>
    <div id="app">
        <router-view />
        <div id="sub-container"></div>
    </div>
</template>
```

注册微应用
-
* 新建 `micro.js` 文件:
  ::: code-group
  <<<@/public/micro-app/micro.js
  :::

* 在适当的位置调用导出的`register`和`start`函数，一般`main.js`里就可以
::: code-group
```javascript [main.js]
import microApp from 'micro.js'

// 函数内可以传参，一般不需要
microApp.register()
microApp.start()
```
:::

配置路由
-
* 在`router/index.js`内配置微应用路由（菜单）
```javascript
// path 以 activeRule 开头
// activeRule 后面的路由，即为微应用的子路由
{
    path: '/micro-app/nodeManager',
    name: 'nodeManager',
    component: Layout,
    meta: {
        title: '微应用 micro-app 的菜单名',
    },
    children: [
        {
            name: 'nodeList',
            path: '/micro-app/nodeManager/nodeList',
            meta: {
                title: '子菜单名',
            }
        }
    ]
}
```

子应用的代理
-
子应用的代理需要补上，如 `devsever` 或 `nginx`
