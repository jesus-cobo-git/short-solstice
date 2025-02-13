// firebase.js
const API_URL = 'https://proyectofinal-f186e-default-rtdb.europe-west1.firebasedatabase.app/cursos.json';

export const fetchCursos = async () => {
  try {
    const response = await fetch(API_URL);  // Sustituye con la URL correcta de tu API
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    const data = await response.json();  // Convierte la respuesta en JSON
    console.log('Respuesta de la API:', data);  // Imprime la respuesta en consola para depuración
    return data;  // Asegúrate de que la API retorne el JSON completo
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    throw error;  // Lanza el error para manejarlo más arriba
  }
};

