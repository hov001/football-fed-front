// Header
import header from '@header/header.js'
// Registration Section
import regSection from './regSection/regSection.js'
// Footer
import footer from '@footer/footer.js'
// // Classes
// import Slider from '@model/Slider'

class Registration {
  constructor() {
    this.components = [header, regSection,  footer]
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

export default Registration