import createElement from '../../lib/createElement'
import Card from '../Card'
import Homebutton from '../Homebutton'
import './PeoplePage.css'

export default function PeoplePage(onNavigate, character) {
  const el = createElement('main', { className: 'Peoplepage', hidden: true })
  const homebutton = Homebutton(onNavigate)
  el.append(homebutton)

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
