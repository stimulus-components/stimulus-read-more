import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['content', 'full']
  static values = {
    showText: String,
    hideText: String
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

    event.target.innerHTML = this.hideTextValue
    this.contentTarget.innerHTML = this.fullTarget.innerHTML
  }

  hide (event) {
    this.open = false

    event.target.innerHTML = this.showTextValue
    this.contentTarget.innerHTML = this.originalContent
  }
}
