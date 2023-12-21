import axios from 'axios';
const baseURL = 'http://localhost:5000/api/';
const promptURL = `${baseURL}prompt`;

export const makeRequest = async (message) => {
  try {
    const response = await axios.post(promptURL, message);
    console.log(response.data); // Adicione este log para depurar, se necessário
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error; // Rejogue o erro para que possa ser tratado onde a função é chamada
  }
};
