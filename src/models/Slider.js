class Slider {
  constructor(element) {
    this.el = document.querySelector(element)
  }

  init() {
    this.links = this.el.querySelectorAll('#slider-nav li')
    this.wrapper = this.el.querySelector('#slider-wrapper')
    this.navigate()
  }

  navigate() {
    for (let i = 0; i < this.links.length; ++i) {
      let link = this.links[i]
      this.slide(link)
    }
  }

  slide(element) {
    let self = this
    element.addEventListener(
      'click',
      function (e) {
        e.preventDefault()
        let linkDom = this
        self.setCurrentLink(linkDom)
        let index = parseInt(linkDom.getAttribute('data-slide'), 10) + 1
        let currentSlide = self.el.querySelector(
          `.slide:nth-child(${index})`
        )
        self.wrapper.style.left = `-${currentSlide.offsetLeft}px`
      },
      false
    )
  }

  setCurrentLink(link) {
    const parent = link.parentNode
    const a = parent.querySelectorAll('li')

    link.className = 'current'

    for (let j = 0; j < a.length; ++j) {
      let cur = a[j]
      if (cur !== link) {
        cur.className = ''
      }
    }
  }
}

export default Slider
