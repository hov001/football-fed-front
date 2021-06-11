import '@styles/style'
import '@styles/style.responsive'
// Homepage
import Homepage from '@homepage/homepage.build.js'

// Classes
import Slider from '@model/Slider'

new Homepage().build()

new Slider('#slider').init()


