import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Settings, Cog, Wrench, HeadphonesIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Custom Mould Design",
      description: "Precision tire and inner tube moulds designed to your specifications with advanced CAD/CAM technology"
    },
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: "Machinery Installation",
      description: "Complete installation and commissioning services with on-site technical support and training"
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance programs and repair services to ensure optimal machine performance"
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-primary" />,
      title: "Technical Support",
      description: "24/7 technical support and consultation services from our experienced engineering team"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support services to ensure your success in tire and inner tube manufacturing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
          <p className="text-xl mb-6">
            All our products are manufactured under strict quality control standards 
            and come with comprehensive warranties
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">ISO 9001</div>
              <p>Certified Quality Management</p>
            </div>
            <div>
              <div className="text-3xl font-bold">CE</div>
              <p>European Conformity</p>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}