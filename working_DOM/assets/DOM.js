// step 1 - capturar botao do html e acionar evento de click chamando função changeMode()

function changeMode() {
  console.log(btnSelector)
  return;
}

const btnSelector = document.getElementById('selector');

btnSelector.addEventListener('click', changeMode);
