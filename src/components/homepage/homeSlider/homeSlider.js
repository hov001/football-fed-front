import './homeSlider.css'
import './homeSlider.responsive.css'
// Data
import homeSliderData from '@data/homeSliderData.js'
// HomeSliderLooper
import HomeSliderLooper from '@model/HomeSliderLooper.js'

let homeSlider = new HomeSliderLooper(homeSliderData, 'slider', ['slide']).render()

export default homeSlider