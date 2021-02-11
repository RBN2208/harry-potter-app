import Navigation from './Navigation'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Navigation',
  component: Navigation,
}

export const base = () => Navigation(action('onNavigate')) // just for storybook to proof if nav works
