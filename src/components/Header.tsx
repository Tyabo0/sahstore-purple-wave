import { Link } from "react-router-dom";
import { Facebook, Instagram, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/public/logo.png" alt="Sah Store" style={{ maxHeight: "50px" }} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-black hover:text-primary">Home</Link>
          <Link to="/products" className="text-black hover:text-primary">Products</Link>
          <Link to="/about" className="text-black hover:text-primary">About Us</Link>
          <Link to="/contact" className="text-black hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61575900085211" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-black hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/sahstoredz/" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="text-black hover:text-primary" />
          </a>
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>
          <Link to="/login">
            <Button>Admin Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;