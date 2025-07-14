import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Shopping Cart
              </h1>
            </div>

            {/* Empty Cart State */}
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                    <p className="text-muted-foreground">
                      Add some amazing products to get started!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/products">
                      <Button variant="hero" size="lg" className="group">
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future: Cart items will be displayed here when products are added */}
            <div className="mt-8 bg-muted/20 rounded-lg p-6 border border-dashed border-border">
              <h3 className="font-semibold mb-2 text-primary">Coming Soon:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cart item management</li>
                <li>• Quantity adjustments</li>
                <li>• Price calculations</li>
                <li>• Checkout process</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;