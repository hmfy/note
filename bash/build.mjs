import {resolve} from "path";
import {generateConfig, getCmdParams, getDirName, promisify, rmDirFile} from './utils.mjs'

const __dirname = getDirName(import.meta.url)

function delDist () {
    console.log('正在删除dist文件夹')
    const distOut = resolve(__dirname, '../dist')
    const errInfo = rmDirFile(distOut)
    console.log(errInfo ? '删除失败，原因：' + errInfo : '删除完成')
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
    // 打包
    console.log('正在打包...')
    const cmdParams = getCmdParams('--base') || '/'
    const build = `npx vitepress build docs --base ${cmdParams}`
    await promisify(build, '打包')
})()