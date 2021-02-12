import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './MapPage.css'

export default function MapPage(onNavigate) {
  const el = createElement('main', { className: 'Mappage', hidden: true })
  const homebutton = Homebutton(onNavigate)
  el.append(homebutton)

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
