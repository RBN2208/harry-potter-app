import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'Createpage__form',
    innerHTML: `
    <label>Name:
    <input type="text" name="studentName" placeholder="Name">
    </label>
    <label>House:
    <input type="checkbox" name="house1" value="Gryffindor">Gryffindor
    <input type="checkbox" name="house2" value="Slytherin">Slytherin
    <input type="checkbox" name="house3" value="Hufflepuff">Hufflepuff
    <input type="checkbox" name="house4" value="Ravenclaw">Ravenclaw
    </label>
    <button name="button">Create</button>
    `,
  })

  function getStudentName() {
    const { studentName: studentNameInput } = form.elements
    const name = studentNameInput.value
    return name
  }

  function checkCheckbox() {
    const house1 = form.querySelector('input[name="house1"]')
    const house2 = form.querySelector('input[name="house2"]')
    const house3 = form.querySelector('input[name="house3"]')
    const house4 = form.querySelector('input[name="house4"]')

    if (house1.checked === true) {
      return 'Gryffindor'
    }
    if (house2.checked === true) {
      return 'Slytherin'
    }
    if (house3.checked === true) {
      return 'Hufflepuff'
    }
    if (house4.checked === true) {
      return 'Ravenclaw'
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    const studentName = getStudentName()
    const houseName = checkCheckbox()
    onSubmit(studentName, houseName)
    form.reset()
    console.log(studentName, houseName)
  })
  return form
}
