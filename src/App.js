import Grid from './components/Grid'
import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'

export default function App() {
  const students = []
  students.push()

  const header = AppHeader('Harry Potter App')

  const grid = Grid(header)
  document.body.append(grid)

  // fetch API
  getCharacters()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
