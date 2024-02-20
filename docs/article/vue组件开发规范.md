## 可复用的组件
解决单一的、独立的、可复用的功能，因此这一点应该作为拆分一个组件的依据

如果一个组件内容涉及到的逻辑、实现的功能特别多，代码几千行，那么这个组件需要再拆分

例如：封装需要支持弹窗的排序组件，应该有三个文件：组件入口文件、排序组件、弹窗组件

::: code-group
```vue [sort.vue]
<template>
    <div>
        sort
    </div>
</template>
```
```vue [dialog.vue]
<template>
    <div>
        dialog
    </div>
</template>
```
```vue [dialog-sort.vue]
<template>
    <dialog>
        <sort></sort>
    </dialog>
</template>
```
:::

## 文件命名
1. 大驼峰命名：更方便，对于大小写不敏感的操作系统，涉及文件操作时可能有问题
2. 全小写用横线分隔：没那么方便，但没有任何问题

## template 部分
1. 避免使用 `id`
2. 避免复杂的逻辑计算，只负责读取数据和显示数据，应使用 `computed` 或 `methods` 替代
3. 避免行内样式 
4. 避免直接修改 `dom`，例如样式的修改应动态控制 `class` 或者 `style` 达到效果
5. 二次封装必须兼容原组件写法及用法，使用 `v-bind="$attrs"` 及 `v-on="$listeners"`
6. `v-for` 必须要加 `key`
7. `v-for` 和 `v-if` 禁止写在同一个标签上/组件上
8. `v-if` 和 `v-show` 应根据实际渲染情况选择使用

## script 部分
1. `props` 定义必须写 `type` 和 `default / require`
2. 与视图渲染无关的数据结构避免放到 `data` 里
3. 纯逻辑计算，应适当抽离或复用，避免全放到组件内部（例如：格式化时间、拷贝、格式化树结构等）
4. 在能够被 `babel` 转成 `ES5` 的前提下，语法用新不用旧
   * 避免不断 `let _this = this` 来在子层级获取实例，用箭头函数替代
   * 对象的方法简写等 `{ a: 1, getData () {} }`
   * ...
5. 禁止提交 `debugger` 及 `console`

## style 部分
1. `style`标签必须要有`scoped`属性，对于全局的样式应该有公用的 `css`
2. 样式复用：`css` 变量、使用 `,` 给不同的选择器定义同一批样式
3. 属性尽量简写：`padding: 0px 2px`，而不是 `padding-left: 2px; padding-right: 2px;...`





