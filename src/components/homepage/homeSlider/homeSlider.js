import './homeSlider.css'
// Slider
// import Slider from '@model/Slider.js'
// Slider Images
import sliderOne from '@assets/slider/slider-1.jpg'
import sliderTwo from '@assets/slider/slider-2.jpg'
import sliderThree from '@assets/slider/slider-3.jpg'

const homeSlider = `
  <!-- HOME SLIDER -->
  <section class="home-slider" id="slider">
    <!-- SLIDER SECTION -->
    <div class="home-slider__slider-section" id="slider-wrapper">
      <!-- SLIDER ITEM -->
      <div class="home-slider__slider-section__item slide">
        <a href="#">
          <!-- SLIDER IMAGE -->
          <img src="${sliderOne}" alt="${sliderOne}">
        </a>
      </div>
      <!-- SLIDER ITEM END -->
      <!-- SLIDER ITEM -->
      <div class="home-slider__slider-section__item slide">
        <a href="#">
          <!-- SLIDER IMAGE -->
          <img src="${sliderTwo}" alt="${sliderTwo}">
        </a>
      </div>
      <!-- SLIDER ITEM END -->
      <!-- SLIDER ITEM -->
      <div class="home-slider__slider-section__item slide">
        <a href="#">
          <!-- SLIDER IMAGE -->
          <img src="${sliderThree}" alt="${sliderThree}">
        </a>
      </div>
      <!-- SLIDER ITEM END -->
    </div>
    <!-- SLIDER SECTION END -->
    <!-- SLIDER TITLES -->
    <div class="home-slider__slider-titles" id="slider-nav">
      <a href="#" data-slide="0">1</a>
      <a href="#" data-slide="1">2</a>
      <a href="#" data-slide="2">3</a>
    </div>
    <!-- SLIDER TITLES END -->
  </section>
  <!-- HOME SLIDER END -->
`

// new Slider('#slider').init()

export default homeSlider