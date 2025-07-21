import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyActions = () => {
  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-primary-dark z-50">
        <div className="flex">
          <a 
            href="tel:+919548731761" 
            className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call</span>
          </a>
          
          <a 
            href="https://wa.me/919548731761" 
            className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-primary-dark transition-colors border-l border-primary-dark"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          
          <a 
            href="#contact" 
            className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-primary-dark transition-colors border-l border-primary-dark"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Book</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className="hidden md:block fixed right-6 bottom-6 z-50">
        <div className="flex flex-col gap-3">
          <Button 
            size="lg" 
            className="btn-primary shadow-xl rounded-full w-14 h-14 p-0 hover:scale-110 transition-all duration-300"
            asChild
          >
            <a href="tel:+919548731761">
              <Phone className="w-6 h-6" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white shadow-xl rounded-full w-14 h-14 p-0 hover:scale-110 transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/919548731761">
              <MessageCircle className="w-6 h-6" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            className="btn-secondary shadow-xl rounded-full w-14 h-14 p-0 hover:scale-110 transition-all duration-300"
            asChild
          >
            <a href="#contact">
              <Calendar className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyActions;