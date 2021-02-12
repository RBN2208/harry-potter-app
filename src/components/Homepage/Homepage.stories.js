import AppHeader from '../AppHeader'
import Homepage from './Homepage'
import Grid from '../Grid'

export default {
  title: 'Homepage',
  component: Homepage,
}

const exampleHeader = AppHeader('Homepage')
const exampleChildren = Homepage().el

export const showGrid = () => Grid(exampleHeader, exampleChildren)
