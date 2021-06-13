import './generalNews.css'
import './generalNews.responsive.css'

import block from '@components/blocks/bigNewsBlock/bigNewsBlock.js'
import tourTable from '@components/tourTable/table.js'
import tourTableTeam from '@components/tourTableTeam/tourTableTeam.js'

const generalNews = `
    <section class="calendar-section">
        <div class="calendar-section__title">
        <h3>Նորություններ</h3>
        </div>
    </section>
    <section class= "news__section__block">
        <section class= "news__big__block">
            ${block}
        </section>
        <aside class= "news__table__block">
            ${tourTable}
            ${tourTableTeam}
        </aside>
    </section>
    
`

export default generalNews