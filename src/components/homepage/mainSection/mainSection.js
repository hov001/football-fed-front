import './mainSection.css'
import './mainSection.responsive.css'

// National calendar
import nationalCalendar from '@homepage/nationalCalendar/nationalCalendar.js'

const mainSection = `
  <section class="main-section">
    ${nationalCalendar}
  </section>
`

export default mainSection