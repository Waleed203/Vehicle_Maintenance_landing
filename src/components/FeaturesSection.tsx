import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Wrench, 
  Fuel, 
  Bell, 
  FileText, 
  Calendar, 
  BarChart3, 
  Shield,
  Smartphone,
  Clock
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: "Vehicle Management",
      description: "Add and manage multiple vehicles with detailed profiles, specifications, and maintenance history.",
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Service Tracking",
      description: "Log all maintenance activities, repairs, and services with timestamps, costs, and detailed notes.",
      color: "text-accent"
    },
    {
      icon: Fuel,
      title: "Fuel Fill-ups",
      description: "Track fuel consumption, calculate efficiency, and monitor costs to optimize your vehicle's performance.",
      color: "text-service-green"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss important maintenance with intelligent reminders for oil changes, inspections, and more.",
      color: "text-maintenance-orange"
    },
    {
      icon: FileText,
      title: "PDF Reports",
      description: "Generate comprehensive service history reports in PDF format for warranty claims or resale.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Schedule Planning",
      description: "Plan upcoming maintenance, set custom intervals, and stay ahead of your vehicle's needs.",
      color: "text-accent"
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Cost Savings",
      description: "Save up to 30% on maintenance costs through better planning and preventive care."
    },
    {
      icon: Shield,
      title: "Protect Investment",
      description: "Maintain warranty coverage and preserve your vehicle's resale value with proper documentation."
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your vehicle data anywhere, anytime with our responsive mobile-friendly design."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Streamline maintenance scheduling and reduce time spent managing vehicle records."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Features Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-automotive-dark to-primary bg-clip-text text-transparent">
            Everything You Need to Maintain Your Fleet
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive vehicle maintenance management with powerful features designed to keep your vehicles running at peak performance.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-automotive-dark">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-automotive-dark to-primary rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vehicle Maintenance?
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of vehicle owners who have transformed their maintenance routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
              Start Your Free Trial
            </Button>
            <p className="text-white/70 text-sm mt-4">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;