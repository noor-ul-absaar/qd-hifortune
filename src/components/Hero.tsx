import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigateToProducts?: () => void;
}

export function Hero({ onNavigateToProducts }: HeroProps) {
  const handleProductsClick = () => {
    if (onNavigateToProducts) {
      onNavigateToProducts();
    } else {
      const element = document.getElementById("products");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Professional Tire & Inner Tube Machinery Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Leading manufacturer of high-quality tire and inner tube machinery, 
              along with precision moulds for the rubber industry worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8" onClick={handleProductsClick}>
                Our Products
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&h=400&fit=crop"
              alt="Industrial machinery manufacturing"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}