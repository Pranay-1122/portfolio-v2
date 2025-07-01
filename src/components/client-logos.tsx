export default function ClientLogos() {
  const clients = [
    "MG Motors",
    "Helios",
    "Titan",
    "Glucon-D",
    "Pond's",
    "Campus Sutra"
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-600">Delivering exceptional results across diverse industries</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-xl md:text-2xl font-bold text-gray-800 opacity-60 hover:opacity-80 transition-opacity"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
