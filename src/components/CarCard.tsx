import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CarCardProps {
  name: string;
  year: string;
  transmission: string;
  price: string;
  image: string;
}

export const CarCard = ({ name, year, transmission, price, image }: CarCardProps) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Pesan mobil ${name}. Apakah Tersedia ?`);
    window.open(`https://wa.me/087738000123?text=${text}`, "_blank");
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <span>{year}</span>
            <span className="mx-2">•</span>
            <span>{transmission}</span>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold text-primary">
              Rp {price}
            </span>
            <span className="text-gray-500">/hari</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={handleWhatsApp}
        >
          Pesan
        </Button>
      </CardFooter>
    </Card>
  );
};
