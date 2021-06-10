import homepage from './homepage.html'
import './homepage.css'
// Header
import header from '@header/header.js'
// Home Slider
import homeSlider from '@homeSlider/homeSlider.js'
// Footer
import footer from '@footer/footer.js'

const parser = new DOMParser()
let htmlDoc = parser.parseFromString(homepage, 'text/html')

const homepageDom = htmlDoc.getElementById('homepage')
const homepageItems = [header, homeSlider, footer]

homepageItems.forEach((section) => {
  homepageDom.insertAdjacentHTML('beforeend', section)
})

export default homepageDom
