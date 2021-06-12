import '@styles/style'
import '@styles/style.responsive'
// Homepage
import Homepage from '@homepage/homepage.build.js'

// Classes
import HeaderSticky from '@header/headerSticky/headerSticky.js'
import MobileSidebarLogic from '@nav/mobileSidebar/MobileSidebarLogic.js'
import Slider from '@model/Slider'

new Homepage().build()


// CLASSES
new HeaderSticky('header', 'header-sticky').init()
new MobileSidebarLogic('mobile-sidebar__btn', 'mobile-sidebar__box').init()
new Slider('#slider').init()


