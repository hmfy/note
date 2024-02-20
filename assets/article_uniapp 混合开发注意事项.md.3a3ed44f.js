import{_ as e,c as s,o as a,b as p}from"./app.db63b7d7.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"对 uniApp 混合开发的理解","slug":"对-uniapp-混合开发的理解","link":"#对-uniapp-混合开发的理解","children":[]},{"level":2,"title":"发布更新及页面跳转","slug":"发布更新及页面跳转","link":"#发布更新及页面跳转","children":[]},{"level":2,"title":"屏幕旋转","slug":"屏幕旋转","link":"#屏幕旋转","children":[]},{"level":2,"title":"真机调试","slug":"真机调试","link":"#真机调试","children":[]}],"relativePath":"article/uniapp 混合开发注意事项.md"}'),o={name:"article/uniapp 混合开发注意事项.md"},n=p(`<h2 id="对-uniapp-混合开发的理解" tabindex="-1">对 uniApp 混合开发的理解 <a class="header-anchor" href="#对-uniapp-混合开发的理解" aria-hidden="true">#</a></h2><p>开发方式类似于 <code>vue-cli</code>，只需要注意不同环境下的兼容性即可</p><p>依靠 <code>uniApp</code> 的生态体系，通过 <code>hBuilderX</code> 打包成 <code>apk</code></p><p>每个页面默认都会打包到 <code>apk</code> 内，并作为安卓页面，可以使用安卓的相关功能和插件</p><p>依靠 <code>web-view</code>，可以嵌入 <code>h5</code> 页面，而 <code>uniApp</code> 本身就可以打包成 <code>h5</code> 页面部署</p><p>因此工程中的每个页面在有需要的时候, 都可以采用 <code>url</code> 形式嵌套进来，类似于 <code>iframe</code></p><p>因此我们可以将常规的，不需要安卓功能的页面按 <code>h5</code> 的形式开发</p><p>只有在需要使用安卓相关的功能时，才做针对安卓页面的兼容，例如屏幕旋转等</p><p>这样就可以根据需要，在一个 <code>app</code> 内即使用安卓的相关功能，又保持大部分功能无需重新安装 <code>apk</code> 就能快速更新的能力</p><p>需要注意的是，一个页面在跳转进来以后，就已经定性为 <code>h5</code> 页面或是安卓页面，因此在开发过程中需注意兼容性</p><p>例如 <code>h5</code> 页面无法调用安卓相关功能，而安卓页面无法使用 <code>DOM</code>, <code>DOM</code> 相关 <code>api</code></p><h2 id="发布更新及页面跳转" tabindex="-1">发布更新及页面跳转 <a class="header-anchor" href="#发布更新及页面跳转" aria-hidden="true">#</a></h2><p>如果修改的页面属于 <code>h5</code> 页面，那么只需要打包成 <code>h5</code> 然后部署到服务器即可，<code>app</code> 不用重新安装，否则需要重新安装 <code>apk</code></p><p>因此一般的做法是在入口嵌套 <code>web-view</code>，那么所有的跳转都会是网页</p><p>如果需要跳转到安卓页面，可以通过 <a href="https://gitee.com/dcloud/uni-app/raw/dev/dist/uni.webview.1.5.4.js" target="_blank" rel="noreferrer">uni.webview.js</a></p><p>例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/common/uni.webview.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webView</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">naviagteTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/pages/page-android.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>从安卓页面跳回 <code>h5</code> 则不需要 <code>uni.webView</code> 只需要常规跳转即可（注意 <code>uni.webView.js</code> 包含 <code>BOM</code> 的 <code>api</code>）</p><h2 id="屏幕旋转" tabindex="-1">屏幕旋转 <a class="header-anchor" href="#屏幕旋转" aria-hidden="true">#</a></h2><p>在 <code>manifest.json</code> 中的 <code>app-plus</code> 增加配置：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">screenOrientation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> : </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">portrait-primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">landscape-primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">portrait-secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">landscape-secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>在需要旋转屏幕的页面调用 <code>api</code> 即可</p><p>需要注意 <code>h5</code> 页面无法进行屏幕旋转，安卓页面才可以</p><p>如果下一个页面需要屏幕旋转，而当前页面为安卓页面，常规方式跳转即可</p><p>而如果当前页面为 <code>h5</code> ，则需要调用 <code>uni.webView.xxx</code> 的形式跳转</p><p>注意屏幕旋转在当前页面 <code>hide</code> 以后一定要切换回来，<code>app</code> 并不会自动切换</p><h2 id="真机调试" tabindex="-1">真机调试 <a class="header-anchor" href="#真机调试" aria-hidden="true">#</a></h2><p>手机开启 <code>usb</code> 调试后，数据库连接电脑并在 <code>hBuilderX</code> 内选择真机调试再选择手机</p><p>也可以在 <code>pc</code> 安装模拟器，安装模拟器后需要对模拟器进行网络配置，<a href="https://hmfy.github.io/note/article/uniapp%E4%BD%BF%E7%94%A8%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95.html" target="_blank" rel="noreferrer">这里是 MuMu 模拟器真机调试的注意事项</a></p><p>注意真机调试时，需要从安卓页面开始进入，因为真机调试默认当前页面是安卓页面</p><p>真机调试可以识别出 <code>h5</code> ，但前提是需要从安卓页进入</p>`,31),c=[n];function l(t,d,r,i,D,u){return a(),s("div",null,c)}const h=e(o,[["render",l]]);export{y as __pageData,h as default};
