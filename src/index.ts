import { Controller } from "@hotwired/stimulus"

export default class ReadMore extends Controller {
  open: boolean
  contentTarget: HTMLElement
  moreTextValue: string
  lessTextValue: string

  static targets: string[] = ["content"]
  static values = {
    moreText: String,
    lessText: String,
  }

  connect(): void {
    this.open = false
  }

  toggle(event: Event): void {
    this.open === false ? this.show(event) : this.hide(event)
  }

  show(event: Event): void {
    this.open = true

    const target = event.target as HTMLElement
    target.innerHTML = this.lessTextValue
    this.contentTarget.style.setProperty("--read-more-line-clamp", "'unset'")
  }

  hide(event: Event): void {
    this.open = false

    const target = event.target as HTMLElement
    target.innerHTML = this.moreTextValue
    this.contentTarget.style.removeProperty("--read-more-line-clamp")
  }
}
