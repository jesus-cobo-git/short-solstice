import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${course.price}</span>
          <Link 
            to={`/courses/${course.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
}