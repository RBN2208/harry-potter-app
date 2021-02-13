import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const JS = () =>
  Card({
    name: 'Harry Potter',
    house: 'Gryffindor',
    born: '1980',
    ancestry: 'half-blood',
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  })
