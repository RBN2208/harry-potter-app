import createElement from '../../lib/createElement'
import './Homepage.css'
import Card from '../Card'

export default function Homepage(characters) {
  const el = createElement('main', { className: 'Homepage' })

  function setCards(characters) {
    const cardElements = characters.map(
      ({
        name,
        house,
        image,
        gender,
        yearOfBirth,
        ancestry,
        patronus,
        wand,
        hogwartsStudent,
        hogwartsStaff,
        alive,
      }) =>
        Card(
          name,
          house,
          image,
          gender,
          yearOfBirth,
          ancestry,
          patronus,
          wand,
          hogwartsStudent,
          hogwartsStaff,
          alive
        )
    )
    el.innerHTML = ''
    el.append(...cardElements)
  }
  return {
    el,
    setCards,
  }
}
