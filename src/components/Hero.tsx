import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary-light to-accent h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-4 items-center h-full">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="mb-4">
              <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                M.Ch (AIIMS) • 9 Years Experience
              </span>
              <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                Expert Brain & Spine Care in
                <span className="block text-secondary-light">Narnaul</span>
              </h1>
              <p className="text-base lg:text-lg text-primary-foreground/90 mb-3 leading-relaxed">
                Advanced neurosurgical procedures with 24x7 emergency care. Serving Haryana with precision and compassion.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="text-center bg-primary-foreground/10 rounded-lg p-2">
                <div className="text-xl font-bold text-primary-foreground">3,500+</div>
                <div className="text-primary-foreground/80 text-xs">Procedures Done</div>
              </div>
              <div className="text-center bg-primary-foreground/10 rounded-lg p-2">
                <div className="text-xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/80 text-xs">Emergency Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="tel:+919548731761" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency Call
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rainbow Hospital, Narnaul</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon to Fri – 9:00 AM to 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative bg-primary-foreground/10 rounded-xl p-3 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/3553c41c-30de-4b4e-8b93-35342a08e852.png"
                alt="Rainbow Multispeciality Hospital Medical Team"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground px-2 py-1 rounded-lg shadow-lg">
                <div className="text-xs font-semibold">Expert Team</div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -top-1 -left-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-lg shadow-lg transform rotate-3">
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