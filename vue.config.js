const webpack = require("webpack");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave:false,
  devServer:{
    port:8081, //设置端口号

    // proxy: 'http://localhost:8080' 方式一

    proxy: {
      '/students':{ //方式二
        target: 'http://localhost:5000',
        // pathRewrite: {'^/pyj' : ''},
        ws: true, // 用于支持websocket ,默认值为true
        changeOrigin: true //用于控制请求头中的host,默认值为true,react默认为false
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  configureWebpack:{
    plugins: [
        //配置Jquery插件的参数
      new webpack.ProvidePlugin({
        // 引入jquery
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
})
