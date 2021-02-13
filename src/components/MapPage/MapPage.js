import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './MapPage.css'

import hogwartsMap from '../../assets/map.png'

export default function MapPage(onNavigate) {
  const el = createElement('main', { className: 'Mappage', hidden: true })
  const homebutton = Homebutton(onNavigate)
  const map = createElement('img', {
    className: 'Mappage__map',
    src: hogwartsMap,
  })
  const mapContainer = createElement('div', {
    className: 'Mappage__mapcontainer',
  })
  const zoomInButton = createElement('button', {
    className: 'Mappage__zoomIn',
    textContent: '+',
  })
  const zoomOutButton = createElement('button', {
    className: 'Mappage__zoomIn',
    textContent: '-',
  })

  mapContainer.append(map)
  el.append(homebutton, zoomInButton, zoomOutButton, mapContainer)

  zoomInButton.addEventListener('click', () => {
    map.style.width = '1000px'
    mapContainer.style.overflow = 'scroll'
  })
  zoomOutButton.addEventListener('click', () => {
    map.style.width = '350px'
    mapContainer.style.overflow = 'hidden'
  })

  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
