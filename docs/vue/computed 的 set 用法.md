computed
---
作为一个自带缓存特性的属性，computed 一般用于复杂属性的值的获取

一般只需要用到它的 getter, 那它的 setter 又有什么用途呢？

下面简单记录一下

:::code-group
```vue [parent.vue]
<template>
    <childComputed :modelVal.sync="modelVal" />
    <childWatch :modelVal.sync="modelVal" />
</template>
<script>
    import childComputed from 'child-computed'
    import childWatch from 'child-watch'
    import {ref} from 'vue'
    
    export default {
        components: { childWatch, childComputed },
        setup () {
            const modelVal = ref('')
            return { modelVal }
        }
    }
</script>
```
```vue [child-watch.vue]
<!-- 一般自定义双向绑定时我们都是这样写 -->
<template>
    <input type="text" v-model="selfVal">
</template>
<script>
import {ref, watchEffect} from 'vue'

export default {
    props: ['modelVal'],
    setup(props, ctx) {
        const selfVal = ref('')
        watchEffect(() => props.modelVal, newVal => selfVal.value = newVal)
        watchEffect(selfVal, newVal => ctx.emit('update:modelVal', newVal))
    }
}
</script>
```
```vue [child-computed.vue]
<!-- 通过使用 computed 的 set 可以这样写 -->
<template>
    <input type="text" v-model="selfVal">
</template>
<script>
import {computed, ref} from 'vue'

export default {
    props: ['modelVal'],
    setup(props, ctx) {
        const selfVal = computed({
            get: _ => props.modelVal,
            set (val) {
                ctx.emit('update:modelVal', val)
            }
        })
    }
}
</script>
```
:::

