const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-[#ffc7f3]">
      <h2 className="mb-10 text-4xl font-bold text-center text-[#5c4d8f] z-10 relative">
        Nuestros Servicios
      </h2>
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="mb-4 text-2xl font-semibold text-[#5c4d8f]">Servicio {index + 1}</h3>
            <p className="text-gray-600">Descripción {index + 1}</p>
            <button className="mt-4 px-4 py-2 bg-[#5c4d8f] text-white rounded-lg hover:bg-[#3e2a5f] transition duration-300">
              Más Info
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
