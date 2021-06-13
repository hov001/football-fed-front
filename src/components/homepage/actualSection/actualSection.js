import './actualSection.css'

import block from '@components/blocks/smallNewsBlock/smallNewsBlock.js'
// Banners
import Banner from '@model/banners/banners.js'
import shopBanner from '@data/banners/shopBanner.js'
import onlineBanner from '@data/banners/onlineBanner.js'

const actualSection = `
  <section class="calendar-section">
    <div class="calendar-section__title">
      <h3>Վերջին նորությունները</h3>
      </div>
    </section>
    <section class= "news__section__block">
    <section class= "news__big__block">
        ${block}
    </section>
    <aside class= "news__table__block">
        ${new Banner(shopBanner).init()}
        ${new Banner(onlineBanner).init()}
    </aside>
  </section>
`

export default actualSection