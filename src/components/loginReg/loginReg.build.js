// Header
import header from '@header/header.js'
// Login Section
import loginSection from './loginSection/loginSection'
// Footer
import footer from '@footer/footer.js'
// // Classes
// import Slider from '@model/Slider'

class LoginReg {
  constructor() {
    this.components = [header, loginSection,  footer]
    // this.classes = [new Slider('#slider')]
  }

  build() {
    const app = document.getElementById('app')
    this.components.forEach((element) =>
      app.insertAdjacentHTML('beforeend', element)
    )
    // this.renderClasses()
    return this
  }

  renderClasses() {
    this.classes.forEach((element) => element.init())
    return this
  }
}

export default LoginReg