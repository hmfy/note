## axios 不同版本之间的问题
这里举例 `0.19.2` 这个版本（具体问题具体分析，这里只说这一类）

一般我们会初始化一个 `axios` 实例，对这个实例做一些事情并导出

例如配置一个 `Content-Type` 的值:

```js
const service = axios.create({
    ...
});

service.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

...

export default service
```

实际使用时：
```js
import request from './service.js'
request({
    url: '/save',
    method: 'post',
    data: {...}
})
```

结果会发现实际请求时，`Content-Type` 并不是如当初全局设置的那样

实际 `Content-Type` 为 `application/json`

而当更新 `axios` 版本后，才会达到预期的那样

这是因为某些版本（一般是旧版本），`axios` 会根据实际传参情况强制修改 `Content-Type`

部分源码如下（node_modules/axios/lib/defaults.js）：
```js
if (utils.isArrayBufferView(data)) {
    return data.buffer;
}
if (utils.isURLSearchParams(data)) {
    setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
    return data.toString();
}
if (utils.isObject(data)) {
    setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
    return JSON.stringify(data);
}
```

`setContentTypeIfUnset` 这个函数就是设置 `Content-Type`

可以看到会根据具体的传参设置不同的 `Content-Type`

因此之前在导出的实例上配置的没有效果

如果将 `axios` 更新为最新版本（应该是从某一个版本开始）则不会有这个问题

因为新版本的 `axios` 此部分源码已做修改，会将我们的配置直接返回
