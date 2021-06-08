import Post from './Post'
import '@styles/style'
import TestIcon from './assets/logo-white-back'

const post = new Post('post', TestIcon)

console.log('Post newString::', post.toString())