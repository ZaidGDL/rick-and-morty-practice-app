import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

const api = {
  getCharacters: (page) => {
    return axios.get(`${API_BASE_URL}/character?page=${page}`);
  },
  getCharacter: (id) => {
    return axios.get(`${API_BASE_URL}/character/${id}`);
  }
}

export default api;
