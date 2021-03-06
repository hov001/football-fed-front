import '@styles/style'
import '@styles/style.responsive'
import LoginReg from '@loginReg/loginReg.build.js'
import Validation from '@model/Validation.js'
// import LoginReg from '@loginReg/loginReg.build.js'
import Registration from '@registration/registration.build.js'

// Classes
import HeaderSticky from '@header/headerSticky/headerSticky.js'
import MobileSidebarLogic from '@nav/mobileSidebar/MobileSidebarLogic.js'
import Slider from '@model/Slider'

new Registration().build()

// new LoginReg().build()

// CLASSES
new HeaderSticky('header', 'header-sticky').init()
new MobileSidebarLogic('mobile-sidebar__btn', 'mobile-sidebar__box').init()

new Validation().click()
// new Slider('#slider').init()
// new Slider('#nationalCalendar', true).init()


