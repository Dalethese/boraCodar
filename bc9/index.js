let moedasL = document.querySelector('.moedas.left')
let moedasR = document.querySelector('.moedas.right')
let moedaEscolhidaL = document.querySelector('.moedaEscolhida.L')
let moedaEscolhidaR = document.querySelector('.moedaEscolhida.R')

moedaEscolhidaL.onclick = () => {
  moedasL.classList.toggle('active')
}
moedaEscolhidaR.onclick = () => {
  moedasR.classList.toggle('active')
}