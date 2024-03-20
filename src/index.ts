import TinyConfig from './config'
import tinyCSS from './modules/tinyCSS'
import tinyHTML from './modules/tinyHTML'
import tinyJS from './modules/tinyJS'

if (TinyConfig.enable) {
  TinyConfig.css.enable &&
    hexo.extend.filter.register('after_render:css', tinyCSS, 100)
  TinyConfig.html.enable &&
    hexo.extend.filter.register('after_render:html', tinyHTML, 100)
  TinyConfig.js.enable &&
    hexo.extend.filter.register('after_render:js', tinyJS, 100)
}
