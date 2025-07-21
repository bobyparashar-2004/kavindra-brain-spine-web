import { GraduationCap, Award, Clock, MapPin, Users, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2024", title: "Present", desc: "Consultant Neurosurgeon, Rainbow Hospital Narnaul" },
    { year: "2023", title: "Fellowship", desc: "Neuro-endoscopy & Minimally Invasive Spine Surgery" },
    { year: "2021", title: "M.Ch Neurosurgery", desc: "AIIMS Rishikesh - Premier Medical Institute" },
    { year: "2018", title: "MS General Surgery", desc: "Advanced Surgical Training" },
    { year: "2015", title: "MBBS", desc: "PGIMS Rohtak - Medical Foundation" }
  ];

  const achievements = [
    { icon: Award, title: "AIIMS Trained", desc: "M.Ch from AIIMS Rishikesh" },
    { icon: Users, title: "3,500+ Surgeries", desc: "Successful procedures completed" },
    { icon: Clock, title: "24x7 Emergency", desc: "Always available for critical cases" },
    { icon: Heart, title: "Patient-First", desc: "Compassionate care approach" }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image and Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/c77a6a02-79ab-4367-a38f-c4eb4cd72af2.png"
                alt="Dr. Kavindra Singh - About"
                className="w-full rounded-2xl shadow-xl"
              />
              
              {/* Floating Info Cards */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">9+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">M.Ch</div>
                  <div className="text-xs">AIIMS</div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">Qualifications</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>MBBS - PGIMS Rohtak</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>MS General Surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>M.Ch Neurosurgery - AIIMS Rishikesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Fellow in Neuro-endoscopy & MIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-12">
              <h2 className="section-title">
                Meet <span className="gradient-text">Dr. Kavindra Singh</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 9 years of dedicated experience in neurosurgery, Dr. Kavindra Singh brings 
                world-class expertise to Narnaul and surrounding regions. Trained at premier institutions 
                including AIIMS, he combines advanced surgical techniques with compassionate patient care.
              </p>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Dr. Singh specializes in complex brain and spine surgeries, having successfully 
                  completed over 3,500 procedures. His expertise spans from emergency trauma care 
                  to intricate tumor surgeries, always prioritizing patient safety and optimal outcomes.
                </p>
                <p>
                  As a fellow in Neuro-endoscopy and Minimally Invasive Spine Surgery, he brings 
                  the latest surgical innovations to patients in Haryana, ensuring faster recovery 
                  times and minimal surgical trauma.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted-light/50 rounded-lg hover:bg-muted-light transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Timeline */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-6 text-primary flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Professional Journey
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-8 bg-border mt-2"></div>}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-primary">{milestone.year}</span>
                        <span className="text-sm font-semibold text-foreground">{milestone.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Serving Areas
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Providing expert neurosurgical care across Haryana and neighboring regions:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Narnaul", "Rewari", "Mahendragarh", "Bhiwadi", "Dharuhera", "Neemrana", "Alwar", "Gurugram"].map((area) => (
                  <span key={area} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;