import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Integrante 1",
      role: "Desarrollador Frontend",
      description: "Hola, soy parte del equipo. Me enfoqué en la estructura de componentes, maquetación e integración de interfaces con React y Tailwind.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Integrante 2",
      role: "Desarrollador Frontend",
      description: "Participé en el diseño visual, manejo de estilos con Tailwind CSS y control de versiones del proyecto.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Integrante 3",
      role: "Desarrollador Frontend",
      description: "Colaboré en la lógica de estados y la navegación general de las vistas de la aplicación.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "Integrante 4",
      role: "Desarrollador Frontend",
      description: "Trabajé en el diseño responsivo asegurando que la tienda se visualice correctamente en dispositivos móviles y de escritorio.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      name: "Matias Emanuel Ramón",
      role: "Desarrollador Frontend",
      description: "Encargado de la coherencia visual, accesibilidad y revisión de componentes reutilizables.",
      image: "/matu.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
       
        {/* Encabezado principal */}
        <header className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center sm:text-left">
          <div className="inline-block bg-[#FF6A00] text-white text-xs font-semibold px-3 py-1 rounded mb-3">
            Equipo de Desarrollo
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 tracking-wide">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            Bienvenido a nuestro proyecto. Este sitio fue creado de forma colaborativa por nuestro equipo de 5 desarrolladores para poner en práctica la construcción de aplicaciones modernas, fluidas y responsivas.
          </p>
        </header>

        {/* Sección de 5 tarjetas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            Conoce al Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-md"
              >
                <img
                  src={member.image}
                  alt={`Foto de perfil de ${member.name}`}
                  className="w-28 h-28 rounded-full object-cover border-4 border-yellow-500 shadow-inner mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <span className="text-sm font-semibold text-[#FF6A00] mt-1">{member.role}</span>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Tecnologías usadas */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">
            Tecnologías usadas:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-medium">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>JavaScript</li>
          </ul>
        </section>

        {/* Botón de retorno al inicio */}
        <div className="text-center pt-2">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow-md transition duration-300"
          >
            Volver al Inicio
          </a>
        </div>

      </div>
    </main>
  );
};

export default AboutUs;