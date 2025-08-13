import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, TrendingUp } from "lucide-react";

interface HotProductsProps {
  onNavigateToProducts: () => void;
}

export function HotProducts({ onNavigateToProducts }: HotProductsProps) {
  const hotProducts = [
    {
      id: 1,
      name: "Tire Building Machine",
      category: "Tire Machinery",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      description: "Advanced radial tire building machine with automated operation",
      features: ["High Precision", "Automated", "Energy Efficient"],
      isHot: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Car Tire Mold",
      category: "Tire Mold",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Precision car tire molds for various sizes and patterns",
      features: ["Custom Design", "Durable", "High Quality"],
      isHot: true,
      rating: 4.8
    },
    {
      id: 3,
      name: "Tire Curing Press",
      category: "Tire Machinery",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop",
      description: "High-efficiency tire vulcanizing press with precise control",
      features: ["Uniform Heating", "Auto Demolding", "CE Certified"],
      isHot: true,
      rating: 4.9
    },
    {
      id: 4,
      name: "Motorcycle Tire Mold",
      category: "Tire Mold",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
      description: "Specialized motorcycle tire molds for various bike types",
      features: ["Lightweight", "Precision", "Quick Release"],
      isHot: true,
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Hot Products
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our most popular and trending machinery and molds trusted by customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hotProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {product.isHot && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive" className="bg-orange-500 hover:bg-orange-600">
                    🔥 HOT
                  </Badge>
                </div>
              )}
              
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onNavigateToProducts}
            className="px-8 bg-orange-500 hover:bg-orange-600"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}