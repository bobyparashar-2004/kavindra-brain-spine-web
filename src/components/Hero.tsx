import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary-light to-accent min-h-[70vh] hero-diagonal overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="mb-6">
              <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                M.Ch (AIIMS) • 9+ Years Experience
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Expert Brain & Spine Care in
                <span className="block text-secondary-light">Narnaul</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Advanced neurosurgical procedures with 24x7 emergency care. Serving Haryana with precision and compassion.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-primary-foreground/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-foreground">3,500+</div>
                <div className="text-primary-foreground/80 text-sm">Procedures Done</div>
              </div>
              <div className="text-center bg-primary-foreground/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/80 text-sm">Emergency Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="tel:+919548731761" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency Call
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 text-primary-foreground/80">
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

          {/* Doctor Image */}
          <div className="relative">
            <div className="relative bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/c77a6a02-79ab-4367-a38f-c4eb4cd72af2.png"
                alt="Dr. Kavindra Singh - Leading Neurosurgeon in Narnaul"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Available Today</div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg shadow-lg transform rotate-3">
              <div className="text-lg font-bold">AIIMS</div>
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