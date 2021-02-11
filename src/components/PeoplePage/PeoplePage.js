import createElement from '../../lib/createElement'
import Card from '../Card'
import './PeoplePage.css'

export default function PeoplePage(character) {
  const el = createElement('main', { className: 'Peoplepage', hidden: true })

  function setCards(character) {
    const cardElements = character.map(character => Card(character))
    el.append(...cardElements)
  }
  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}
