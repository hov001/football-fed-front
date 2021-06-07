import Post from './Post'
import './styles/style.css'
import TestIcon from './assets/logo-white-back.jpg'

const post = new Post('post', TestIcon)

console.log('Post toString::', post.toString())