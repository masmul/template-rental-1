import { CarCard } from "@/components/CarCard";

const cars = [
  {
    name: "Daihatsu Ayla",
    year: "2024",
    transmission: "Auto",
    price: "300,000",
    image: "images/ayla.png"
  },
  {
    name: "Daihatsu Agya",
    year: "2024",
    transmission: "Auto",
    price: "300,000",
    image: "images/agya.png"
  },
  {
    name: "Honda Brio",
    year: "2024",
    transmission: "Auto",
    price: "350,000",
    image: "images/brio.png"
  },
  {
    name: "Toyota Avanza",
    year: "2024",
    transmission: "Auto",
    price: "450,000",
    image: "images/avanza.png"
  },
  {
    name: "Mitsubishi Xpander",
    year: "2024",
    transmission: "Auto",
    price: "500,000",
    image: "images/xpander.png"
  },
  {
    name: "Mitsubishi Pajero",
    year: "2024",
    transmission: "Auto",
    price: "1,200,000",
    image: "images/pajero.png"
  },
  {
    name: "Toyota Fortuner",
    year: "2024",
    transmission: "Auto",
    price: "1,000,000",
    image: "images/fortuner.png"
  }
];

const Cars = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Daftar Mobil Rental
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
