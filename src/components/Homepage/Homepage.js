import createElement from '../../lib/createElement'
import './Homepage.css'
import Navigation from '../Navigation'

export default function Homepage(onNavigate) {
  const el = createElement('main', { className: 'Homepage' })
  const navigation = Navigation(onNavigate)

  el.append(navigation)

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
