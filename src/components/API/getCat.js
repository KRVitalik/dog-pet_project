import axios from "axios";
const API_KEY = 'live_YqplPI4xks0dVPKvvTzLlJvWHsGFm2fukvp18PCO5XHKdX6o7GsMD0nVZmTz2m45'


export async function getCatVote() {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/votes?limit=10&order=DESC&api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}





