import '@styles/style'
// Homepage
import homepage from '@homepage/homepage.js'
import '@homepage/homepage.css'

const app = document.getElementById('app')
app.insertAdjacentHTML('beforeend', homepage)