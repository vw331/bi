module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
            '@heading-color': '#ffffff',
            '@text-color': '#ffffff'
          },
          javascriptEnabled: true,
        },
      }
    }
  }
}