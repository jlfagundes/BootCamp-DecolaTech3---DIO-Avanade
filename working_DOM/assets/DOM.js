// step 1 - capturar botao do html e acionar evento de click chamando função changeMode()
// step 2 - capturar dos elementos HTML
// step 3 - mudar a classe

function changeMode() {
  changeClass()
}

// criando função com função especifica - Princípio da Responsabilidade Única - SOLID
function changeClass() {
  btnSelector.classList.toggle('dark-mode');
  h1.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
}

const btnSelector = document.getElementById('selector');
const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0]; // retorna um array
const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];


btnSelector.addEventListener('click', changeMode);
