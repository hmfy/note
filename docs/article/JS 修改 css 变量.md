## js 读取 css 变量
```js
const dom = document.querySelector(':root')
const menuHeight = getComputedStyle(dom).getPropertyValue('--menu-height')
```

## js 修改 css 变量
```js
const dom = document.querySelector(':root')
dom.style.setProperty('--menu-height', '70px')
```
