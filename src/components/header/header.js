import './header.css'
import Navigation from '@nav/nav.js'

// Logo Section
import logoSection from './logoSection/logoSection.js'

const headerHtml = `
  <!-- HEADER -->
  <header class="header">
    <!-- CONTAINER -->
    <div class="header__row">
      <!-- HEADER ITEM -->
      <div class="header__item">
        <!-- HEADER ITEM TITLE -->
        <div class="header__item__title">
          <h1><a href="#">հայաստանի ֆուտբոլի ֆեդերացիա</a></h1>
        </div>
        ${Navigation.renderItems(['մեդիա', 'հֆֆ', 'հավաքականներ'])}
      </div>
      <!-- HEADER ITEM END -->
      <!-- HEADER ITEM -->
      <div class="header__item">
        ${Navigation.renderItems(['մրցաշար', 'ակումբներ', 'ենթակառուցվածքներ'])}
        <!-- HEADER ITEM REGISTRATION -->
        <div class="header__item__search-and-reg"></div>
      </div>
      <!-- HEADER ITEM END -->
    </div>
    <!-- CONTAINER END -->
    ${logoSection}
  </header>
  <!-- HEADER END -->
`

export default headerHtml
