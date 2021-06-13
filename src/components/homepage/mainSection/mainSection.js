import './mainSection.css'
import './mainSection.responsive.css'

// National calendar
import nationalCalendar from '@nationalCalendar/nationalCalendar.js'
import generalNews from '@generalNews/generalNews.js'
import gallerySection from '@gallerySection/gallerySection.js'

const mainSection = `
  <section class="main-section">
    ${nationalCalendar}
    ${generalNews}
    ${gallerySection}
  </section>
`

export default mainSection