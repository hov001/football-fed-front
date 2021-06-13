import './nationalCalendar.css'
// Matches box
import matchesBox from '@matchesBox/matchesBox.js'

const nationalCalendar = `
  <section class="calendar-section">
    <div class="calendar-section__title">
      <h3>Առաջիկա հանդիպումները</h3>
    </div>
  </section>
  <div class="national-calendar" id="nationalCalendar">
    <div class="national-calendar__next-prev">
      <button id="slider-prev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="slider-next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="national-calendar__wrapper" id="slider-wrapper">
      ${matchesBox}
    </div>
  </div>
`

export default nationalCalendar