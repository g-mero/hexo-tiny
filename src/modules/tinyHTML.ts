import { minify } from 'html-minifier'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'

export default function tinyHTML(html: string, data: { path: string }) {
  if (TinyConfig.html.exclude.some((pattern) => minimatch(data.path, pattern)))
    return html
  return minify(html, {})
}
