import Grid from './components/Grid'
import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import createElement from './lib/createElement'
// import Card from './components/Card'
import Homepage from './components/Homepage'
import PeoplePage from './components/PeoplePage'
import MapPage from './components/MapPage'
import HousePage from './components/HousePage'
import CreatePage from './components/CreatePage'
// import Navigation from './components/Navigation'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homePage = Homepage(onNavigate)
  const peoplePage = PeoplePage()
  const mapPage = MapPage()
  const housePage = HousePage()
  const createPage = CreatePage()

  const grid = Grid(
    header,
    homePage,
    peoplePage,
    mapPage,
    housePage,
    createPage
  )
  document.body.append(grid)

  // fetch API
  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  // get characters to peoplepage
  function createCards(characters) {
    peoplePage.setCards(characters)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }

  function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      peoplePage.hide()
      createPage.hide()
      mapPage.hide()
      housePage.hide()
      header.setText('Harry Potter App')
    }

    if (text === 'People') {
      homePage.hide()
      peoplePage.show()
      createPage.hide()
      mapPage.hide()
      housePage.hide()
      header.setText('Characters')
    }

    if (text === 'Create') {
      homePage.hide()
      peoplePage.hide()
      createPage.show()
      mapPage.hide()
      housePage.hide()
      header.setText('New Students')
    }

    if (text === 'Map') {
      homePage.hide()
      peoplePage.hide()
      createPage.hide()
      mapPage.show()
      housePage.hide()
      header.setText('Map of Hogwarts')
    }

    if (text === 'Houses') {
      homePage.hide()
      peoplePage.hide()
      createPage.hide()
      mapPage.hide()
      housePage.show()
      header.setText('Houses of Hogwarts')
    }
  }
}
