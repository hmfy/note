## 子应用接入形式（entry）

#### 使用绝对地址，例如可访问的 link
需要处理跨域问题

#### 使用相对地址，例如 `/micro-app`
子应用代码包需要根据 `entry` 配置路径放置到 `nginx` 代理的路径下

主应用和子应用将会使用同一个 `nginx` 部署，因此不需要处理跨域问题

例如：
`nginx` 配置：
```txt
location /mainApp {
    alias	D:/path/main/dist;
    index	index.html index.htm;
}
```
主应用 `entry` 配置：（注意最后一个斜杠表示默认读取 `index.html`）
```json
{
  "entry": '/mainApp/micro-app/' 
}
```
则子应用代码放到 `D:/path/main/dist/micro-app/` 文件夹下即可