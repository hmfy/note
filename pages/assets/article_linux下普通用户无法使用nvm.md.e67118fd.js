import{_ as n,c as a,a as o,d as e,o as p,r as l}from"./app.b74c8818.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/linux下普通用户无法使用nvm.md"}'),c={name:"article/linux下普通用户无法使用nvm.md"},t=e(`<p>在 root 用户下安装的软件，普通用户一般是可以使用的</p><p>但是 nvm 安装后，默认会安装到 <code>/root/.nvm</code> 下</p><p>而在环境变量里定义的 nvm 路径是 <code>$HOME/.nvm</code></p><p>而 <code>$home</code> 这个变量在 <code>root</code> 用户下对应的是 <code>/root</code></p><p>而在其它用户下则不是，并且其它用户下不能没有 <code>root</code> 目录的访问权限</p><p>并且环境变量里也没有配置 <code>nvm</code></p><p>因此需要先将 <code>nvm</code> 移到一个所有用户都能访问的目录，或者给 <code>root</code> 目录加权限</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 将 .nvm 及其所有内容移到 src 内</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/.nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/src/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 分别在 root 用户和普通用户下执行</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/bash_rc</span></span>
<span class="line"></span></code></pre></div><p>并将 nvm 路径 改成 /usr/local/src/.nvm</p><p>普通用户需要配置 nvm 的环境变量，与 <code>root</code> 用户的一样配置即可</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 分别在两个用户下让环境变量生效</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/bash_rc</span></span>
<span class="line"></span></code></pre></div><p>现在切换到普通用户下可以使用 <code>nvm</code> 了</p>`,12);function r(i,d,_,C,m,y){const s=l("VisitLog");return p(),a("div",null,[t,o(s)])}const h=n(c,[["render",r]]);export{v as __pageData,h as default};
