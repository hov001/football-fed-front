import './mainSection.css'
import './mainSection.responsive.css'

// National calendar
import nationalCalendar from '@nationalCalendar/nationalCalendar.js'
import generalNews from '@generalNews/generalNews.js'
import gallerySection from '@gallerySection/gallerySection.js'
import actualSection from '@actualSection/actualSection.js'

const mainSection = `
  <section class="main-section">
    ${nationalCalendar}
    ${generalNews}
    ${actualSection}
  </section>
`

export default mainSection