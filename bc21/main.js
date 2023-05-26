import { divLoad } from "./src/DivLoad.js"

const descriptionCardsElements = document.querySelectorAll('.content p')
const limit = 25

for (let p of descriptionCardsElements) {
  const aboveLimit = p.innerText.length > limit
  const dotOrEmpty = aboveLimit ? '...' : ''

  p.innerText = p.innerText.substring(0, limit) + dotOrEmpty
}

const finishBtn = document.querySelector('#finish-btn')

function createFinishBtnLoading(ev) {
  finishBtn.innerText = ''

  const divLoadIcon = divLoad()
  
  const loadIcon = document.createElement('i')
  loadIcon.classList.add('ph', 'ph-spinner-gap')
  loadIcon.style.fontSize = '1.4em'

  divLoadIcon.appendChild(loadIcon)
  finishBtn.append(divLoadIcon)
  
}



finishBtn.addEventListener('click', (ev) => {
  createFinishBtnLoading(ev)
})