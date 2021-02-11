import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
