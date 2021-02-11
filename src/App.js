import Grid from './components/Grid'
import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import createElement from './lib/createElement'
import Card from './components/Card'
import Homepage from './components/Homepage'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const homepage = Homepage()

  const grid = Grid(header, homepage)
  document.body.append(grid)

  // fetch API
  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    homepage.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
