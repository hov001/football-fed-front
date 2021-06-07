export default class Post {
  constructor(name, img) {
    this.name = name
    this.img = img
    this.data = new Date()
  }

  toString() {
    return JSON.stringify({
      name: this.name,
      img: this.img,
      date: this.data,
    })
  }
}
