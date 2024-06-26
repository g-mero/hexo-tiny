import { minify } from 'html-minifier'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'

const options = {
  includeAutoGeneratedTags: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
  collapseWhitespace: true,
}

export default function tinyHTML(html: string, data: { path: string }) {
  if (TinyConfig.html.exclude.some((pattern) => minimatch(data.path, pattern)))
    return html
  return minify(html, options)
}
