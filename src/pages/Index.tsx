import { useEffect, useState } from "react";
    import { Hero } from "@/components/Hero";
    import { Services } from "@/components/Services";
    import { CarCard } from "@/components/CarCard";
    import { fetchSupabase } from "@/lib/supabase";
    import Footer from "@/components/Footer";


    const Index = () => {
      const [featuredCars, setFeaturedCars] = useState([]);

      useEffect(() => {
        const fetchCars = async () => {
          const data = await fetchSupabase("cars");
          setFeaturedCars(data);
        };

        fetchCars();
      }, []);

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
          <Footer />
        </div>
      );
    };

    export default Index;
