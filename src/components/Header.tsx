import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Dr", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Patient Guide", href: "/#patient-guide" },
    { name: "Stories", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-emergency text-emergency-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          🚨 24x7 Emergency Brain & Spine Care Available
          <a href="tel:+919548731761" className="underline hover:no-underline">
            Call: +91-95487 31761
          </a>
        </span>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/9c589c52-9d81-48c8-843a-3762b7ce0c5b.png" 
                alt="Dr. Kavindra Singh - Neurosurgeon Logo"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">Dr. Kavindra Singh</span>
                <span className="text-xs text-muted-foreground">Brain & Spine Surgeon</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link ${location.pathname === item.href ? 'text-primary font-medium' : ''}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+919548731761" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" className="btn-primary" asChild>
                <a href="https://wa.me/919548731761" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  item.href.startsWith('/#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="nav-link py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-link py-2 ${location.pathname === item.href ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href="tel:+919548731761" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </Button>
                  <Button size="sm" className="btn-primary flex-1" asChild>
                    <a href="https://wa.me/919548731761" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;