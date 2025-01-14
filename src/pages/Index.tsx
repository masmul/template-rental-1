import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CarCard } from "@/components/CarCard";

const featuredCars = [
  {
    name: "Toyota Avanza",
    year: "2024",
    transmission: "Auto",
    price: "450,000",
    image: "/images/avanza.png"
  },
  {
    name: "Honda HRV",
    year: "2024",
    transmission: "Auto",
    price: "350,000",
    image: "images/hrv.png"
  },
  {
    name: "Daihatsu Ayla",
    year: "2024",
    transmission: "Auto",
    price: "300,000",
    image: "images/ayla.png"
  }
];

const Index = () => {
  return (
    <div>
      <Hero />
      <Services />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mobil Rental Kami Yang Siap Anda Pakai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
