import axios from 'axios';

const TRANSLATE_API_URL = 'https://api.cognitive.microsofttranslator.com/translate';
//utl de la api
const apiKey = process.env.REACT_APP_TRANSLATE_API_KEY;
//const que contiene la api guardada en .env
console.log(apiKey);//para imprimir la api y verificar que se pase correctamente
const location = 'southafricanorth'; // Puedes cambiarlo según tu región de Azure
//region dodnde registramos la api


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
