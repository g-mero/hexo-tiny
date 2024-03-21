import browserslist from 'browserslist'
import { browserslistToTargets, transform } from 'lightningcss'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'

const targets = browserslistToTargets(browserslist('>= 0.25% and not dead'))

export default function tinyCSS(css: string, data: { path: string }) {
  if (TinyConfig.css.exclude.some((pattern) => minimatch(data.path, pattern)))
    return css

  const { code } = transform({
    minify: true,
    code: Buffer.from(css),
    filename: 'style.css',
    sourceMap: false,
    targets,
  })

  return code.toString()
}
