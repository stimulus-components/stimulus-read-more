import { Controller } from 'stimulus'

export default class extends Controller {
  open: boolean
  originalContent: string
  contentTarget: HTMLElement
  fullTarget: HTMLElement
  moreTextValue: string
  lessTextValue: string

  static targets: Array<string> = ['content', 'full']
  static values = {
    moreText: String,
    lessText: String
  }

  connect (): void {
    this.open = false
    this.originalContent = this.contentTarget.innerHTML
  }

  toggle (event: Event): void {
    this.open === false ? this.show(event) : this.hide(event)
  }

  show (event: Event): void {
    this.open = true

    const target = event.target as HTMLElement
    target.innerHTML = this.lessTextValue
    this.contentTarget.innerHTML = this.fullTarget.innerHTML
  }

  hide (event: Event): void {
    this.open = false

    const target = event.target as HTMLElement
    target.innerHTML = this.moreTextValue
    this.contentTarget.innerHTML = this.originalContent
  }
}
