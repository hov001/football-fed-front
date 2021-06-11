import './nav.css'
import './nav.responsive.css'

class Navigation {
  constructor() {
    this.navItems = new String("");
    this.footerItems = new String("");
  }

  renderItems(items) {
    this.navItems = new String("");

    items.forEach((item) => {
      this.navItems += `
        <li class="nav__item">
          <a href="#" class="nav__item__dropbtn">${item}</a>
        </li>
      `;
    });

    return `
      <!-- HEADER ITEM NAV -->
      <nav class="header__item__nav">
        <ul>
          ${this.navItems}
        </ul>
      </nav>
    `;
  }

  renderFooterItems(element) {
    this.footerItems = new String("");
    element.forEach((el) => {
      this.footerItems += `
        <div class="footer__finish">
          <h3 class="footer__fin__h3">${el.title}</h3>
      `;
      el.items.forEach((item) => {
        this.footerItems += `
            <a href="#" target="_blank" class="footer__fin__p">${item}</a>
          `;
      });

      this.footerItems += `
          </div>
       `;
    });

    return `      
      <div class="footer__item_2">
          ${this.footerItems}
      </div>
    `;
  }
}

export default Navigation;
