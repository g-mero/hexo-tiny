import { transform } from 'lightningcss'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'
export default function tinyCSS(css: string, data: { path: string }) {
  if (TinyConfig.css.exclude.some((pattern) => minimatch(data.path, pattern)))
    return css

  const { code } = transform({
    minify: true,
    code: Buffer.from(css),
    filename: 'style.css',
    sourceMap: false,
  })

  return code.toString()
}
