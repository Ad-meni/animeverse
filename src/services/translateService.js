import axios from 'axios';

const TRANSLATE_API_URL = 'https://api.cognitive.microsofttranslator.com/translate';
const apiKey = process.env.REACT_APP_TRANSLATE_API_KEY;
console.log(apiKey);
const location = 'southafricanorth'; // Puedes cambiarlo según tu región de Azure


export const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(
      TRANSLATE_API_URL,
      [{ text }], // El formato esperado por la API
      {
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Ocp-Apim-Subscription-Region': location,
          'Content-Type': 'application/json',
        },
        params: {
          'api-version': '3.0',
          to: targetLang,
        },
      }
    );
    return response.data[0].translations[0].text; // Devuelve el texto traducido
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
    throw error;
  }
};