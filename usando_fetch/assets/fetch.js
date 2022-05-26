// step 1 - criar função fetch
// step 2 - criar base HTML e CSS
// step 3 - manipular objeto DOM
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const btnChangeCatElement = document.getElementById('change-cat');
const imgCatElement = document.getElementById('img-cat');

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const jsonConverted = await data.json();
    // console.log(jsonConverted[0]);
    return jsonConverted[0].url;
  } catch(e) {
    console.log(e.message);
  } 
}

const loadImg = async () => {
  imgCatElement.src = await getCats();

}

// criando um listener no botão
btnChangeCatElement.addEventListener('click', loadImg)

// para a página já iniciar com uma imagem
loadImg();
