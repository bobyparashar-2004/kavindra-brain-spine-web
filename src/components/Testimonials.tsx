import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Narnaul, Haryana",
      condition: "Brain Tumor Surgery",
      rating: 5,
      text: "Dr. Kavindra Singh saved my life. His expertise in brain surgery is exceptional. The care I received at Rainbow Hospital was world-class. I'm completely recovered now.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      location: "Rewari, Haryana",
      condition: "Spine Surgery",
      rating: 5,
      text: "After years of back pain, Dr. Singh's minimally invasive spine surgery gave me my life back. His gentle approach and expertise made all the difference.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Verma",
      location: "Mahendragarh, Haryana",
      condition: "Emergency Head Injury",
      rating: 5,
      text: "When my son had a serious head injury, Dr. Singh was available 24/7. His quick action and surgical skill saved my child's life. Forever grateful.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sunita Devi",
      location: "Bhiwadi, Rajasthan",
      condition: "Disc Replacement",
      rating: 5,
      text: "The advanced disc replacement surgery Dr. Singh performed was life-changing. No more pain, and I can work normally again. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      location: "Alwar, Rajasthan",
      condition: "Pediatric Neurosurgery",
      rating: 5,
      text: "Dr. Singh treated my daughter's condition with such care and precision. His expertise in pediatric neurosurgery is outstanding. She's perfectly fine now.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Patient Success Stories</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from patients who've received expert neurosurgical care. 
            Their journeys inspire our commitment to excellence.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                  <div className="text-xs text-primary font-medium">{testimonials[currentIndex].condition}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevTestimonial}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextTestimonial}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>


        {/* Video Testimonials Placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Video Testimonials</h3>
          <p className="text-muted-foreground mb-8">Watch real patients share their recovery journeys</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-muted-light rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Brain Surgery Recovery</h4>
              <p className="text-sm text-muted-foreground">Patient shares complete recovery experience</p>
            </div>
            
            <div className="bg-muted-light rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-10 h-10 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Spine Surgery Success</h4>
              <p className="text-sm text-muted-foreground">Back to normal life after surgery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;