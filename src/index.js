import '@styles/style'
import '@styles/style.responsive'
// Homepage
import homepage from '@homepage/homepage.js'

const app = document.getElementById('app')
homepage.forEach((section) => app.insertAdjacentHTML('beforeend', section))
