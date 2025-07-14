import { useEffect, useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { Product } from "../integrations/supabase/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data as Product[]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <img src={product.image_urls?.[0]} alt={product.name} className="w-full h-48 object-cover" />
          </CardHeader>
          <CardContent>
            <CardTitle>{product.name}</CardTitle>
            <p className="text-lg font-semibold mt-2 price">{product.price}</p>
          </CardContent>
          <CardFooter>
            <Link to={`/products/${product.id}`} className="w-full">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;