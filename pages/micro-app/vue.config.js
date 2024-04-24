module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/app": {
        target: `http://192.168.32.108:2122`,
      }
    }
  },
  configureWebpack: {
    output: {
      /*
      *  qiankun 如何子应用入口的方式：
      *  1. 最后一个 script 标签
      *  2. 和子应用 name 匹配的包名
      *  3. 带有 entry 属性的 script 标签
      * */
      library: `导出的js包名`,
      // 把微应用打包成 umd 库格式
      libraryTarget: 'umd',
    },
  },
};