import { Brain, Zap, Baby, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Brain Surgery",
      description: "Advanced cranial procedures for tumors, aneurysms, and trauma with precision and care.",
      procedures: ["Brain Tumor Removal", "Aneurysm Clipping", "Trauma Surgery", "Epilepsy Surgery"],
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Spine Surgery",
      description: "Comprehensive spinal care from disc problems to complex spinal deformities.",
      procedures: ["Disc Replacement", "Spinal Fusion", "Minimally Invasive", "Scoliosis Correction"],
      color: "text-secondary"
    },
    {
      icon: Baby,
      title: "Pediatric Neurosurgery",
      description: "Specialized care for children's brain and spine conditions with gentle expertise.",
      procedures: ["Hydrocephalus", "Spina Bifida", "Craniosynostosis", "Pediatric Tumors"],
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Minimally Invasive",
      description: "Advanced endoscopic and minimal access techniques for faster recovery.",
      procedures: ["Endoscopic Surgery", "Keyhole Procedures", "Laser Surgery", "Microsurgery"],
      color: "text-success"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Expert Neurosurgical Care</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive brain and spine treatment with state-of-the-art technology and proven surgical expertise across all neurosurgical specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group medical-card text-center">
              <div className="mb-6">
                <area.icon className={`expertise-icon mx-auto ${area.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="space-y-2 mb-6">
                {area.procedures.map((procedure, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 mr-2 text-primary" />
                    {procedure}
                  </div>
                ))}
              </div>

              <Button 
                variant="ghost" 
                size="sm" 
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Facts Bar */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">9+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">3,500+</div>
            <div className="text-primary-foreground/80">Surgeries Done</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-primary-foreground/80">Emergency Care</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-primary-foreground/80">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;