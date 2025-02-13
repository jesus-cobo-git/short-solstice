import { useEffect, useState } from 'react';

const CursoGrid = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        console.log('⏳ Iniciando petición a Firebase...');
        
        const response = await fetch(
          'https://proyectofinal-f186e-default-rtdb.europe-west1.firebasedatabase.app/cursos.json'
        );
        console.log('📩 Respuesta recibida:', response);
  
        if (!response.ok) {
          throw new Error('❌ Error al cargar los cursos');
        }
  
        const data = await response.json();
        console.log('📌 Datos obtenidos:', data);
  
        if (!Array.isArray(data)) {
          console.error('⚠️ Los datos no son un array:', data);
        }
  
        setCursos(data);
      } catch (err) {
        console.error('🚨 Error en la petición:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCursos();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Cargando cursos...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Imagen de fondo simulada con gradiente */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-32 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">{curso.titulo}</h2>
          </div>

          <div className="p-6">
            <p className="text-gray-700 mb-3">{curso.descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {curso.contenido.map((tema, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tema}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-gray-600 text-sm">
              <span>📅 {curso.fecha}</span>
              <span className="bg-green-100 text-green-600 text-sm font-bold px-3 py-1 rounded-md">
                {curso.nivel}
              </span>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">{curso.precio}€</span>

              {/* 🔗 Enlace directo sin React Router */}
              <a 
                href={`/cursos/${curso.id}`} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Ver Curso
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CursoGrid;
