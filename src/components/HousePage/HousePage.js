import createElement from '../../lib/createElement'
import './HousePage.css'

export default function HousePage() {
  const el = createElement('main', { className: 'Housepage', hidden: true })

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
