import { Phone, MessageCircle, MapPin, Clock, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Helpline",
      details: ["+91-95487 31761", "+91-85880 17761"],
      action: "Call Now",
      href: "tel:+919548731761",
      color: "bg-red-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick consultation", "24x7 Available"],
      action: "Message",
      href: "https://wa.me/919548731761",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Clinic Location",
      details: ["Rainbow Hospital", "Narnaul, Haryana"],
      action: "Get Directions",
      href: "#",
      color: "bg-primary"
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: ["Mon to Fri: 9:00 AM - 4:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Book Appointment",
      href: "tel:+919548731761",
      color: "bg-secondary"
    }
  ];

  const emergencyServices = [
    "24x7 Emergency Brain Surgery",
    "Spine Trauma Care",
    "Critical Neurosurgical Procedures",
    "Emergency Consultation",
    "Ambulance Coordination"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text-white">Contact Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              24x7 Emergency Care Available - We're here when you need us most
            </p>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-emergency text-emergency-foreground py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">🚨 Medical Emergency?</h2>
              <p className="text-lg mb-6">Don't wait - Call immediately for emergency neurosurgical care</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emergency hover:bg-white/90 shadow-lg" asChild>
                  <a href="tel:+919548731761" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency: +91-95487 31761
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emergency shadow-lg" asChild>
                  <a href="https://wa.me/919548731761" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">
                <span className="gradient-text">Get In Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach us for consultations, emergencies, and appointments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                    <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground shadow-md" asChild>
                      <a href={info.href}>
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Emergency Services Available</h3>
                <div className="space-y-4">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted-light/50 rounded-lg">
                      <div className="w-2 h-2 bg-emergency rounded-full"></div>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-emergency text-emergency-foreground hover:bg-emergency/90 shadow-lg" asChild>
                    <a href="tel:+919548731761" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call Emergency Line
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Clinic Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Rainbow Hospital<br />
                        Narnaul, Haryana<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Monday to Friday: 9:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Appointments</h4>
                      <p className="text-muted-foreground">
                        Call ahead for scheduled consultations<br />
                        Emergency cases seen immediately
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Languages</h4>
                      <p className="text-muted-foreground">
                        Hindi, English, Haryanvi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default ContactPage;