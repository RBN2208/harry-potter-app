import createElement from '../../lib/createElement'
import './Homepage.css'

export default function Homepage() {
  const el = createElement('main', { className: 'Homepage' })

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
