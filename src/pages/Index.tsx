import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import CustomerReviews from "@/components/CustomerReviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementBar />

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Description / FAQ */}
        <div id="product">
          <ProductDescription />
        </div>

        {/* Reviews */}
        <div id="reviews">
          <CustomerReviews />
        </div>
        
        {/* FAQ Section */}
        <div id="faq" className="mt-16">
          {/* FAQ content is in ProductDescription component */}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Vedsutra</h3>
              <p className="text-sm text-muted-foreground">
                Premium natural wellness products for your health and wellness journey. Transform your life with ancient Ayurvedic wisdom.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Email: care@vedsutra.com
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Customer Support Available
              </p>
            </div>
          </div>
          <div className="border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Vedsutra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
