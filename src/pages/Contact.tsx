import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Kami siap membantu Anda dengan layanan rental mobil terbaik
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-gray-600">+62 877-3800-0123</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-gray-600">
                    alamat kamu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Nama Lengkap" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Input placeholder="No. Telepon" />
              </div>
              <div>
                <Textarea placeholder="Pesan" rows={4} />
              </div>
              <Button className="w-full bg-primary">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
