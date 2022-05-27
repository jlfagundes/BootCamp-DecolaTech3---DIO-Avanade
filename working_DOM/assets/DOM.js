// step 1 - capturar botao do html e acionar evento de click chamando função changeMode()
// step 2 - capturar dos elementos HTML

function changeMode() {
  console.log(body)
  return;
}

const btnSelector = document.getElementById('selector');
const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0]; // retorna um array
const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];


btnSelector.addEventListener('click', changeMode);
