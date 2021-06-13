import './headerSticky.css'
import './headerSticky.responsive.css'

class HeaderSticky {
  constructor(block, stickyClass) {
    this.block = block
    this.stickyClass = stickyClass
  }

  init() {
    const el = document.querySelector(this.block)
    const stickyClass = this.stickyClass
    const elHeight = el.offsetHeight

    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= elHeight) {
        el.classList.add(stickyClass)
      } else {
        el.classList.remove(stickyClass)
      }
    })
  }
}

export default HeaderSticky
