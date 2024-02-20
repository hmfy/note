import {resolve, dirname, join} from "path";
import {readdirSync, writeFileSync} from "fs";
import { fileURLToPath } from 'url'
import {exec} from "child_process";
import fs from "fs";

export const getDirName = url => dirname(fileURLToPath(url))
const __dirname = getDirName(import.meta.url)

export function getCmdParams (paramsKey) {
    const index = process.argv.indexOf(paramsKey)
    return index === -1 ? '' : process.argv[index + 1]
}
function getSideBar (sidebarConfig) {
    // 写入 sidebar.js
    const sidebarJS = `export default ${sidebarConfig}`
    writeFileSync(resolve(__dirname, '../docs/.vitepress/sidebar.js'), sidebarJS)
}
export function rmDirFile (filePath) {
    let errInfo = null
    try {
        const dirs = fs.readdirSync(filePath)
        if (dirs.length === 0) {
            fs.rmdirSync(filePath)
        } else {
            for (let dirName of dirs) {
                const path = join(filePath, dirName)
                const stats = fs.statSync(path)
                if (stats.isFile()) {
                    fs.rmSync(path)
                } else if (stats.isDirectory()) {
                    rmDirFile(path)
                }
            }
            fs.rmdirSync(filePath)
        }
    } catch (err) {
        errInfo = err
    }
    return errInfo
}

export async function generateConfig () {
    console.log('正在写入配置文件...')

    // docs 路径
    const docs = resolve(__dirname, '../docs')
    const configList = resolve(__dirname, '../docs/.vitepress/list')
    const ignoreList = ['.vitepress', 'public', 'index.md']
    const dirList = readdirSync(docs)
    const articleList = dirList.filter(item => !ignoreList.includes(item))

    // 组装配置项
    const sidebarConfig = {}
    for (let item of articleList) {
        const article = readdirSync( resolve(docs, './' + item) )
        const newFilePath = resolve(configList, `./${item}.js`)
        const exportConfig = []
        for (let articleInfo of article) {
            if ( !(/.md$/.test(articleInfo))  ) continue // 不是以 .md 结尾的文件
            const articleName = articleInfo.replace('.md', '')
            if (articleName === 'index') {
                exportConfig.unshift({
                    text: '简介',
                    link: `/${item}/${articleName}`
                })
            } else {
                exportConfig.push({
                    text: articleName,
                    link: `/${item}/${articleName}`
                })
            }
        }
        sidebarConfig[item] = exportConfig
    }
    // 写入 sidebar
    getSideBar(JSON.stringify(sidebarConfig))

    console.log(`写入完成...`)
}
export function promisify (execVal, msg) {
    return new Promise((resolve) => {
        exec(execVal, (err, stdout, stderr) => {
            if (err) {
                console.error(msg + '失败...')
                console.error('失败原因：' + err)
                resolve(false)
            } else {
                console.log(msg + '完成...')
                resolve(true)
            }
        })
    })
}

