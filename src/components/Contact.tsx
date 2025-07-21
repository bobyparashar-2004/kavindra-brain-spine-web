import { Phone, MessageCircle, MapPin, Clock, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    reason: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency & Appointments",
      value: "+91-95487 31761",
      action: "tel:+919548731761",
      description: "24x7 Emergency Care Available"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Consultation",
      value: "Quick Response",
      action: "https://wa.me/919548731761",
      description: "Instant replies for urgent queries"
    },
    {
      icon: MapPin,
      title: "Rainbow Multispeciality Hospital",
      value: "Singhana Road, Narnaul 123001",
      action: "#map",
      description: "Haryana, India"
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      value: "Mon to Fri – 9:00 AM to 4:00 PM",
      action: "#",
      description: "Emergency services 24x7"
    }
  ];

  const nearbyAreas = [
    { city: "Rewari", distance: "45 km", time: "1 hour" },
    { city: "Mahendragarh", distance: "35 km", time: "45 mins" },
    { city: "Bhiwadi", distance: "85 km", time: "1.5 hours" },
    { city: "Dharuhera", distance: "65 km", time: "1.2 hours" },
    { city: "Neemrana", distance: "95 km", time: "1.7 hours" },
    { city: "Alwar", distance: "120 km", time: "2 hours" },
    { city: "Gurugram", distance: "140 km", time: "2.5 hours" }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Schedule your consultation with Dr. Kavindra Singh. We're here to provide 
            expert neurosurgical care when you need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="medical-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <div className="text-lg font-medium text-primary mb-1">{info.value}</div>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                      {info.action !== "#" && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm"
                          asChild
                        >
                          <a href={info.action}>
                            {info.action.includes('tel:') ? 'Call Now' : 
                             info.action.includes('wa.me') ? 'WhatsApp' : 'View Map'}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="bg-emergency text-emergency-foreground rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Medical Emergency?</h3>
              <p className="text-sm mb-4 text-emergency-foreground/90">
                For immediate brain or spine emergencies, call now
              </p>
              <Button 
                size="lg" 
                className="bg-emergency-foreground text-emergency hover:bg-emergency-foreground/90 btn-emergency"
                asChild
              >
                <a href="tel:+919548731761" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency Call
                </a>
              </Button>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Book Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Consultation Type
                    </label>
                    <select 
                      className="w-full p-3 border border-input rounded-md"
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    >
                      <option value="">Select consultation type</option>
                      <option value="brain-surgery">Brain Surgery Consultation</option>
                      <option value="spine-surgery">Spine Surgery Consultation</option>
                      <option value="pediatric">Pediatric Neurosurgery</option>
                      <option value="emergency">Emergency Consultation</option>
                      <option value="second-opinion">Second Opinion</option>
                      <option value="follow-up">Follow-up Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message / Symptoms
                  </label>
                  <Textarea
                    placeholder="Please describe your symptoms or medical concerns..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-primary flex-1"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                    asChild
                  >
                    <a href="https://wa.me/919548731761" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Booking
                    </a>
                  </Button>
                </div>
              </form>

              <div className="mt-6 p-4 bg-muted-light/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> For emergencies, please call directly. 
                  Appointments are typically confirmed within 24 hours.
                </p>
              </div>
            </div>

            {/* Driving Distances */}
            <div className="mt-8 medical-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Driving Distances to Narnaul</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted-light/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{area.city}</div>
                      <div className="text-sm text-muted-foreground">{area.distance}</div>
                    </div>
                    <div className="text-sm text-primary font-medium">{area.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-muted-light rounded-xl p-8 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Hospital Location</h3>
            <p className="text-muted-foreground mb-4">
              Rainbow Multispeciality Hospital<br />
              Singhana Road, Narnaul 123001, Haryana
            </p>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              Open in Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;