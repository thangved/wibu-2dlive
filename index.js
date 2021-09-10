const { path } = require('@vuepress/utils')

module.exports = {
  clientAppEnhanceFiles: path.resolve(__dirname, './bin/clientAppEnhance.js'),
  clientAppRootComponentFiles: path.resolve(__dirname, './bin/Cat.vue'),
}
