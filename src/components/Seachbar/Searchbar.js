import createElement from '../../lib/createElement'
import './Searchbar.css'

export default function Searchbar(liveSearch) {
  const el = createElement('input', {
    className: 'Searchbar__bar',
    placeholder: 'Search',
  })

  el.addEventListener('input', event => {
    const searchedValue = event.target.value
    liveSearch(searchedValue)
  })

  return el
}
