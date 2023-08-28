import axios from "axios";
const API_KEY = 'live_YqplPI4xks0dVPKvvTzLlJvWHsGFm2fukvp18PCO5XHKdX6o7GsMD0nVZmTz2m45'


export async function getAllBreedsName() {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export async function getCurrentBreed({ breed= 'none', quantity= '5'}) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?page=1&&breed_ids=${breed}&limit=${quantity}&api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export async function getCatBreed(breed) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=20&api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentBreedType({ breed= 'none', quantity= '5', order='RANDOM', type='gif' }) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?page=1&order=${order}&mime_types=${type}&breed_ids=${breed}&limit=${quantity}&api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};


const API_URL = `https://api.thecatapi.com/v1/`;
export async function showImageToVoteOn(){
  
  const url = `${API_URL}images/search`;
  const response = await fetch(url, {
        headers: {
            'x-api-key': API_KEY
        }
    });
    return await response.json();
}