import createElement from '../../lib/createElement'
import Card from '../Card'
import Searchbar from '../Seachbar'
import Homebutton from '../Homebutton'
import './PeoplePage.css'

export default function PeoplePage(onNavigate) {
  const el = createElement('main', { className: 'Peoplepage', hidden: true })
  const upperContainer = createElement('div', {
    className: 'Peoplepage__navcontainer',
  })
  const searchBar = Searchbar()
  const homeButton = Homebutton(onNavigate)
  upperContainer.append(homeButton, searchBar)
  el.append(upperContainer)

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
