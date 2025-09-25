import { Button } from "@/components/ui/button";
import homeMockup from "@/assets/home-dark.png";
import introMockup from "@/assets/intro1.png";
import statsMockup from "@/assets/stats-dark.png";
import { Car, Wrench, FileText, Bell, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const mockups = [
    { image: homeMockup, alt: "Vehicle Management Dashboard" },
    { image: introMockup, alt: "Track Vehicle Services" },
    { image: statsMockup, alt: "Service Statistics & Analytics" }
  ];

  const [currentMockup, setCurrentMockup] = useState(0);

  const nextMockup = () => {
    setCurrentMockup((prev) => (prev + 1) % mockups.length);
  };

  const prevMockup = () => {
    setCurrentMockup((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-automotive-dark to-primary">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-automotive-dark/90 to-primary/95"></div>

      {/* Grid container */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left side: Content */}
          <div className="text-white space-y-8 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Car className="h-4 w-4" />
              <span className="text-sm font-medium">Complete Vehicle Management</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Keep Your Vehicle
              <span className="block bg-gradient-to-r from-accent to-maintenance-orange bg-clip-text text-transparent">
                Running Perfect
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Track maintenance, schedule reminders, log fuel fill-ups, and download comprehensive service reports.
              Everything you need to maintain your vehicles in one powerful app.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center md:text-left space-y-2">
                <Wrench className="h-8 w-8 text-accent mx-auto md:mx-0" />
                <p className="text-sm font-medium">Service Tracking</p>
              </div>
              <div className="text-center md:text-left space-y-2">
                <Bell className="h-8 w-8 text-accent mx-auto md:mx-0" />
                <p className="text-sm font-medium">Smart Reminders</p>
              </div>
              <div className="text-center md:text-left space-y-2">
                <Car className="h-8 w-8 text-accent mx-auto md:mx-0" />
                <p className="text-sm font-medium">Fleet Management</p>
              </div>
              <div className="text-center md:text-left space-y-2">
                <FileText className="h-8 w-8 text-accent mx-auto md:mx-0" />
                <p className="text-sm font-medium">PDF Reports</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto flex items-center gap-2">
                <Play className="h-5 w-5 fill-current" />
                Get it on Play Store
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-white/30 text-black hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right side: Mobile Mockup */}
          <div className="flex justify-center md:justify-center relative">
            {/* Example stacked mockups */}
            <div className="relative w-96 flex gap-6">
              <img
                src={introMockup}
                alt="App Mockup 2"
                className="w-80 hidden md:block"
              />
              <img
                src={homeMockup}
                alt="App Mockup 1"
                className="w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;