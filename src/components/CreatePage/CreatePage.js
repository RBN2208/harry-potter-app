import createElement from '../../lib/createElement'
import Homebutton from '../Homebutton'
import './CreatePage.css'
import CreateForm from '../CreateForm'

export default function CreatePage(onNavigate, onSubmit) {
  const el = createElement('main', { className: 'Createpage', hidden: true })
  const homebutton = Homebutton(onNavigate)
  const form = CreateForm(onSubmit)
  el.append(homebutton, form)

  function show() {
    el.hidden = false
  }
  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
