import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin, Mail, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Toaster } from "./ui/sonner";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/veterinary-clinic-hyderabad" },
    { label: "Doctors", path: "/doctors" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+918897488821" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+91 88974 88821</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Tue-Sun: 1:00 PM - 7:30 PM</span>
            </div>
          </div>
          <a
            href="mailto:cornerstonepetclinic@gmail.com"
            className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span>cornerstonepetclinic@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🐾</span>
              </div>
              <div>
                <div className="font-semibold text-lg">Cornerstone Pet Clinic</div>
                <div className="text-xs text-muted-foreground">We Welcome Your Pets</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/book-appointment">
                <Button size="sm">Book Appointment</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent text-primary font-medium"
                      : "hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link to="/book-appointment">
                  <Button size="md" className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating CTAs */}
      <a
        href="tel:+918897488821"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40 lg:hidden"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
      </a>

      <a
        href="https://wa.me/918897488821"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40 lg:hidden"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🐾</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Cornerstone Pet Clinic</div>
                  <div className="text-sm text-slate-300">We Welcome Your Pets</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                Trusted veterinary care in Hyderabad with 15+ years of experience. Expert treatment for dogs, cats, birds, and exotic pets.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Flat no. 18-21, Sri Sampada Arcade-1, Khajaguda Village, Hyderabad-500019
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+918897488821" className="text-slate-300 hover:text-primary transition-colors">
                    +91 88974 88821
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:cornerstonepetclinic@gmail.com" className="text-slate-300 hover:text-primary transition-colors">
                    cornerstonepetclinic@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-slate-300">Tue-Sun: 1:00 PM - 7:30 PM (Closed Monday)</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-slate-300 hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/veterinary-clinic-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/doctors" className="text-slate-300 hover:text-primary transition-colors">Our Doctors</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-white">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/pet-emergency-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Emergency Care</Link></li>
                <li><Link to="/services/dog-vaccination-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Vaccination</Link></li>
                <li><Link to="/services/pet-surgery-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Surgery</Link></li>
                <li><Link to="/services/cat-treatment-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Cat Treatment</Link></li>
                <li><Link to="/services/bird-vet-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Bird Care</Link></li>
                <li><Link to="/services/pet-grooming-hyderabad" className="text-slate-300 hover:text-primary transition-colors">Grooming</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 Cornerstone Pet Clinic. All rights reserved. | Veterinary Clinic in Hyderabad | Best Pet Hospital in Gachibowli</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
