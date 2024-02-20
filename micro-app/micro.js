import {registerMicroApps, start} from 'qiankun';

const microMenu = [
    {
        // name 用于缓存，每个子应用 name 不能相同, 且name需和子应用打包的 library 值一致
        name: 'micro-app-name',
        // 子应用的可访问地址
        entry: 'http://localhost:8000',
        // 匹配规则，当路由以 activeRule 开头，加载对应子应用
        // 有 # 是因为使用的是 hash 模式
        // history 模式以 / 开头
        activeRule: '/#/micro-app'
    }]


// 生命周期处理
const lifeCycles = {
    beforeLoad: (app) => {
        return Promise.resolve(app)
    },
    beforeMount: (app) => {
        return Promise.resolve(app)
    },
    afterMount: (app) => {
        return Promise.resolve(app)
    }
}
// 子应用处理
const normalizeMicroApp = (apps = []) => {
    return apps.map((app) => ({
        container: '#sub-container',
        ...app
    }))
}
const register = () => registerMicroApps(normalizeMicroApp(microMenu), lifeCycles)
export default {
    register,
    start
}
