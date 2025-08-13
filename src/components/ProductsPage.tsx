import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Filter, Grid, List } from "lucide-react";

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const productCategories = [
    {
      name: "Tire Products",
      subcategories: ["CAR TIRE", "TRUCK TIRE", "AGRICULTURE TIRE MOLD", "ATV TIRE MOLD", "BICYCLE TIRE MOLD", "ELECTRIC BICYCLE MOLD", "FORKLIFT TIRE MOLD", "LIGHT TRUCK TIRE MOLD", "MOTOCYCLE TIRE MOLD", "OTR TIRE MOLD"]
    },
    {
      name: "Tire Molds",
      subcategories: ["TIRE MOLD", "MANY PIECES TIRE MOLD", "SEGMENT TIRE MOLD", "SOLID TIRE MOLD", "TWO PIECES TIRE MOLD", "BLADDER MOLD", "RUBBER TRACK MOLD"]
    },
    {
      name: "Tube Products",
      subcategories: ["TUBE MOLD", "inner tube extrusion line", "tube splicer", "agriculture ，OTR tube s...", "motorcycle tube splicer"]
    },
    {
      name: "Machinery",
      subcategories: ["MOLD MACHINERY", "MOLD PROCESS MACHINERY A...", "OPEN MIXING MILL", "RUBBER EXTRUDER", "HORIZONTAL BIAS CUTTER", "Rubber Battch-off Cooler", "tire tread cooling line"]
    },
    {
      name: "Presses & Building",
      subcategories: ["Inner Tube Curing Press", "Agriculture tube press", "bicycle and motorcycle t...", "tire building machine", "BTU bladder turn up tire...", "STU spring turn up tire ...", "TIRE CURING PRESS"]
    },
    {
      name: "Other Products",
      subcategories: ["SHOES", "LEATHER SHOES", "BREATHABLE MESH SHOES", "PROTECTIVE CLOTHING", "PROTECTIVE SUIT", "FACE MASK", "KN95", "guar gum"]
    }
  ];

  const sampleProducts = [
    { name: "CAR TIRE", category: "Tire Products", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", description: "High-quality car tire manufacturing solutions" },
    { name: "TIRE MOLD", category: "Tire Molds", image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop", description: "Precision tire molds for various applications" },
    { name: "tire building machine", category: "Presses & Building", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop", description: "Advanced tire building machinery" },
    { name: "RUBBER EXTRUDER", category: "Machinery", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop", description: "Industrial rubber extrusion equipment" },
    { name: "TUBE MOLD", category: "Tube Products", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", description: "Specialized tube molding solutions" },
    { name: "PROTECTIVE SUIT", category: "Other Products", image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop", description: "High-quality protective clothing" },
    { name: "TRUCK TIRE", category: "Tire Products", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop", description: "Heavy-duty truck tire solutions" },
    { name: "MOLD MACHINERY", category: "Machinery", image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop", description: "Advanced mold processing machinery" },
  ];

  const allCategories = productCategories.flatMap(cat => cat.subcategories);
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of tire machinery, molds, and industrial equipment
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Products
                </Button>
                {productCategories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <Button
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      className="w-full justify-start font-semibold"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </Button>
                    <div className="pl-4 space-y-1">
                      {category.subcategories.slice(0, 3).map((subcat) => (
                        <button
                          key={subcat}
                          className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setSearchTerm(subcat)}
                        >
                          {subcat}
                        </button>
                      ))}
                      {category.subcategories.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{category.subcategories.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{product.name}</h3>
                                <Badge variant="secondary" className="text-xs">
                                  {product.category}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground text-sm">
                                {product.description}
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">No products found matching your criteria</div>
                <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("all")}}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* All Categories Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">All Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.subcategories.map((subcat) => (
                      <div key={subcat} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer py-1 border-b border-border/50 last:border-0">
                        {subcat}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}