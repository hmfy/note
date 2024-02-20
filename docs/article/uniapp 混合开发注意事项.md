## 对 uniApp 混合开发的理解

开发方式类似于 `vue-cli`，只需要注意不同环境下的兼容性即可

依靠 `uniApp` 的生态体系，通过 `hBuilderX` 打包成 `apk` 

每个页面默认都会打包到 `apk` 内，并作为安卓页面，可以使用安卓的相关功能和插件

依靠 `web-view`，可以嵌入 `h5` 页面，而 `uniApp` 本身就可以打包成 `h5` 页面部署 

因此工程中的每个页面在有需要的时候, 都可以采用 `url` 形式嵌套进来，类似于 `iframe`

因此我们可以将常规的，不需要安卓功能的页面按 `h5` 的形式开发

只有在需要使用安卓相关的功能时，才做针对安卓页面的兼容，例如屏幕旋转等

这样就可以根据需要，在一个 `app` 内即使用安卓的相关功能，又保持大部分功能无需重新安装 `apk` 就能快速更新的能力

需要注意的是，一个页面在跳转进来以后，就已经定性为 `h5` 页面或是安卓页面，因此在开发过程中需注意兼容性

例如 `h5` 页面无法调用安卓相关功能，而安卓页面无法使用 `DOM`, `DOM` 相关 `api`

## 发布更新及页面跳转
如果修改的页面属于 `h5` 页面，那么只需要打包成 `h5` 然后部署到服务器即可，`app` 不用重新安装，否则需要重新安装 `apk`

因此一般的做法是在入口嵌套 `web-view`，那么所有的跳转都会是网页

如果需要跳转到安卓页面，可以通过 [uni.webview.js](https://gitee.com/dcloud/uni-app/raw/dev/dist/uni.webview.1.5.4.js)

例如：
```js
import '@/common/uni.webview.js'

uni.webView.naviagteTo({
    url: '/pages/page-android.vue'
})
```

从安卓页面跳回 `h5` 则不需要 `uni.webView` 只需要常规跳转即可（注意 `uni.webView.js` 包含 `BOM` 的 `api`）

## 屏幕旋转

在 `manifest.json` 中的 `app-plus` 增加配置：
```json
"screenOrientation" : [
    "portrait-primary",
    "landscape-primary",
    "portrait-secondary",
    "landscape-secondary",
    "default"
],
```

在需要旋转屏幕的页面调用 `api` 即可

需要注意 `h5` 页面无法进行屏幕旋转，安卓页面才可以

如果下一个页面需要屏幕旋转，而当前页面为安卓页面，常规方式跳转即可

而如果当前页面为 `h5` ，则需要调用 `uni.webView.xxx` 的形式跳转

注意屏幕旋转在当前页面 `hide` 以后一定要切换回来，`app` 并不会自动切换

## 真机调试
手机开启 `usb` 调试后，数据库连接电脑并在 `hBuilderX` 内选择真机调试再选择手机

也可以在 `pc` 安装模拟器，安装模拟器后需要对模拟器进行网络配置，[这里是 MuMu 模拟器真机调试的注意事项](https://hmfy.github.io/note/article/uniapp%E4%BD%BF%E7%94%A8%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95.html)

注意真机调试时，需要从安卓页面开始进入，因为真机调试默认当前页面是安卓页面

真机调试可以识别出 `h5` ，但前提是需要从安卓页进入


