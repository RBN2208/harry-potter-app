import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(character) {
  const isAlive = character.alive ? 'Yes, still alive' : 'No, already dead'
  const birthyear = checkBirthyear(character.yearOfBirth)
  const housename = createElement('h1', {
    textContent: character.house,
    className: 'Card__housename',
  })
  const pictureBox = createElement(
    'div',
    { className: 'Card__picturebox' },
    createElement('img', { src: character.image, alt: '' })
  )
  const cardprofile = createElement('div', {
    className: 'profilebox',
    innerHTML: ` 
    <h2>${character.name}</h2>
    <span>Born: ${birthyear}</span>
    <span>Gender: ${character.gender}</span>
    <span>Ancestry: ${character.ancestry}</span>
    <h3>${character.house}</h3>
    <span>${isAlive}</span>
    <span>Patronus: ${character.patronus}</span>
    `,
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    housename,
    cardprofile,
    pictureBox
  )
  el.style.background = checkHouse(character.house)

  function checkBirthyear(yearOfBirth) {
    if (yearOfBirth) return yearOfBirth
    else return 'Unknown!'
  }

  function checkHouse(house) {
    if (house === 'Gryffindor') return 'var(--color-gryffindor)'
    if (house === 'Slytherin') return 'var(--color-syltherin)'
    if (house === 'Hufflepuff') return 'var(--color-hufflepuff)'
    if (house === 'Ravenclaw') return 'var(--color-ravenclaw)'
  }
  return el
}
