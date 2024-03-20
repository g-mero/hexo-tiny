const defaultConf = {
  enable: true,
  css: {
    enable: true,
    exclude: [],
  },
  js: {
    enable: true,
    exclude: [],
  },
  html: {
    enable: true,
    exclude: ['*.xml'],
  },
}

const TinyConfig = Object.assign(
  {},
  defaultConf,
  hexo.config.tiny,
) as typeof defaultConf

TinyConfig.css = Object.assign({}, defaultConf.css, TinyConfig.css)
TinyConfig.js = Object.assign({}, defaultConf.js, TinyConfig.js)
TinyConfig.html = Object.assign({}, defaultConf.html, TinyConfig.html)

export default TinyConfig
