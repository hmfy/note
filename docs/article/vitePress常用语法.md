Link
---
[站内链接跳转](/node/index)

Table
---
| column1 | column2 | column3 | column4 |
| ------- | :-----: | :-----: | ------: |
| row 1   | row 1   | row 1   | row 1   |
| row 2   | row 2   | row 2   | row 2   |

Emoji
---
:tada: :100: :smile:

[more emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

Custom Containers
---
::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger 这里是信息框的标题
This is a dangerous warning.
:::

::: details 这里是信息框的标题
This is a details block.
:::

::: raw
this an element
<div style="color: hotpink; font-weight: bold;">这里是是一段 html 片段</div>
:::

Syntax Highlighting in Code Blocks
--- 
```js:line-numbers
import { ref } from 'vue'
export default {
    setup () {
        const test = ref(0)
        return {
            test
        }
    }
}
```

Code Groups
---
::: code-group
```html[index.html]
    <html>
        <head></head>
        <body>
            <script src='./config.js'></script>
        </body>
    </html> 
```
```js[config.js]
    export default {
        ...
    }
```
:::