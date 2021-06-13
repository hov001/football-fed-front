class HomeSliderLooper {
  constructor (data, sliderId, classes = []) {
    this.data = data
    this.sliderId = sliderId
    this.classes = classes
    this.slider = new String("")
    this.sliderNav = new String("")
  }

  render() {
    this.data.forEach((item) => {
      this.slider += `
        <div class="home-slider ${this.classes.join(' ')}" id="${this.sliderId}">
          <a href="${item.link}" style="background-image:url(${item.image})">
            <div class="slide__about-news">
              <h4>${item.title}</h4>
              <p class="slide__about-news__date">${item.date}</p>
            </div>
          </a>
        </div>
      `

      this.sliderNav += `
        <li data-slide="${item.id}" class="${item.id === 0 ? 'current' : ''}">
          ${item.title}
        </li>
      `
    });

    return `
      <div class="slider" id="slider">
        <div class="slider-wrapper" id="slider-wrapper">
          ${this.slider}
        </div>
        <ul class="slider-nav" id="slider-nav">
          ${this.sliderNav}
        </ul>
      </div>
    `
  }
}

export default HomeSliderLooper