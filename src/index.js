import '@styles/style'
// Homepage
import header from '@components/header/header.js'
import '@components/header/header.css'

const app = document.getElementById('app')
app.insertAdjacentHTML('beforeend', header)