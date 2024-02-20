import{_ as e,c as l,o as i,b as t}from"./app.db63b7d7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 介绍下重绘和重排（repaint & reflow），以及如何进行优化","slug":"_1-介绍下重绘和重排-repaint-reflow-以及如何进行优化","link":"#_1-介绍下重绘和重排-repaint-reflow-以及如何进行优化","children":[]},{"level":2,"title":"2. 说说浏览器和 Node 事件循环的区别","slug":"_2-说说浏览器和-node-事件循环的区别","link":"#_2-说说浏览器和-node-事件循环的区别","children":[]},{"level":2,"title":"3. 浏览器缓存读取规则","slug":"_3-浏览器缓存读取规则","link":"#_3-浏览器缓存读取规则","children":[]},{"level":2,"title":"4. 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？","slug":"_4-为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片","link":"#_4-为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片","children":[]},{"level":2,"title":"5. 请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache 中？","slug":"_5-请求时浏览器缓存-from-memory-cache-和-from-disk-cache-的依据是什么-哪些数据什么时候存放在-memory-cache-和-disk-cache-中","link":"#_5-请求时浏览器缓存-from-memory-cache-和-from-disk-cache-的依据是什么-哪些数据什么时候存放在-memory-cache-和-disk-cache-中","children":[]},{"level":2,"title":"6. 什么是浏览器同源策略？","slug":"_6-什么是浏览器同源策略","link":"#_6-什么是浏览器同源策略","children":[]},{"level":2,"title":"7. DOM Tree 是如何构建的？","slug":"_7-dom-tree-是如何构建的","link":"#_7-dom-tree-是如何构建的","children":[]},{"level":2,"title":"8. 浏览器如何解析 css 选择器？","slug":"_8-浏览器如何解析-css-选择器","link":"#_8-浏览器如何解析-css-选择器","children":[]},{"level":2,"title":"9. 浏览器是如何渲染 UI 的？","slug":"_9-浏览器是如何渲染-ui-的","link":"#_9-浏览器是如何渲染-ui-的","children":[]},{"level":2,"title":"10. 浏览器的主要组成部分是什么？","slug":"_10-浏览器的主要组成部分是什么","link":"#_10-浏览器的主要组成部分是什么","children":[]},{"level":2,"title":"11. 常见的浏览器内核有哪些?","slug":"_11-常见的浏览器内核有哪些","link":"#_11-常见的浏览器内核有哪些","children":[]},{"level":2,"title":"12. 怎样选择合适的缓存策略","slug":"_12-怎样选择合适的缓存策略","link":"#_12-怎样选择合适的缓存策略","children":[]},{"level":2,"title":"13. 为什么用多个域名存储网站资源更有效？","slug":"_13-为什么用多个域名存储网站资源更有效","link":"#_13-为什么用多个域名存储网站资源更有效","children":[]},{"level":2,"title":"14. 前端需要注意哪些 SEO","slug":"_14-前端需要注意哪些-seo","link":"#_14-前端需要注意哪些-seo","children":[]},{"level":2,"title":"15. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢","slug":"_15-浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢","link":"#_15-浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢","children":[]},{"level":2,"title":"16. 如何兼容低版本浏览器","slug":"_16-如何兼容低版本浏览器","link":"#_16-如何兼容低版本浏览器","children":[]},{"level":2,"title":"17. 浏览器怪异模式和普通模式的区别","slug":"_17-浏览器怪异模式和普通模式的区别","link":"#_17-浏览器怪异模式和普通模式的区别","children":[]},{"level":2,"title":"18. 各个浏览器兼容前缀？","slug":"_18-各个浏览器兼容前缀","link":"#_18-各个浏览器兼容前缀","children":[]},{"level":2,"title":"19. 跨标签页的通讯方式有哪些（哔哩哔哩）","slug":"_19-跨标签页的通讯方式有哪些-哔哩哔哩","link":"#_19-跨标签页的通讯方式有哪些-哔哩哔哩","children":[]}],"relativePath":"interview/浏览器.md"}'),a={name:"interview/浏览器.md"},r=t('<h2 id="_1-介绍下重绘和重排-repaint-reflow-以及如何进行优化" tabindex="-1">1. 介绍下重绘和重排（repaint &amp; reflow），以及如何进行优化 <a class="header-anchor" href="#_1-介绍下重绘和重排-repaint-reflow-以及如何进行优化" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>整个页面可以看做是一幅画，这幅画是由浏览器绘制出来的，浏览器绘制这幅画的过程称之为渲染。</p><p>渲染是一件复杂的工作，它大致分为以下几个过程：</p><ol><li>解析 HTML，生成 DOM 树，解析 CSS，生成样式规则树</li><li>将 DOM 树和样式规则树结合，生成渲染树(Render Tree)</li><li>根据生成的渲染树，确定元素的布局信息（元素的尺寸、位置），<strong>这一步称之为 reflow，译作重排或回流</strong></li><li>根据渲染树和布局信息，生成元素的像素信息（元素横纵的像素点，左上角的偏移量、每个像素的颜色等）。<strong>这一步称之为 repaint，译作重绘</strong></li><li>将像素信息提交到 GPU 完成屏幕绘制</li></ol><p>当元素的布局信息发生变化时，会导致重排。</p><p>当元素的像素信息发生变化时，会导致重绘。</p><p>重排一定会导致重绘，因此布局信息的变化一定会导致像素信息的变化。</p><p>在实际开发中，获取和设置元素尺寸、位置均会导致重排和重绘，而仅设置元素的外观（比如背景颜色）则只会导致重绘，不会导致重排。</p><p>重排是一项繁琐的工作，会降低效率，因此在开发中，应该尽量避免直接获取和设置元素的尺寸、位置，尽量使用变量来保存元素的布局信息。</p></blockquote><h2 id="_2-说说浏览器和-node-事件循环的区别" tabindex="-1">2. 说说浏览器和 Node 事件循环的区别 <a class="header-anchor" href="#_2-说说浏览器和-node-事件循环的区别" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>浏览器的事件循环比较简单，它把任务分为宏任务和微任务，当执行栈清空后，会优先调取微任务运行，当微任务队列清空后，才会调取宏任务运行。</p><p>而 node 的事件循环机制比较复杂，它将整个任务调度分为 6 个阶段，当执行栈清空后，将依次循环 6 个阶段：</p><ol><li>timers</li><li>pending callbacks</li><li>idle, prepare</li><li>poll</li><li>check</li><li>close callback</li></ol><p>在进入任何一个阶段时，都将检查微队列中是否有任务需要执行，只有微队列清空后才能顺利进入下一个阶段。</p></blockquote><h2 id="_3-浏览器缓存读取规则" tabindex="-1">3. 浏览器缓存读取规则 <a class="header-anchor" href="#_3-浏览器缓存读取规则" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>当需要获取一个资源时，浏览器会先检查缓存中是否存在，若命中缓存，则不会发送请求。浏览器按照一定的顺序检查缓存，具体顺序是：</p><ol><li><p>service worker</p><p>在 service worker 中，开发者可以根据需要将远程获取的资源缓存到 cache storage 中，之后对该资源的请求会直接从缓存中获取。</p><p>这部分缓存需要前端开发者手动完成的</p></li><li><p>memory cache</p><p>浏览器会自动将请求过的资源自动加入到 memory cache，这主要是为了解决一个页面中有多次相同的请求，比如页面中链接了多张相同的图片。</p><p>memory cache 是浏览器自动完成的，它保存在内存中。</p></li><li><p>disk cache</p><p>当浏览器得到的响应头中包含<code>cache-control</code>等缓存指令时，会按照指令的要求设置 disk cache。请求的资源会被保存在磁盘中，在指定的期限内有效。</p><p>disk cache 是长期的，即使关闭浏览器也不会消失。</p></li></ol></blockquote><h2 id="_4-为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片" tabindex="-1">4. 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？ <a class="header-anchor" href="#_4-为什么通常在发送数据埋点请求的时候使用的是-1x1-像素的透明-gif-图片" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>首先，在很多场景中，处理埋点的服务器很有可能是第三方服务器，比如百度的站点统计埋点，百度就是一个第三方服务器，这就不可避免的带来跨域问题。</p><p>其次，埋点服务方需要提供一种特别利于安装的埋点置入代码，使用传统的 ajax 会使代码变得臃肿。</p><p>同时，埋点请求绝大部分都是 get 请求，又无须得到服务器的响应结果。</p><p>基于以上的特点，使用 img 元素请求服务器就变得理所当然了，img 元素发出的请求天生支持跨域，书写的代码简单，只需要创建一个 img 元素，然后设置 src 为埋点请求地址即可。</p><p>其实请求一旦发出，埋点就成功了，无须得到服务器的响应结果。但如果服务器不给予任何响应的话，可能会导致浏览器端控制台报错，尽管这个报错并不影响实质的功能。为了避免这种情况，服务器于是响应一个最小体积的图片即可，而 1x1 像素的透明 gif 图片是体积最小的图片，自然就选用了它作为响应结果。</p></blockquote><h2 id="_5-请求时浏览器缓存-from-memory-cache-和-from-disk-cache-的依据是什么-哪些数据什么时候存放在-memory-cache-和-disk-cache-中" tabindex="-1">5. 请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache 中？ <a class="header-anchor" href="#_5-请求时浏览器缓存-from-memory-cache-和-from-disk-cache-的依据是什么-哪些数据什么时候存放在-memory-cache-和-disk-cache-中" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>memory cache 是浏览器自动完成的，它不关心 http 语义，但会遵守<code>cache-control: no-store</code>指令。浏览器在请求资源后，会自动将资源加入 memory cache，在后续的请求中，若请求的 url 地址和之前缓存的对应地址相同，则直接使用 memory cache。memory cache 只缓存 get 请求，并且缓存的内容在内存中，因此会很快的清理。</p><p>disk cache 遵守 http 缓存语义，它会按照服务器响应头中指定的缓存要求进行缓存，由于它存在于磁盘中，因此，即便浏览器关闭后缓存内容也不会消失。它的保存时间由服务器的<code>cache-control</code>字段指定，当缓存失效后，会重新发送请求到服务器，进入协商缓存的流程。</p></blockquote><h2 id="_6-什么是浏览器同源策略" tabindex="-1">6. 什么是浏览器同源策略？ <a class="header-anchor" href="#_6-什么是浏览器同源策略" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>所谓同源，是指协议、主机、端口均相同的地址。</p><p>同源策略是指，当前页面和页面运行过程中发出的请求必须是同源的，即必须协议、主机、端口均相同，否则即被视为跨域请求。</p><p>浏览器中的大部分内容都是受同源策略限制的，但是以下三个标签可以不受限制：</p><ul><li>img</li><li>script</li><li>link</li></ul></blockquote><h2 id="_7-dom-tree-是如何构建的" tabindex="-1">7. DOM Tree 是如何构建的？ <a class="header-anchor" href="#_7-dom-tree-是如何构建的" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ol><li>转码: 浏览器将接收到的二进制数据按照指定编码格式转化为 HTML 字符串</li><li>生成 Tokens: 之后开始 parser，浏览器会将 HTML 字符串解析成 Tokens</li><li>构建 Nodes: 对 Node 添加特定的属性，通过指针确定 Node 的父、子、兄弟关系和所属 treeScope</li><li>生成 DOM Tree: 通过 node 包含的指针确定的关系构建出 DOM Tree</li></ol></blockquote><h2 id="_8-浏览器如何解析-css-选择器" tabindex="-1">8. 浏览器如何解析 css 选择器？ <a class="header-anchor" href="#_8-浏览器如何解析-css-选择器" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>浏览器读取到选择器时，会从 DOM 树中找到匹配的对应节点，然后将样式附着到对应的 DOM 元素上。当选择器出现多个层级时，浏览器会使用「从右到左」的顺序进行匹配，对应到 DOM 树的遍历上，是从叶子到根的方向进行筛选，这样可以提升匹配效率。</p></blockquote><h2 id="_9-浏览器是如何渲染-ui-的" tabindex="-1">9. 浏览器是如何渲染 UI 的？ <a class="header-anchor" href="#_9-浏览器是如何渲染-ui-的" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ol><li>浏览器解析 HTML，形成 DOM Tree</li><li>解析 HTML 过程中遇到 CSS，则进行 CSS 解析，生成 Style Rules</li><li>将 DOM Tree 与 Style Rules 合成为 Render Tree</li><li>进入布局（Layout）阶段，为每个节点分配一个应出现在屏幕上的确切坐标</li><li>随后调用 GPU 进行绘制（Paint），遍历 Render Tree 的节点，并将元素呈现出来</li></ol></blockquote><h2 id="_10-浏览器的主要组成部分是什么" tabindex="-1">10. 浏览器的主要组成部分是什么？ <a class="header-anchor" href="#_10-浏览器的主要组成部分是什么" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ol><li><p>用户界面（user interface）</p><p>用于呈现浏览器窗口部件，比如地址栏、前进后退按钮、书签、顶部菜单等</p></li><li><p>浏览器引擎（browser engine）</p><p>用户在用户界面和渲染引擎中传递指令</p></li><li><p>渲染引擎（rendering engine）</p><p>负责解析 HTML、CSS，并将解析的内容显示到屏幕上。我们平时说的浏览器内核就是指这部分。</p></li><li><p>网络（networking）</p><p>用户网络调用，比如发送 http 请求</p></li><li><p>用户界面后端（UI backend）</p><p>用于绘制基本的窗口小部件，比如下拉列表、文本框、按钮等，向上提供公开的接口，向下调用操作系统的用户界面。</p></li><li><p>JS 解释器（JavaScript interpreter）</p><p>解释执行 JS 代码。我们平时说的 JS 引擎就是指这部分。</p></li><li><p>数据存储（data storage）</p><p>用户保存数据到磁盘中。比如 cookie、localstorage 等都是使用的这部分功能。</p></li></ol></blockquote><h2 id="_11-常见的浏览器内核有哪些" tabindex="-1">11. 常见的浏览器内核有哪些? <a class="header-anchor" href="#_11-常见的浏览器内核有哪些" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><table><thead><tr><th>浏览器</th><th>内核（渲染引擎）</th><th>JavaScript 引擎</th></tr></thead><tbody><tr><td>Chrome</td><td>Blink（新） Webkit（旧）</td><td>V8</td></tr><tr><td>FireFox</td><td>Gecko</td><td>SpiderMonkey</td></tr><tr><td>Safari</td><td>Webkit</td><td>JavaScriptCore</td></tr><tr><td>Edge</td><td>EdgeHTML</td><td>Chakra</td></tr><tr><td>IE</td><td>Trident</td><td>Chakra</td></tr><tr><td>PhantomJS</td><td>Webkit</td><td>JavaScriptCore</td></tr><tr><td>Node.js</td><td>无</td><td>V8</td></tr></tbody></table></blockquote><h2 id="_12-怎样选择合适的缓存策略" tabindex="-1">12. 怎样选择合适的缓存策略 <a class="header-anchor" href="#_12-怎样选择合适的缓存策略" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ol><li><p>对于一次性的资源，比如验证码图片，不进行缓存。</p><p>设置响应头<code>cache-control: no-store</code></p></li><li><p>对于频繁变动的资源，比如某些数据接口，使用协商缓存。</p><p>设置响应头<code>cache-control: no-cache</code>，同时配合<code>ETag</code>标记，让浏览器缓存资源，但每次都会发送请求询问资源是否更新。</p></li><li><p>对于静态资源，比如 JS、CSS、图片等文件，使用强制缓存。</p><p>设置响应头<code>cache-control: max-age=有效时长</code>，设置一个很长的过期时间，比如十年，然后通过文件 hash 的处理更新</p></li></ol></blockquote><h2 id="_13-为什么用多个域名存储网站资源更有效" tabindex="-1">13. 为什么用多个域名存储网站资源更有效？ <a class="header-anchor" href="#_13-为什么用多个域名存储网站资源更有效" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>主要原因是浏览器对同一个域下的 TCP 连接数是有限制的，这样就导致某个网页如果外部资源多了，比如图片很多的网页，在解析页面时，由于 TCP 连接数受限，就无法同时发起多个下载连接，无法充分利用带宽资源。因此，可以把静态资源放到多个域名下，这样就绕开了连接数的限制，做到了并发下载。</p></blockquote><h2 id="_14-前端需要注意哪些-seo" tabindex="-1">14. 前端需要注意哪些 SEO <a class="header-anchor" href="#_14-前端需要注意哪些-seo" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ol><li><p>语义化</p><p>多使用语义化标签，让正确的标签对应正确的内容。</p></li><li><p>重要内容前置</p><p>可以利用弹性盒布局中的 order 属性，将核心、重要的内容尽量放到文档的前面。</p></li><li><p>服务端渲染</p><p>由于目前的搜索引擎对客户端渲染并不友好，因此使用服务端渲染仍然是 SEO 的重要手段。</p></li><li><p>TDK</p><p>利用 title、meta 元素，设置网页的标题、描述、关键字</p></li></ol></blockquote><h2 id="_15-浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢" tabindex="-1">15. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢 <a class="header-anchor" href="#_15-浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。 离线的情况下，浏览器就直接使用离线存储的资源。</p></blockquote><h2 id="_16-如何兼容低版本浏览器" tabindex="-1">16. 如何兼容低版本浏览器 <a class="header-anchor" href="#_16-如何兼容低版本浏览器" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>分为三个部分来说</p><p>HTML</p><p>低版本浏览器无法识别新增的HTML5元素，如果要兼容这部分浏览器，需要做以下处理：</p><ol><li>对于非可替换元素，比如article、section、header、footer等，这种元素虽然低版本浏览器不识别，但它仍然会把它们渲染出来，只是没有浏览器的默认样式。因此，我们只需要在css中稍作处理即可，比如给它们都加上<code>display:block</code>。</li><li>对于可替换元素，比如video、audio等，这种元素会涉及低版本浏览器没有功能，因此需要使用条件注释，在低版本浏览器中使用兼容的做法</li></ol><p>CSS</p><p>对于CSS代码，低版本浏览器可能无法识别某些CSS属性，比如圆角边框、背景渐变、过渡动画等。但由于浏览器对于不能识别样式的处理方式是「直接丢弃、不影响后续渲染」，所以，我们可以保持这样的原则：尽量让其兼容，实在不行，至少不影响浏览。按照这样的原则，我们可以对CSS进行以下处理：</p><ol><li>使用厂商前缀，尽量让其兼容。</li><li>对于某些样式使用JS替代，比如渐变、动画等</li></ol><p>JavaScript</p><p>对于JS代码，低版本浏览器无法识别H5的API，因此缺少了一些新功能，比如localstorage、web worker等。不仅如此，低版本浏览器还无法识别ES6的新语法，比如let、const、async、await等。因此，要处理JS的兼容性问题，只能具体情况具体分析，通常，我们会使用下面两种手段来完成兼容：</p><ol><li>模拟API。就是自己写一个功能完全和官方相同的API，来弥补低版本浏览器API没有的情况。比较典型的就是ES5中有大量的数组API，这些API都是可以轻松模拟的。</li><li>编译。某些新语法是无法模拟的，只能通过制作工具对源代码进行编译，将其新语法全部去掉，如果新语法涉及特殊功能，则转换为使用API完成，比较典型的例子就是async和await会被转换为generator的函数调用。</li></ol><p>在前端工程化的今天，上面的几乎所有兼容性问题都可以依靠工程化完成，比如，css可以依托postcss平台完成兼容性处理，JS可以依托babel平台完成兼容性处理。</p></blockquote><h2 id="_17-浏览器怪异模式和普通模式的区别" tabindex="-1">17. 浏览器怪异模式和普通模式的区别 <a class="header-anchor" href="#_17-浏览器怪异模式和普通模式的区别" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><p>标准模式：浏览器按W3C标准解析执行代码</p><p>怪异模式：使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以称之为怪异模式。比如IE中盒模型的宽高使用的是边框盒。</p></blockquote><h2 id="_18-各个浏览器兼容前缀" tabindex="-1">18. 各个浏览器兼容前缀？ <a class="header-anchor" href="#_18-各个浏览器兼容前缀" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><table><thead><tr><th>前缀</th><th>浏览器</th></tr></thead><tbody><tr><td>-moz-</td><td>firefox</td></tr><tr><td>-webkit-</td><td>chrome、safari</td></tr><tr><td>-o-</td><td>opera</td></tr><tr><td>-ms-</td><td>IE</td></tr></tbody></table></blockquote><h2 id="_19-跨标签页的通讯方式有哪些-哔哩哔哩" tabindex="-1">19. 跨标签页的通讯方式有哪些（哔哩哔哩） <a class="header-anchor" href="#_19-跨标签页的通讯方式有哪些-哔哩哔哩" aria-hidden="true">#</a></h2><blockquote><p>参考答案：</p><ul><li>BroadCast Channel</li><li>Service Worker</li><li>LocalStorage window.onstorage 监听</li><li>Shared Worker 定时器轮询(setInterval)</li><li>IndexedDB 定时器轮询(setInterval)</li><li>cookie 定时器轮询(setInterval)</li><li>window.open window.postMessage</li><li>Websocket</li></ul></blockquote>',38),o=[r];function d(c,p,h,n,s,_){return i(),l("div",null,o)}const m=e(a,[["render",d]]);export{u as __pageData,m as default};
