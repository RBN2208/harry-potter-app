import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './HousePage.css'

export default function HousePage(onNavigate) {
  const el = createElement('main', { className: 'Housepage', hidden: true })
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
