const path = require('path')



module.exports = {
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: ['ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
          },
          include: [path.join(__dirname, '../node_modules/')],
          javascriptEnabled: true,
        },
      }
    }
  }
} 