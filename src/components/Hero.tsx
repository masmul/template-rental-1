import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export const Hero = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`saya ingin memesan mobil pada tanggal ${date}. lokasi saya di ${location}. apakah tersedia ?`);
    window.open(`https://wa.me/087738000123?text=${text}`, "_blank");
  };

  return (
    <div className="relative bg-primary py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d21d31f8-298c-4164-b5fb-ca5da0bd29c8.png')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Rental Mobil Murah Hanya Disini
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200">
          Dapatkan mobil baru dan fresh
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Booking Mobil Rental Sekarang
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                placeholder="Pilih Lokasi"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
              />
              <Button className="w-full bg-primary text-white" onClick={handleWhatsApp}>
                Pesan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
