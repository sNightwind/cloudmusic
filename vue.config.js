const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{//配置webpack-dev-serve
    host:'0.0.0.0',
    port:9529,
    // publicPath:'192.168.56.1:9529',
    proxy:{  //反向代理，处理跨域问题
      
    },
  }
})
// module.exports = {   
//   devServer: {   
//       public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':9528'  
//   } 
// }
