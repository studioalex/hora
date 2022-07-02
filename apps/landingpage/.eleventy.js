const PostCSSPlugin = require("eleventy-plugin-postcss")
const extendDirs = ['./src/js/', './src/fonts/', './src/images/']

module.exports = (config) => {
  config.addPlugin(PostCSSPlugin)

  extendDirs.forEach(dir => {
    config.addPassthroughCopy(dir)
    config.addWatchTarget(dir)
  })
  
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}