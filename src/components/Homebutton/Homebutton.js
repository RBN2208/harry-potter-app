import createElement from '../../lib/createElement'
import './Homebutton.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'

const svgPath = homeSVG
const text = 'Home'

export default function Homebutton(onNavigate) {
  const button = createElement('img', { src: svgPath, alt: text })
  button.addEventListener('click', () => onNavigate(text, svgPath))

  const el = createElement('nav', { className: 'Navigation' }, button)
  return el
}
