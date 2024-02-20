node 执行 cmd 命令
-

使用 `child_process` 包的 `exec` 命令即可

值得注意的是，每次执行 `exec` 函数，都相当于重新开启一个 `cmd` 窗口

因此需要注意每次执行命令所在的路径

这里简要记录 `exec` ，还有其它[方法](https://nodejs.org/dist/latest-v20.x/docs/api/child_process.html#child-process)，可执行 `.sh，.js` 文件等
```javascript
const { exec } = require("child_process");
const {resolve} = require("path");

const build = 'npx vitepress build docs'
exec(build, (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('成功！')
})

// 这里需注意：如果 exec(`cd ${distPath}`) 
// 然后再 exec('git init')
// 则 git init 会在当前 js 路径下执行，而不会在 distPath 下
// 因此需要配合 && 关联命令行
/* 其中 && 和 || 等同短路语句：
*  & 不关心两个命令成功失败
*  && 前面命令成功，后面命令才执行
*  || 前面失败，后面才执行，前面成功后面不执行
* */
const distPath = resolve(__dirname, './docs/.vitepress/dist')
const gitInit = `cd ${distPath} && git init`
exec(gitInit, (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('git init 成功！')
})

const gitAdd = `cd ${distPath} && git add -A`
exec(gitAdd, (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('git add 成功！')
})
```


