import {resolve} from "path";
import {generateConfig, getCmdParams, getDirName, promisify, rmDirFile} from './utils.mjs'

const __dirname = getDirName(import.meta.url)

function delDist () {
    // const distOut = resolve(__dirname, '../docs/.vitepress')
    // const delDist = `cd ${distOut} && rmdir dist /s /q`
    // await promisify(delDist, '删除dist文件夹')

    console.log('正在删除dist文件夹')
    const distOut = resolve(__dirname, '../docs/.vitepress/dist')
    const errInfo = rmDirFile(distOut)
    console.log(errInfo ? '删除失败，原因：' + errInfo : '删除完成')
}
async function packProcess (needCommit) {
    console.log('正在打包...')

    // dist 路径
    const distPath = resolve(__dirname, '../docs/.vitepress/dist')
    const inPath = 'cd ' + distPath

    // 打包
    const cmdParams = getCmdParams('--base') || '/'

    const build = `npx vitepress build docs --base ${cmdParams}`
    const buildRes = await promisify(build, '打包')

    if (buildRes === false) return

    // 是否需要提交到远程
    if (needCommit === false) return

    // git Init
    const gitInit = `${inPath} && git init`
    const gitInitRes = await promisify(gitInit, 'git初始化')
    if (gitInitRes === false) return

    const gitAdd = `${inPath} && git add -A`
    const gitAddRes = await promisify(gitAdd, 'git add')
    if (gitAddRes === false) return

    const gitCommit = `${inPath} && git commit -m "${needCommit}"`
    const gitCommitRes = await promisify(gitCommit, 'git commit')
    if (gitCommitRes === false) return

    // 推送到 github
    // SSH 方式
    const gitRemote = `${inPath} && git remote add origin git@github.com:hmfy/note.git`
    // const gitRemote = `${inPath} && git remote add origin git@gitee.com:hmfy/note.git`
    const gitRemoteRes = await promisify(gitRemote, 'git remote')
    if (gitRemoteRes === false) return

    const gitPush = `${inPath} && git push -f origin master`
    await promisify(gitPush, 'git push')
}

;(async () => {
    // 生成配置文件
    await generateConfig()

    try {
        // 删除dist
        delDist()
    } catch (err) {
        console.log(err)
    }

    // 打包发布
    await packProcess('待调整为部分提交')
})()