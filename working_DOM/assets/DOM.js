// step 1 - capturar botao do html e acionar evento de click chamando função changeMode()
// step 2 - capturar dos elementos HTML
// step 3 - mudar a classe
// step 4 - criar class dark-mode
// step 5 - alterar textos do botao e do h1

function changeMode() {
  changeClass(darkModeClass);
  isDarkMode = btnSelector.classList.contains(darkModeClass) && h1.classList.contains(darkModeClass)
  changeText('Dark-Mode', 'Light-Mode', btnSelector, isDarkMode);
  changeText('Light-Mode ON', 'Light-Mode OFF', h1, isDarkMode);
}

// criando função com função especifica - Princípio da Responsabilidade Única - SOLID
function changeClass(className) {
  btnSelector.classList.toggle(className);
  h1.classList.toggle(className);
  body.classList.toggle(className);
  footer.classList.toggle(className);
}

// tornando a função o mais generica possivel  - Princípio de Inversão de Dependências - SOLID
function changeText(text, newText, element, condition) {
  if (condition) {
    element.innerHTML = newText
  } else {
    element.innerHTML = text
  }
}

const darkModeClass = 'dark-mode' // como repete muito boa pratica criar variavel
const btnSelector = document.getElementById('selector');
const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0]; // retorna um array
const footer = document.getElementsByTagName('footer')[0];


btnSelector.addEventListener('click', changeMode);
