import {resolve} from "path";
import {generateConfig, getDirName, promisify} from './utils.mjs'

const __dirname = getDirName(import.meta.url)

const commitRemote = async commitMsg => {
    const rootPath = resolve(__dirname, '../')
    const inPath = 'cd ' + rootPath

    const gitAdd = `${inPath} && git add -A`
    const gitAddRes = await promisify(gitAdd, 'git add')
    if (gitAddRes === false) return

    const gitCommit = `${inPath} && git commit -m "${commitMsg}"`
    const gitCommitRes = await promisify(gitCommit, 'git commit')
    if (gitCommitRes === false) return

    // 推送到 github
    // SSH 方式
    const gitRemote = `${inPath} && git remote rm origin && git remote add origin git@github.com:hmfy/note.git`
    // const gitRemote = `${inPath} && git remote add origin git@gitee.com:hmfy/note.git`
    const gitRemoteRes = await promisify(gitRemote, 'git remote')
    if (gitRemoteRes === false) return

    const gitPush = `${inPath} && git push -f origin master`
    await promisify(gitPush, 'git push')
}

;(async () => {
    // 生成配置文件
    await generateConfig()

    // 打包发布
    await commitRemote('all commit')
})()