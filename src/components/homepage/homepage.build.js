import './homepage.css'
// Header
import header from '@header/header.js'
import headerStickySection from '@components/testComps/headerStickySection.js'
// Home Slider
import homeSlider from '@homeSlider/homeSlider.js'
// Main Section
import mainSection from '@mainSection/mainSection.js'
// Footer
import partners from '@components/partners/partner.js'
// Footer
import bigNewsBlock from '@components/blocks/bigNewsBlock/bigNewsBlock.js'
import smallNewsBlock from '@components/blocks/smallNewsBlock/smallNewsBlock.js'
import table from '@components/tourTable/table.js'
import tourTableTeam from '@components/tourTableTeam/tourTableTeam.js'




import footer from '@footer/footer.js'
// // Classes
// import Slider from '@model/Slider'

class Homepage {
  constructor() {
    this.components = [header, homeSlider, mainSection, partners, footer]
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

export default Homepage
