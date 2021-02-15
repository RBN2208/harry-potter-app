import createElement from '../../lib/createElement'
import './CreateForm.css'
import getHouseName from '../../services/getHouseName'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'Createpage__form',
    innerHTML: `
    <label>Name:
    <input type="text" name="studentName" placeholder="Name">
    </label>
    Wich house do you want to join?
    <label>G
    <input type="checkbox" name="house1" value="Gryffindor">
    </label>
    <label>S
    <input type="checkbox" name="house2" value="Slytherin">
    </label>
    <label>H
    <input type="checkbox" name="house3" value="Hufflepuff">
    </label>
    <label>R
    <input type="checkbox" name="house4" value="Ravenclaw">
    </label>
    <label>Born:
    <input type="text" name="born" value="" placeholder="birthyear">
    </label>
    <label>Ancestry:
    <input type="text" name="ancestry" value="" placeholder="your ancestry">
    </label>
    <label>alive?
    <input type="checkbox" name="alive" value="">
    </label>
    <button name="button">Create</button>
    `,
  })

  function getStudentName() {
    const { studentName: studentNameInput } = form.elements
    const name = studentNameInput.value
    return name
  }

  function getBirthYear() {
    const { born: birthYear } = form.elements
    const year = birthYear.value
    return year
  }

  function getAncestry() {
    const { ancestry: ancestryValue } = form.elements
    const ancestry = ancestryValue.value
    return ancestry
  }

  function stillAlive() {
    const aliveb = form.querySelector('input[name="alive"]')
    if (aliveb.checked === true) {
      return true
    } else {
      return false
    }
  }

  function randomImage() {
    const data = 'https://source.unsplash.com/135x200'
    return data
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    const studentName = getStudentName()
    const houseName = getHouseName(form)
    const year = getBirthYear()
    const ancestry = getAncestry()
    const alive = stillAlive()
    const image = randomImage()
    onSubmit(studentName, houseName, year, ancestry, alive, image)
    form.reset()
    console.log(studentName, houseName, year, ancestry, alive, image)
  })
  return form
}
