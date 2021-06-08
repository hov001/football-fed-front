import './homeSlider.css'

// Slider Images
import sliderOne from '@assets/slider/slider-1.jpg'
import sliderTwo from '@assets/slider/slider-2.jpg'
import sliderThree from '@assets/slider/slider-3.jpg'

const homeSlider = `
  <!-- HOME SLIDER -->
  <section class="home-slider">
    <!-- SLIDER SECTION -->
    <div class="home-slider__slider-section">
      <!-- SLIDER ITEM -->
      <div class="home-slider__slider-section__item">
        <a href="#">
          <!-- SLIDER IMAGE -->
          <img src="${sliderThree}" alt="${sliderThree}">
        </a>
      </div>
      <!-- SLIDER ITEM END -->
    </div>
    <!-- SLIDER SECTION END -->
    <!-- SLIDER TITLES -->
    <div class="home-slider__slider-titles">
      
    </div>
    <!-- SLIDER TITLES END -->
  </section>
  <!-- HOME SLIDER END -->
`

export default homeSlider