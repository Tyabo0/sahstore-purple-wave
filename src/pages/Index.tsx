import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { Button } from "../components/ui/button";

const Index = () => {
  return (
    <div>
      <section className="bg-primary text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sah Store</h1>
        <p className="text-lg mb-8">Your one-stop shop for car cleaning, home gadgets, and accessories.</p>
        <Link to="/products">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <ProductGrid />
        </div>
      </section>
    </div>
  );
};

export default Index;
