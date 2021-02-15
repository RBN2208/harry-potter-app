export default function getHouseName(form) {
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
