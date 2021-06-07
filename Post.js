class Post {
  constructor(name) {
    this.name = name
    this.date = newDate()
  }

  toString() {
    return JSON.stringify({
      name: this.name,
      date: this.date,
    })
  }
}
