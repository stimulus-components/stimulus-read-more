import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['content', 'full']
  static values = {
    moreText: String,
    lessText: String
  }

  connect () {
    this.open = false
    this.originalContent = this.contentTarget.innerHTML
  }

  toggle (event) {
    this.open === false ? this.show(event) : this.hide(event)
  }

  show (event) {
    this.open = true

    event.target.innerHTML = this.lessTextValue
    this.contentTarget.innerHTML = this.fullTarget.innerHTML
  }

  hide (event) {
    this.open = false

    event.target.innerHTML = this.moreTextValue
    this.contentTarget.innerHTML = this.originalContent
  }
}
