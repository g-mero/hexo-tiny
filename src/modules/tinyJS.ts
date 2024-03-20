import { minify } from 'terser'
import { minimatch } from 'minimatch'
import TinyConfig from '../config'

export default async function tinyJS(js: string, data: { path: string }) {
  if (TinyConfig.js.exclude.some((pattern) => minimatch(data.path, pattern)))
    return js
  const result = await minify(js)
  return result.code
}
