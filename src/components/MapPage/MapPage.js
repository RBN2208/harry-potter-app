import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './MapPage.css'

import hogwartsMap from '../../assets/map.png'

export default function MapPage(onNavigate) {
  const el = createElement('main', { className: 'Mappage', hidden: true })
  const homebutton = Homebutton(onNavigate)
  const map = createElement('img', { src: hogwartsMap })
  const mapContainer = createElement('div', {
    className: 'Mappage__mapcontainer',
  })
  mapContainer.append(map)
  el.append(homebutton, mapContainer)
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
