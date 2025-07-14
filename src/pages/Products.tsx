import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Package, Filter } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Extended placeholder products for the products page
  const placeholderProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Product Name",
    price: "$XX.XX",
    category: i < 4 ? "Home" : i < 8 ? "Car" : "Accessories"
  }));

  const categories = ["All", "Home", "Car", "Accessories"];

  const filteredProducts = selectedCategory === "All" 
    ? placeholderProducts 
    : placeholderProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our complete range of premium accessories and gadgets
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Filter className="h-4 w-4" />
              <span>Filter by category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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

          {/* Empty State Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;