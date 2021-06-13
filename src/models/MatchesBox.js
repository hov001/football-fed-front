class MatchesBox {
  constructor(data, classes = []) {
    this.data = data
    this.classes = classes
    this.box = new String('')
  }

  render() {
    this.data.forEach((item) => {
      this.box += `
        <!-- National calendar item -->
        <div class="matchesBox ${this.classes.join(' ')}" id="${item.id}" style="margin-right: 55px">
          <a href="${item.link}">
            <div class="matchesBox__header">
              <p class="matchesBox__header__discipline">${item.status}</p>
              <p class="matchesBox__header__tournament">
                ${item.tournament} ${item.cup !== undefined ? `: ${item.cup}` : ''}
              </p>
            </div>
            <div class="matchesBox__main">
              <div class="matchesBox__main__team">
                <img src="${item.teamOne.flag}" alt="">
                <span>${item.teamOne.name}</span>
              </div>
              <div class="matchesBox__main__score">
                <span>
                  ${item.teamOne.score !== undefined && item.teamTwo.score !== undefined ? 
                    item.teamOne.score + ' : ' + item.teamTwo.score :
                    '  -  '
                  }
                </span>
              </div>
              <div class="matchesBox__main__team">
                <span>${item.teamTwo.name}</span>
                <img src="${item.teamTwo.flag}" alt="">
              </div>
            </div>
            <div class="matchesBox__footer">
              <p class="matchesBox__footer__date">${item.date}</p>
              <p class="matchesBox__footer__stadium">${item.stadium}</p>
            </div>
          </a>
        </div>
        <!-- National calendar item end -->
      `
    })

    return this.box
  }
}

export default MatchesBox
