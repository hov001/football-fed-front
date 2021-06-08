import './header.css'
import nav from '@nav/nav.js'

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
          <h1>հայաստանի ֆուտբոլի ֆեդերացիա</h1>
        </div>
        ${nav}
      </div>
      <!-- HEADER ITEM END -->
      <!-- HEADER ITEM -->
      <div class="header__item">
        ${nav}
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
