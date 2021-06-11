import './nav.css'
import './nav.responsive.css'

class Navigation {
  constructor() {
    this.navItems = new String('')
  }

  renderItems(items) {
    this.navItems = new String('')

    items.forEach((item) => {
      this.navItems += `
        <li class="nav__item">
          <a href="#" class="nav__item__dropbtn">${item}</a>
        </li>
      `
    })

    return `
      <!-- HEADER ITEM NAV -->
      <nav class="header__item__nav">
        <ul>
          ${this.navItems}
        </ul>
      </nav>
    `
  }
}

export default Navigation
