import browserslist from 'browserslist'
import { browserslistToTargets, transform } from 'lightningcss'

const targets = browserslistToTargets(
  browserslist('>= 0.25% and not dead'),
)

function tinyCSS(css) {
  const { code } = transform({
    minify: true,
    code: Buffer.from(css),
    filename: 'style.css',
    sourceMap: false,
    targets,
  })

  return code.toString()
}


console.log(tinyCSS(`@media screen and (max-width: 768px) {
    .root {
      background-color: #f0f0f0;
    }
  }
  `))