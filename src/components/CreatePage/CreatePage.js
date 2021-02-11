import createElement from '../../lib/createElement'
import './CreatePage.css'

export default function CreatePage() {
  const el = createElement('main', { className: 'Createpage', hidden: true })

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
