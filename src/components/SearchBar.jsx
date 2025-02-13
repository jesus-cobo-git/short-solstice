import { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [cursos, setCursos] = useState([]);
  const [filteredCursos, setFilteredCursos] = useState([]);

  useEffect(() => {
    // Obtener los cursos desde Firebase
    const fetchCursos = async () => {
      try {
        const response = await fetch(
          "https://proyectofinal-f186e-default-rtdb.europe-west1.firebasedatabase.app/cursos.json"
        );
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  // Filtrar cursos en tiempo real
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredCursos([]);
    } else {
      const filtered = cursos.filter((curso) =>
        curso.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCursos(filtered);
    }
  }, [query, cursos]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar curso..."
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Resultados de búsqueda */}
      {filteredCursos.length > 0 && (
        <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {filteredCursos.map((curso) => (
            <li key={curso.id}>
              <a
                href={`/cursos/${curso.id}`}
                className="block px-4 py-2 border-b hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-blue-600">{curso.titulo}</span>
                <p className="text-sm text-gray-600">{curso.descripcion}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
