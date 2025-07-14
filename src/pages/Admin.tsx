import { useEffect, useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { Product } from "../integrations/supabase/types";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const AdminPage = () => {
  const [stats, setStats] = useState({ revenue: 0, totalOrders: 0, products: 0 });
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0, quantity: 0, image_urls: [] as string[] });

  useEffect(() => {
    // Fetch initial data
    fetchProducts();
    // In a real app, you'd fetch orders and calculate revenue
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error("Error fetching products", error);
    else {
      setProducts(data as Product[]);
      setStats(prev => ({ ...prev, products: data.length }));
    }
  };

  const handleAddProduct = async () => {
    const { data, error } = await supabase.from("products").insert([newProduct]);
    if (error) console.error("Error adding product", error);
    else {
      fetchProducts();
      // Reset form
      setNewProduct({ name: "", description: "", price: 0, quantity: 0, image_urls: [] });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0 DZD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.products}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Product Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Product</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
              <Textarea placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
              <Input type="number" placeholder="Price (DZD)" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
              <Input type="number" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })} />
              {/* Add image upload functionality here */}
              <Button onClick={handleAddProduct}>Add Product</Button>
            </div>
          </DialogContent>
        </Dialog>
        <Card className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price} DZD</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Order Management</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Orders will be mapped here */}
              <TableRow>
                <TableCell colSpan={5} className="text-center">No orders yet.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
