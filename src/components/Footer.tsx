import { Car, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-maintenance-orange rounded-xl flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Vehicle Maintenance</h3>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              The complete solution for managing your vehicle maintenance, tracking services, and staying on top of your automotive needs.
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/70">support@vehiclemaintenance.app</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/70">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Vehicle Maintenance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;