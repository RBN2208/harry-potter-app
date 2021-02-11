import createElement from '../../lib/createElement'
import './Homebutton.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'

export default function Homebutton(onNavigate) {
  const homeButton = createElement('img', { src: homeSVG })
  homeButton.addEventListener('click', () => onNavigate(homeSVG))
  return homeButton
}
