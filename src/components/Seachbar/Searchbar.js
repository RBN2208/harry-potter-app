import createElement from '../../lib/createElement'
import './Searchbar.css'

export default function Searchbar() {
  const el = createElement('input', {
    className: 'Searchbar__bar',
    placeholder: 'Search',
  })

  return el
}
