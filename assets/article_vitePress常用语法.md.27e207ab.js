import{_ as s,c as a,o as n,b as l}from"./app.db63b7d7.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Link","slug":"link","link":"#link","children":[]},{"level":2,"title":"Table","slug":"table","link":"#table","children":[]},{"level":2,"title":"Emoji","slug":"emoji","link":"#emoji","children":[]},{"level":2,"title":"Custom Containers","slug":"custom-containers","link":"#custom-containers","children":[]},{"level":2,"title":"Syntax Highlighting in Code Blocks","slug":"syntax-highlighting-in-code-blocks","link":"#syntax-highlighting-in-code-blocks","children":[]},{"level":2,"title":"Code Groups","slug":"code-groups","link":"#code-groups","children":[]}],"relativePath":"article/vitePress常用语法.md"}'),e={name:"article/vitePress常用语法.md"},t=l(`<h2 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h2><p><a href="/node/index.html">站内链接跳转</a></p><h2 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h2><table><thead><tr><th>column1</th><th style="text-align:center;">column2</th><th style="text-align:center;">column3</th><th style="text-align:right;">column4</th></tr></thead><tbody><tr><td>row 1</td><td style="text-align:center;">row 1</td><td style="text-align:center;">row 1</td><td style="text-align:right;">row 1</td></tr><tr><td>row 2</td><td style="text-align:center;">row 2</td><td style="text-align:center;">row 2</td><td style="text-align:right;">row 2</td></tr></tbody></table><h2 id="emoji" tabindex="-1">Emoji <a class="header-anchor" href="#emoji" aria-hidden="true">#</a></h2><p>🎉 💯 😄</p><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">more emoji</a></p><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">这里是信息框的标题</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>这里是信息框的标题</summary><p>This is a details block.</p></details><div class="vp-raw"><p>this an element</p><div style="color:hotpink;font-weight:bold;">这里是是一段 html 片段</div></div><h2 id="syntax-highlighting-in-code-blocks" tabindex="-1">Syntax Highlighting in Code Blocks <a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">test</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">test</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="code-groups" tabindex="-1">Code Groups <a class="header-anchor" href="#code-groups" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--0kYZ" id="tab-STaSoGo" checked="checked"><label for="tab-STaSoGo">index.html</label><input type="radio" name="group--0kYZ" id="tab-3dQNEBf"><label for="tab-3dQNEBf">config.js</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./config.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div>`,17),o=[t];function p(c,r,i,d,y,h){return n(),a("div",null,o)}const b=s(e,[["render",p]]);export{F as __pageData,b as default};
