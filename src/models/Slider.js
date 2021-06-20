class Slider {
  constructor(element, nextPrev = false) {
    this.el = document.querySelector(element)
    this.nextPrev = nextPrev
  }

  init() {
    this.links = this.el.querySelectorAll('#slider-nav li')
    this.wrapper = this.el.querySelector('#slider-wrapper')
    this.navigate()
    if (this.nextPrev) {
      this.next()
      this.prev()
    }
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
        let currentSlide = self.el.querySelector(`.slide:nth-child(${index})`)
        self.wrapper.style.left = `-${currentSlide.offsetLeft}px`
      },
      false
    )
  }

  next() {
    let self = this
    const nextBtn = self.el.querySelector('#slider-next')
    // console.log(nextBtn)
    nextBtn.addEventListener(
      'click',
      function (e) {
        e.preventDefault()
        let item = self.el.querySelector('.slide')
        let wrapper = self.el.querySelector('#slider-wrapper')
        const wrapperLeft = parseInt(
          self.wrapper.style.left === '' ? 0 : self.wrapper.style.left
        )
        const itemWidth = parseInt(item.offsetWidth)
        const itemMarginRight = parseInt(item.style.marginRight)
        if (
          self.el.offsetWidth + Math.abs(wrapperLeft) + itemWidth >=
          self.wrapper.offsetWidth
        ) {
          self.wrapper.style.left = '0px'
        } else {
          self.wrapper.style.left = `${
            wrapperLeft - (itemWidth + itemMarginRight)
          }px`
        }
      },
      false
    )
  }

  prev() {
    let self = this
    const nextBtn = self.el.querySelector('#slider-prev')
    // console.log(nextBtn)
    nextBtn.addEventListener(
      'click',
      function (e) {
        e.preventDefault()
        let item = self.el.querySelector('.slide')
        let wrapper = self.el.querySelector('#slider-wrapper')
        const wrapperLeft = parseInt(
          self.wrapper.style.left === '' ? 0 : self.wrapper.style.left
        )
        const itemWidth = parseInt(item.offsetWidth)
        const itemMarginRight = parseInt(item.style.marginRight)
        console.log(Math.abs(wrapperLeft))
        if (Math.abs(wrapperLeft) === 0) {
          self.wrapper.style.left = `-${
            self.wrapper.offsetWidth - self.el.offsetWidth - itemMarginRight
          }px`
        } else {
          self.wrapper.style.left = `${
            wrapperLeft + (itemWidth + itemMarginRight)
          }px`
        }
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
