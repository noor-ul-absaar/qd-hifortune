import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      category: "Tire Machinery",
      items: [
        {
          name: "Tire Building Machine",
          description: "Advanced tire building machines for radial and bias tire production",
          image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
          features: ["Automated operation", "High precision", "Multiple tire sizes"]
        },
        {
          name: "Tire Curing Press",
          description: "High-efficiency tire vulcanizing presses with precise temperature control",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          features: ["Energy efficient", "Uniform heating", "Automated demolding"]
        }
      ]
    },
    {
      category: "Inner Tube Machinery",
      items: [
        {
          name: "Inner Tube Extruder",
          description: "Precision extruders for inner tube production with consistent wall thickness",
          image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop",
          features: ["Precise thickness control", "High output", "Energy saving"]
        },
        {
          name: "Inner Tube Curing Chamber",
          description: "Automated curing systems for inner tube vulcanization",
          image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
          features: ["Uniform curing", "Batch processing", "Quality control"]
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of machinery and equipment for tire and inner tube manufacturing
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((product, productIndex) => (
                <Card key={productIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}