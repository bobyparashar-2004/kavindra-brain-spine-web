import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Dr. Singh", href: "#about" },
    { name: "Brain Surgery", href: "#expertise" },
    { name: "Spine Surgery", href: "#expertise" },
    { name: "Emergency Care", href: "#contact" },
    { name: "Patient Guide", href: "#patient-guide" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const services = [
    "Brain Tumor Surgery",
    "Spine Surgery", 
    "Pediatric Neurosurgery",
    "Minimally Invasive Surgery",
    "Emergency Trauma Care",
    "Neuro-endoscopy"
  ];

  const locations = [
    "Narnaul", "Rewari", "Mahendragarh", 
    "Bhiwadi", "Dharuhera", "Neemrana", "Alwar"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/9c589c52-9d81-48c8-843a-3762b7ce0c5b.png" 
                alt="Dr. Kavindra Singh Logo"
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold text-xl">Dr. Kavindra Singh</h3>
                <p className="text-sm text-primary-foreground/80">M.Ch (AIIMS) Neurosurgeon</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Expert brain and spine care in Narnaul with 9+ years of experience 
              and 3,500+ successful surgeries. Your health is our priority.
            </p>

            {/* Emergency Contact */}
            <div className="bg-primary-foreground/10 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-3 text-primary-foreground">Emergency 24x7</h4>
              <div className="space-y-2">
                <a href="tel:+919548731761" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91-95487 31761</span>
                </a>
                <a href="https://wa.me/919548731761" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="bg-primary-foreground/20 p-2 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/20 p-2 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/20 p-2 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Rainbow Multispeciality Hospital</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Singhana Road, Narnaul 123001<br />
                    Mahendragarh, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">Clinic Hours</p>
                  <p className="text-primary-foreground/80 text-sm">Mon-Sat: 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-foreground/80 text-sm">info@drkavindrasing.com</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-foreground/20 px-2 py-1 rounded text-xs"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Dr. Kavindra Singh. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Medical Disclaimer
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>This website is for informational purposes only and does not constitute medical advice. 
               Always consult with a qualified healthcare provider for medical concerns.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;