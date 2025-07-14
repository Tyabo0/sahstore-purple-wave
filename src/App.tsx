import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Currency enforcement
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.price').forEach(el => {
        if (!el.textContent?.includes('DZD')) {
          // Check if it's a number before appending DZD
          const priceValue = parseFloat(el.textContent || '');
          if (!isNaN(priceValue)) {
            (el as HTMLElement).innerText = `${priceValue} DZD`;
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
