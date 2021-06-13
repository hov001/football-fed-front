import './mobileSidebar.css'
// Navigation
import Navigation from '@nav/nav.js'

const mobileSidebar = `
  <nav class="mobile-sidebar">
    <!-- MOBILE HAMBURGER -->
    <div class="mobile-sidebar__hamburger" id="mobile-sidebar__btn">
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
    </div>
    <!-- MOBILE HAMBURGER END -->
    <!-- MOBILE SIDEBAR -->
    ${new Navigation('mobile-sidebar__box').renderItems(['մեդիա', 'հֆֆ', 'հավաքականներ', 'մրցաշար', 'ակումբներ', 'ենթակառուցվածքներ'])}
    <!-- MOBILE SIDEBAR -->
  </nav>
`

export default mobileSidebar