import{_ as s,c as n,o as a,b as l}from"./app.db63b7d7.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[]},{"level":2,"title":"test","slug":"test","link":"#test","children":[]},{"level":2,"title":"name","slug":"name","link":"#name","children":[]},{"level":2,"title":"priority","slug":"priority","link":"#priority","children":[]}],"relativePath":"engineering/webpack的cacheGroups.md"}'),p={name:"engineering/webpack的cacheGroups.md"},o=l(`<h2 id="默认配置" tabindex="-1">默认配置 <a class="header-anchor" href="#默认配置" aria-hidden="true">#</a></h2><p>当不做任何处理时，webpack 有默认值，长这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minRemainingSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">maxAsyncRequests</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">maxInitialRequests</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">enforceSizeThreshold</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">cacheGroups</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">defaultVendors</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">reuseExistingChunk</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            reuseExistingChunk</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-hidden="true">#</a></h2><p>想要将 <code>node_modules</code> 中的某些包拆开并行请求，可以这样写：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 同步和异步代码都处理</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 默认值是2000</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">cacheGroups</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">lodash</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 这里的正则一定要带上前后的斜杠，</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tools_lodash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 给包取个名字</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">vendor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">](</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">element-ui</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">)[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 多个包的匹配</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tools_vendors</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">utils</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// test 可以是函数，这里通过 module 的 path 将自己定义的工具方法单独打包</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">resource</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sep</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sep</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">utils.js</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tools_utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h2><p>默认配置包含对 <code>node_modules</code> 的处理，即 <code>test: /[\\\\/]node_modules[\\\\/]/</code></p><p>因此可以不处理，默认会打包</p><p>如果需要自定义打包后的包名，则覆盖默认配置即可，如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">node_modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tools_common</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>打包出来文件名 tools_common.[hash].js</p></blockquote><p>也可以不设置 <code>name</code>，直接修改当前配置项的 <code>key</code>, 即修改 <code>node_modules</code>，如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tools_common</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// name: false  默认值为 false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>打包出来的文件名 tools_common~[chunkName].[hash].js</p></blockquote><p>为多个配置项配置同一个 <code>name</code> ，会将这些配置项的 <code>chunk</code> 合并为一个 <code>chunk</code></p><div class="danger custom-block"><p class="custom-block-title">强烈提醒：</p><p><strong>不要将 name 设置为与 entry key 一致</strong></p><p><a href="https://www.webpackjs.com/plugins/split-chunks-plugin/#splitchunksname" target="_blank" rel="noreferrer">如果 splitChunks.name 与 entry point 名称匹配，entry point 将被删除</a></p><p><a href="https://github.com/webpack-contrib/mini-css-extract-plugin/issues/341" target="_blank" rel="noreferrer">已知在 webpack4 中会导致 MiniCssExtractPlugin 插件报错</a></p></div><h2 id="priority" tabindex="-1">priority <a class="header-anchor" href="#priority" aria-hidden="true">#</a></h2><p><em><strong>为什么后面重新定义的针对 <code>node_modules</code> 的处理可以覆盖默认的呢？</strong></em></p><p>因为 <code>priority</code> 这个属性，<code>priority</code> 表示权重</p><p><code>webpack</code> 默认配置的 <code>priority</code> 值都是负数(-20)</p><p>而自己新定义的配置的 <code>priority</code> 值默认是 0</p>`,22),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
