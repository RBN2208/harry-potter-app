import createElement from '../../lib/createElement'
import './Navigation.css'

import peopleSVG from '@fortawesome/fontawesome-free/svgs/solid/hat-wizard.svg'
import mapSVG from '@fortawesome/fontawesome-free/svgs/solid/map-marked-alt.svg'
import houseSVG from '@fortawesome/fontawesome-free/svgs/solid/house-damage.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/magic.svg'

const buttonsConfig = [
  { svgPath: peopleSVG, text: 'People' },
  { svgPath: mapSVG, text: 'Map' },
  { svgPath: houseSVG, text: 'Houses' },
  { svgPath: createSVG, text: 'Create' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text, svgPath))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
