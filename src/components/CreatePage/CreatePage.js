import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './CreatePage.css'

export default function CreatePage(onNavigate) {
  const el = createElement('main', { className: 'Createpage', hidden: true })
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
