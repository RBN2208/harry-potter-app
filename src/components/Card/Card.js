import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(
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
) {
  const isAlive = checkIfAlive(alive)
  const pictureBox = createElement('div', { className: 'picturebox' })
  const studentPic = createElement('img', { src: image })
  const cardprofile = createElement('div', {
    className: 'profilebox',
    innerHTML: ` 
    <h2>${name}</h2>
    Born:
    <span>${yearOfBirth}</span>
    Gender:
    <span>${gender}</span>
    Ancestry:
    <span>${ancestry}</span>
    <h3>${house}</h3>
    <span>${isAlive}</span>
    <span>${patronus}</span>
    `,
  })

  pictureBox.append(studentPic)

  const el = createElement(
    'section', // type
    { className: 'Card' }, // props
    pictureBox,
    cardprofile
  )

  function checkIfAlive(alive) {
    if (alive === true) return 'Yes, still alive'
    if (alive === false) return 'No, already dead'
  }

  return el
}
