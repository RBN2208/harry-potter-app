import createElement from '../../lib/createElement'
import './AppHeader.css'

export default function AppHeader(title) {
  const el = createElement('header', { className: 'AppHeader' })

  setText(title)

  function setText(title) {
    el.innerHTML = `
      <h1 class="Header__title">
        ${title}
      </h1>
    `
  }
  return {
    el,
    setText,
  }
}
