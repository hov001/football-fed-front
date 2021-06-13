import './header.css'
import './header.responsive.css'
import Navigation from '@nav/nav.js'
import HeaderSticky from './headerSticky/headerSticky.js'
import mobileSidebar from '@nav/mobileSidebar/mobileSidebar.js'

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
          <h2><a href="#">հֆֆ</a></h2>
        </div>
        ${new Navigation().renderItems(['մեդիա', 'հֆֆ', 'հավաքականներ'])}
      </div>
      <!-- HEADER ITEM END -->
      <!-- HEADER ITEM -->
      <div class="header__item">
        ${new Navigation().renderItems(['մրցաշար', 'ակումբներ', 'ենթակառուցվածքներ'])}
        <!-- HEADER ITEM REGISTRATION -->
        <div class="header__item__reg">
          <a href="#" class="header__item__reg__item">
            <i class="far fa-user"></i>
            <span>Մուտք <span class="item-optional">| Գրանցում</span></span>
          </a>
        </div>
      </div>
      <!-- HEADER ITEM END -->
      <!-- MOBILE SIDEBAR -->
      ${mobileSidebar}
      <!-- MOBILE SIDEBAR END -->
    </div>
    <!-- CONTAINER END -->
    ${logoSection}
  </header>
  <!-- HEADER END -->
`

export default headerHtml
