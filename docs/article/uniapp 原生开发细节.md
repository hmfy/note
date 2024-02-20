# 页面跳转
> 1. 跳转 tabBar 页面时，不能用 uni.navigator
> 2. 但是 uni.switch 不能传参，可以配合 uni.setStorageSync，需要注意在目标页读取到数据后及时 remove, 保证一次性存取

# 云函数
> 1. 创建自定义云函数路径 uniCloud-aliyun/cloudfunctions
> 2. 创建云函数时需要选择依赖，例如选择 uni-cloud-push 后，可以使用 uni-push 相关 api
> 3. 使用 uni-push 时需注意：
>    1. request_id 不能重复，长度 10-32 位
>    2. payload 传递 object
>    3. title 和 content 有长度限制
>    4. 在 push_clientid 传空时，content 的内容十分钟内不能重复
>    5. 注意推送频次的限制，尽量每次都指定一个或多个 push_clientid，push_clientid 为空时，一分钟只能推送五次
>    6. 厂商离线推送不实时，且消息类型默认是营销类消息，营销类消息有限制，一天只能推送几条（例如 huawei 两条）
>    7. 调整消息类型，需要在 sendMessage 内的 options 配置 category 值，并且消息模板需要遵循推送分类协议，下方有 huawei 传参示例:
>    8. 厂商离线推送一定要用自有证书打包
>    9. uni-push [常见问题排查](https://ask.dcloud.net.cn/article/40291)

# vue 页面和 nvue 页面
> 1. [见官方文档](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html)
> 2. tabBar 页面采用用 nvue，可能无法渲染
> 3. nvue 页面用 uni-list 组件时，如果不能拉到底，尝试换成 vue 页面

# h5 + plus API
通过这些 API 能够调用移动端原生的能力

[具体细节见文档](https://www.html5plus.org/doc/h5p.html)

# category 传参示例
```json
    {
        "options": {
            "HW": {
                "/message/android/category": "DEVICE_REMINDER"
            }
        }
    }
```