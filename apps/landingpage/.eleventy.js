const PostCSSPlugin = require("eleventy-plugin-postcss")

module.exports = (config) => {
  config.addPlugin(PostCSSPlugin)
  
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}