const avocados      = document.querySelectorAll('.avocado')
const scoreBoard    = document.querySelector('#score')
let remainingPeeps, score

function randomAvocado() {
  const index = Math.floor(Math.random() * avocados.length)
  return avocados[index]
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function sprout(avocado){
  avocado.classList.add('up')
}

function shrink(avocado){
  avocado.classList.remove('up')
}

function bonk(avocado) {
  shrink(avocado)
  score++
  scoreBoard.textContent = score
}

function peep(avocado) {
  const time = randomTime(200, 2000)
  sprout(avocado)
  setTimeout( () => { shrink(avocado) }, time)
  if(remainingPeeps > 0){
    remainingPeeps--
    const avocado = randomAvocado()
    setTimeout( () => { peep(avocado) }, time )
  }
}

function startGame() {
  remainingPeeps = 10
  score = 0
  scoreBoard.textContent = score
  const avocado = randomAvocado()
  peep(avocado)
}
