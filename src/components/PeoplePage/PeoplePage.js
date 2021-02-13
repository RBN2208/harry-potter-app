import createElement from '../../lib/createElement'
import Card from '../Card'
import Searchbar from '../Seachbar'
import Homebutton from '../Homebutton'
import './PeoplePage.css'

export default function PeoplePage(onNavigate, liveSearch) {
  const el = createElement('main', { className: 'Peoplepage', hidden: true })
  const searchBar = Searchbar(liveSearch)
  const homeButton = Homebutton(onNavigate)
  const cardcontainer = createElement('div', {
    className: 'Peoplepage__cardcontainer',
  })

  const upperContainer = createElement('div', {
    className: 'Peoplepage__navcontainer',
  })

  upperContainer.append(homeButton, searchBar)
  el.append(upperContainer, cardcontainer)

  function cleanPeoplepage() {
    cardcontainer.innerHTML = ''
  }

  function setCards(character) {
    const cardElements = character.map(character => Card(character))
    cardcontainer.append(...cardElements)
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
    cleanPeoplepage,
  }
}
