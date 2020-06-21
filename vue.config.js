module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
          },
          javascriptEnabled: true,
        },
      }
    }
  }
}