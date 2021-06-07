export default class Post {
  constructor(name) {
    this.name = name
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
      name: this.name,
      date: this.date,
    })
  }
}
