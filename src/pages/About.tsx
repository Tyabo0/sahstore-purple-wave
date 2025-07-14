import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                ABOUT US
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At SahStore DZ, we are dedicated to providing high-quality accessories 
                  and gadgets that enhance your daily life. From innovative home appliances 
                  to essential car accessories, we curate products that combine functionality 
                  with cutting-edge design.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We believe in quality over quantity, ensuring every product in our catalog 
                  meets our strict standards for performance, durability, and value.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Why Choose SahStore DZ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Premium quality products</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Competitive pricing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Fast and reliable shipping</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Excellent customer service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="bg-card rounded-xl p-8 border border-border inline-block">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> contact@sahstore-dz.com
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Location:</strong> Algeria
                </p>
                <p className="text-muted-foreground">
                  <strong>Follow us on social media for updates and offers</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;