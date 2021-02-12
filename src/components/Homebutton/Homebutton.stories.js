import Homebutton from './Homebutton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Homebutton',
  component: Homebutton,
}

export const base = () => Homebutton(action('onNavigate')) // just for storybook to proof if nav works
