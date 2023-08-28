import axios from "axios";

const api_key = "live_YqplPI4xks0dVPKvvTzLlJvWHsGFm2fukvp18PCO5XHKdX6o7GsMD0nVZmTz2m45"

export async function getBreeds(limit = 10) {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
    const response = await fetch(url, {
    headers: {
      'x-api-key': api_key
    }
  });
  return await response.json();
};

export async function getSearchBreeds(search) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?&breed_ids=${search}&limit=10`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
