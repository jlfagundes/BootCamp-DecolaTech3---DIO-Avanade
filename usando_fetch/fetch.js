// step 1 - criar função fetch
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const jsonConverted = await data.json();
    return json.url;
  } catch(e) {
    console.log(e.message)
  } 
}

getCats();
