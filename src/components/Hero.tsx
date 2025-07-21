import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary-light to-accent min-h-[50vh] hero-diagonal overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="mb-4">
              <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                M.Ch (AIIMS) • 9+ Years Experience
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
                Expert Brain & Spine Care in
                <span className="block text-secondary-light">Narnaul</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-4 leading-relaxed">
                Advanced neurosurgical procedures with 24x7 emergency care. Serving Haryana with precision and compassion.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center bg-primary-foreground/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary-foreground">3,500+</div>
                <div className="text-primary-foreground/80 text-xs">Procedures Done</div>
              </div>
              <div className="text-center bg-primary-foreground/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/80 text-xs">Emergency Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="default" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </Button>
              <Button 
                size="default" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="tel:+919548731761" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency Call
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rainbow Hospital, Narnaul</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/08956d48-59aa-4c58-b938-3421caa8be71.png"
                alt="Rainbow Multispeciality Hospital Medical Team"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-success text-success-foreground px-3 py-1 rounded-lg shadow-lg">
                <div className="text-xs font-semibold">Expert Team</div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -top-2 -left-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg transform rotate-3">
              <div className="text-sm font-bold">AIIMS</div>
              <div className="text-xs">Trained</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;