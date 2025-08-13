import { Card, CardContent } from "./ui/card";
import { Award, Globe, Users, Wrench } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "ISO certified manufacturing processes ensuring highest quality standards"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable shipping and support"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Experienced engineers and technicians dedicated to innovation"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Custom Solutions",
      description: "Tailored machinery and moulds to meet specific requirements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            About Qingdao Haifute
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as a leading manufacturer in Qingdao, China, we specialize in 
            providing comprehensive solutions for tire and inner tube production. Our 
            commitment to quality and innovation has made us a trusted partner for 
            businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}