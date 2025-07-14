import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Sah Store</h3>
            <p className="text-sm">Algiers, Algeria</p>
            <p className="text-sm">Livraison 58 Wilaya</p>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="https://www.facebook.com/profile.php?id=61575900085211" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="text-black hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/sahstoredz/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="text-black hover:text-primary" />
            </a>
          </div>
          <div className="contact-numbers text-center md:text-right">
            <a href="tel:+213558488197" className="block text-sm hover:text-primary">0558 48 81 97</a>
            <a href="tel:+213561303266" className="block text-sm hover:text-primary">0561 30 32 66</a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Sah Store. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;