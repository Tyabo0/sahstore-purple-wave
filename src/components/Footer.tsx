import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/562ca32c-219a-40d5-8218-ea4d69cb7994.png" 
              alt="SahStore DZ" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Premium accessories and gadgets for your home and car. 
              Quality products at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-primary transition-colors">
                Cart
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Shipping Policy
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 SahStore DZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;