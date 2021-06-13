class MobileSidebarLogic {
  constructor(btnId, boxId) {
    this.btnId = btnId
    this.boxId = boxId
  }

  init() {
    const btn = document.getElementById(this.btnId)
    const box = document.getElementById(this.boxId)
    const body = document.querySelector('body')

    btn.addEventListener('click', () => {
      if (btn.classList.contains('sidebar-opened')) {
        btn.classList.remove('sidebar-opened')
        box.style.display = 'none'
        body.style.overflow = 'scroll'
      } else {
        btn.classList.add('sidebar-opened')
        box.style.display = 'flex'
        body.style.overflow = 'hidden'
      }
    })
  }
}

export default MobileSidebarLogic
