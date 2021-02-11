import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './MapPage.css'

export default function MapPage() {
  const el = createElement('main', { className: 'Mappage', hidden: true })
  const homebutton = Homebutton()
  el.append(homebutton)

  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    homebutton,
    show,
    hide,
  }
}
