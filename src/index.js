import "@styles/style";

// Homepage
import homepage from '@homepage/homepage.js'

const app = document.getElementById('app')

homepage.forEach(section => app.insertAdjacentHTML('beforeend', section))
