import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Rental Mobil</h3>
            <p className="text-sm">
              Solusi terbaik untuk kebutuhan transportasi Anda. Nikmati perjalanan Anda
              dengan nyaman dan aman bersama kami.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://localhost:8080/cars"
                  className="hover:text-white"
                >
                  Mobil
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:8080/contact"
                  className="hover:text-white"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rental Mobil. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
