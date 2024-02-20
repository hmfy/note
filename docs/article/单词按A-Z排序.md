单词排序
-
遇到一个需求，需要对两张表的字段进行比对，包含字段的名称、长度、类型等

并且需要将比对后的结果，以两个表格的形式展示（原始表、目标表）

当两个表格分别渲染好后，希望两个表格字段排列顺序一致，于是选择分别将两个表格的字段都按照 a-z 的顺序来排序：

```javascript
const sortWord = (a, b) => {
    const aCode = a.charCodeAt(0)
    const bCode = b.charCodeAt(0)

    // 前一个字母是空的, 排到前面
    if (isNaN(aCode)) return -1

    // 后一个字母是空的, 排到前面
    if (isNaN(aCode)) return -1

    // 相等，从下一位继续判断
    if (aCode === bCode) return sortWord(a.slice(1), b.slice(1))

    return aCode - bCode
}
const arr = ['c', 'b', 'a', 'h', 'f', 'h', 'a']
arr.sort(sortWord)
console.log(arr)
// 结果： ['a', 'a', 'b', 'c', 'f', 'h', 'h']
```