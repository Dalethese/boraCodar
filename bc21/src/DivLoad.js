export function divLoad() {
  const divLoadIcon = document.createElement('div')
  divLoadIcon.id = 'load-div'
  divLoadIcon.style.animation = 'loading 2s linear infinite'
  // divLoadIcon.style.borderRadius = '50%'
  divLoadIcon.style.display = 'inline-block'
  divLoadIcon.style.textAlign = 'center'

  return divLoadIcon
}