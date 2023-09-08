//falta colocar as animações no css quando interagir com o biscoito

const chineseProverb = [
  'O aprendizado é como o horizonte: não há limites.',
  'Não há que ser forte, há que ser flexível.',
  ' Limitações são fronteiras criadas apenas pela nossa mente.',
  'O cão não ladra por valentia e sim por medo.',
  'Procure acender uma vela em vez de amaldiçoar a escuridão.',
  ' A palavra é prata, o silêncio é ouro.',
  'Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.',
  'Um pouco de perfume sempre fica nas mãos de quem oferece flores.',
  'O homem só envelhece quando os lamentos substituem seus sonhos.',
  'A persistência realiza o impossível.'
]

//variaveis
const fortuneCookie = document.querySelector('#fortune-cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTryAgain = document.querySelector('#try-again')
const pTextBox = document.querySelector('#chinese-proverb')
let randomProverb = Math.round(Math.random() * 10)

//eventos
fortuneCookie.addEventListener('click', clickButton)
btnTryAgain.addEventListener('click', tryAgain)

//funções
function clickButton(event) {
  event.preventDefault()
  pTextBox.innerHTML = chineseProverb[randomProverb]

  toggleScreen()
}

function tryAgain() {
  toggleScreen()
  randomProverb = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
