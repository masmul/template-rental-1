import { Car, Key, DollarSign } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Banyak Pilihan Mobil",
      description: "Kami menyediakan banyak pilihan mobil dan MPV, sampai Avanza"
    },
    {
      icon: Key,
      title: "Lepas Kunci",
      description: "Kami menyediakan sewa mobil lepas kunci atau lepas kunci untuk kenyamanan anda"
    },
    {
      icon: DollarSign,
      title: "Harga Murah",
      description: "Kami menyediakan rental mobil dengan harga murah"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
