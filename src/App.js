import Grid from './components/Grid'
import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import createElement from './lib/createElement'
// import Card from './components/Card'
import Homepage from './components/Homepage'
import PeoplePage from './components/PeoplePage'
import MapPage from './components/MapPage'
import HousePage from './components/HousePage'
// import CreatePage from './components/CreatePage'
import Navigation from './components/Navigation'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homePage = Homepage()
  const peoplePage = PeoplePage()
  const mapPage = MapPage()
  const housePage = HousePage()
  // const createPage = CreatePage()
  const navigation = Navigation(onNavigate)

  const grid = Grid(
    header,
    homePage,
    peoplePage,
    mapPage,
    housePage,
    // createpage,
    navigation
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
      mapPage.hide()
      housePage.hide()
      header.setText('Harry Potter App')
    }

    if (text === 'Bookmarks') {
      homePage.hide()
      peoplePage.show()
      mapPage.hide()
      housePage.hide()
      header.setText('Characters')
    }

    if (text === 'Create') {
      homePage.hide()
      peoplePage.hide()
      mapPage.show()
      housePage.hide()
      header.setText('Map of Hogwarts')
    }

    if (text === 'Settings') {
      homePage.hide()
      peoplePage.hide()
      mapPage.hide()
      housePage.show()
      header.setText('Houses of Hogwarts')
    }
  }
}
