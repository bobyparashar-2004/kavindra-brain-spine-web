import { Brain, Stethoscope, Zap, Shield, Clock, Award, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: "Brain Surgery",
      description: "Advanced brain tumor removal, aneurysm treatment, and complex cranial procedures",
      features: ["Tumor Removal", "Aneurysm Repair", "Trauma Surgery", "Infection Treatment"],
      emergencyAvailable: true
    },
    {
      icon: Stethoscope,
      title: "Spine Surgery",
      description: "Minimally invasive spine procedures for herniated discs, fractures, and deformities",
      features: ["Disc Herniation", "Spinal Fusion", "Fracture Repair", "Deformity Correction"],
      emergencyAvailable: true
    },
    {
      icon: Zap,
      title: "Neuro-Endoscopy",
      description: "Minimally invasive procedures using advanced endoscopic techniques",
      features: ["CSF Leak Repair", "Hydrocephalus Treatment", "Tumor Biopsy", "Cyst Drainage"],
      emergencyAvailable: false
    },
    {
      icon: Shield,
      title: "Emergency Neurosurgery",
      description: "24x7 emergency care for critical brain and spine conditions",
      features: ["Trauma Care", "Stroke Surgery", "Emergency Craniotomy", "Critical Monitoring"],
      emergencyAvailable: true
    }
  ];

  const specializations = [
    {
      title: "Brain Tumor Surgery",
      description: "Complete removal of benign and malignant brain tumors using advanced microsurgical techniques.",
      success: "95%"
    },
    {
      title: "Spine Trauma Care",
      description: "Emergency treatment of spinal injuries, fractures, and disc herniations.",
      success: "98%"
    },
    {
      title: "Minimally Invasive Surgery",
      description: "Advanced endoscopic procedures resulting in faster recovery and minimal scarring.",
      success: "97%"
    },
    {
      title: "Pediatric Neurosurgery",
      description: "Specialized care for children with brain and spine conditions.",
      success: "96%"
    }
  ];

  const achievements = [
    { icon: Users, number: "3,500+", label: "Surgeries Completed" },
    { icon: Award, number: "9", label: "Years Experience" },
    { icon: Heart, number: "24x7", label: "Emergency Care" },
    { icon: Brain, number: "AIIMS", label: "Trained Surgeon" }
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
              Our <span className="gradient-text-white">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive neurosurgical care with 9 years of expertise and 3,500+ successful procedures
            </p>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">
                <span className="gradient-text">Expert Neurosurgical Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced surgical procedures with state-of-the-art technology and compassionate care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-primary/10 rounded-xl p-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                          {service.emergencyAvailable && (
                            <span className="bg-emergency text-emergency-foreground text-xs px-2 py-1 rounded-full">
                              24x7
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground shadow-md" asChild>
                          <a href="tel:+919548731761">
                            Book Consultation
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-muted-light/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">
                <span className="gradient-text">Areas of Specialization</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Focused expertise in critical neurosurgical procedures with exceptional success rates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{spec.title}</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {spec.success} Success Rate
                    </div>
                  </div>
                  <p className="text-muted-foreground">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20 bg-emergency text-emergency-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                🚨 Emergency Neurosurgical Care
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Critical brain and spine emergencies require immediate expert care. We're available 24x7 for life-threatening conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emergency hover:bg-white/90 shadow-lg" asChild>
                  <a href="tel:+919548731761" className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Emergency: +91-95487 31761
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emergency shadow-lg" asChild>
                  <a href="https://wa.me/919548731761" className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Quick Consultation
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">Brain Trauma</h4>
                <p className="opacity-90">Immediate surgery for head injuries and bleeding</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">Spine Fractures</h4>
                <p className="opacity-90">Emergency stabilization and repair procedures</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">Stroke Surgery</h4>
                <p className="opacity-90">Time-critical interventions to save brain tissue</p>
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

export default ServicesPage;