import './banners.css'

class Banner {
  constructor(banner) {
    this.banner = banner
  }

  init() {
    return `
      <div class="banner">
        <a href="${this.banner.link}" class="banner__link" target="_blank" style="background-image:url(${this.banner.image})">
          <p class="banner__text">${this.banner.text}</p>
        </a>
      </div>
    `
  }
}

export default Banner