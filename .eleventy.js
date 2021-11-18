module.exports = function (config) {
    // config.addPassthroughCopy({ './src/_includes/css/style.css': 'style.css' })
    config.addPassthroughCopy('css')
    config.addPassthroughCopy('images')
    config.addPassthroughCopy('icons')
    config.addPassthroughCopy({ './src/_includes/css/styles.css': 'styles.css' })
    markdownTemplateEngine: "hbs,md"
    return {
      dir: {
        input: './src',
        output: './build'
      }
    }
  } 