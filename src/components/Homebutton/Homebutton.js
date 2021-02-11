import createElement from '../../lib/createElement'
import './Homebutton.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'

const buttonConfig = [{ svgPath: homeSVG, text: 'Home' }]

export default function Homebutton(onNavigate) {
  const buttons = buttonConfig.map(({ svgPath, text }) => {
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text, svgPath))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
