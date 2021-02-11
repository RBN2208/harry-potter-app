import createElement from '../../lib/createElement'
import './MapPage.css'

export default function MapPage() {
  const el = createElement('main', { className: 'Mappage', hidden: true })

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
