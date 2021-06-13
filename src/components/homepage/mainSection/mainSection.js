import './mainSection.css'
import './mainSection.responsive.css'

// National calendar
import nationalCalendar from '@nationalCalendar/nationalCalendar.js'
import generalNews from '@generalNews/generalNews.js'

const mainSection = `
  <section class="main-section">
    ${nationalCalendar}
    ${generalNews}
  </section>
`

export default mainSection