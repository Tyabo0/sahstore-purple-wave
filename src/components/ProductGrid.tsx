import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Package } from "lucide-react";

const ProductGrid = () => {
  // Placeholder products for the grid structure
  const placeholderProducts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: "Product Name",
    price: "$XX.XX",
    category: i < 3 ? "Home" : "Car"
  }));

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg">
            High-quality accessories and gadgets for your home and car
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-card">
              <CardContent className="p-6">
                {/* Image Placeholder */}
                <div className="aspect-square bg-muted rounded-lg mb-4 flex flex-col items-center justify-center border-2 border-dashed border-border group-hover:border-primary/50 transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">Upload Image</span>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{product.category}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                  <Button variant="card" className="w-full" disabled>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="glow" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;