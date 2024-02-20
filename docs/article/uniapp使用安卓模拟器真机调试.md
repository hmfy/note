##### 找到 adb.exe 所在的目录，运行

```shell
adb connect 127.0.0.1:16384

adb devices
```

##### 去 uni 项目中找到 运行 -> adb 路径设置

选择 `adb.exe` 包

输入端口号 `16384`

##### 不同版本可能端口号不一致，可自行查找
这里举例 `MuMu` 模拟器：

在 `vms` 路径下找到 `MuMuPlayer-12.0-0.nemu` 这个文件就可以找到 `ip` 及端口