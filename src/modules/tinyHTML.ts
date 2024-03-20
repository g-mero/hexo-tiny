import minifyHtml from '@minify-html/node'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'

export default function tinyHTML(html: string, data: { path: string }) {
  if (TinyConfig.html.exclude.some((pattern) => minimatch(data.path, pattern)))
    return html
  return minifyHtml.minify(Buffer.from(html), {})
}
