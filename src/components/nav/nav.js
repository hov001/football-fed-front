import './nav.css'
import './nav.responsive.css'

class Navigation {
  constructor(boxId) {
    this.boxId = boxId
    this.navItems = new String("");
    this.footerItems = new String("");
    this.bigNewsBlockItems= new String("")
    this.smallNewsBlockItem= new String("")
    this.tourTabledataItem= new String("")
}

  // NAVBAR

  renderItems(items) {
    items.forEach((item) => {
      this.navItems += `
        <li class="nav__item">
          <a href="#" class="nav__item__dropbtn">${item}</a>
        </li>
      `;
    });

    return `
      <!-- HEADER ITEM NAV -->
      <nav class="header__item__nav" ${this.boxId !== undefined ? `id="${this.boxId}"` : ''}>
        <ul>
          ${this.navItems}
        </ul>
      </nav>
    `;
  }

// NAVBAR END

// FOOTER

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

  // FOOTER END

  // bigNewsBlock

  renderbigNewsBlockItems(element) {
    this.bigNewsBlockItems= new String("")

    element.forEach((item) => {
      this.bigNewsBlockItems += `
          <div class="big__news__list__block news__list__block">
            <a href="/news/213840" class="big__news__image news__image" style="background-image: url('${item.url}');"></a>
                <div class="big__neitiv">
                    <a href="/news/213840" class="big__news__title news__title">${item.title1}</a>
                    <p class="big__news__title2">
                    ${item.title2}  
                    </p>
                    <span class="big__date">${item.data}</span>
                </div>
          </div>
      `;
    });

    return this.bigNewsBlockItems
  }

  // bigNewsBlock END

  // smallNewsBlock

  rendersmallNewsBlockItem(element) {
    this.smallNewsBlockItem= new String("")
    element.forEach((item) => {
      this.smallNewsBlockItem += `
              <div class="small__news__list__block news__list__block">
                <a href="/news/213840" class="small__news__image news__image" style="background-image: url('${item.url}');"></a>
                  <div class="small__neitiv">
                      <a href="/news/213840" class="small__news__title news__title">${item.title}</a>
                      <span class="small__date">${item.data}</span>
                  </div>
              </div>
      `;
    });

    return this.smallNewsBlockItem
  }

  // smallNewsBlock END

  // tourTabledata

  renderTourTabledataItem(element) {
    this.tourTabledataItem=new String("")
    element.forEach((item) => {
      this.tourTabledataItem +=`
        <tr class="tr__hover">
            <td class="team__number">${item.id}</td>
            <td>
                <a href=""> 
                    <img src="${item.url}" class="img" alt="">                       
                </a>
            </td>
            <td>
                <a href="" class="team__number font__team">${item.team}</a>
            </td>
            <td class="team__number">${item.games_count}</td>
            <td class="team__number">${item.points}</td>
        </tr>
      `
    })
    return this.tourTabledataItem
  }
}

export default Navigation;
