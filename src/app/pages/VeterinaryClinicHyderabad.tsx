import { Link } from "react-router";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { Siren, Syringe, Stethoscope, PawPrint, Bird, Scissors, Clock, MapPin, Phone } from "lucide-react";

export function VeterinaryClinicHyderabad() {
  const services = [
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent pet health situations",
      link: "/services/pet-emergency-hyderabad"
    },
    {
      icon: Syringe,
      title: "Dog & Cat Vaccination",
      description: "Complete vaccination schedules for dogs, cats, and other pets",
      link: "/services/dog-vaccination-hyderabad"
    },
    {
      icon: Stethoscope,
      title: "Advanced Surgery",
      description: "Soft tissue, orthopedic, and neuro surgery by expert surgeons",
      link: "/services/pet-surgery-hyderabad"
    },
    {
      icon: PawPrint,
      title: "Cat Treatment",
      description: "Specialized feline medicine and care for all cat health needs",
      link: "/services/cat-treatment-hyderabad"
    },
    {
      icon: Bird,
      title: "Bird & Wildlife Care",
      description: "Expert treatment for birds and exotic avian species",
      link: "/services/bird-vet-hyderabad"
    },
    {
      icon: Scissors,
      title: "Pet Grooming",
      description: "Professional grooming services for hygiene and appearance",
      link: "/services/pet-grooming-hyderabad"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Veterinary Clinic in Hyderabad</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Cornerstone Pet Clinic provides comprehensive veterinary services in Gachibowli, Hyderabad. With 15+ years of experience, we offer expert care for dogs, cats, birds, and exotic pets.
            </p>
            <Button size="lg">Book Appointment</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Our Veterinary Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6">Visit Our Clinic</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Flat no. 18-21, Sri Sampada Arcade-1<br />
                      Khajaguda Village, Serilingampally Mandal<br />
                      Hyderabad, Telangana - 500019
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Clinic Hours</h4>
                    <p className="text-muted-foreground">
                      Tuesday - Sunday: 1:00 PM - 7:30 PM<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Contact</h4>
                    <p className="text-muted-foreground">
                      Phone: +91 88974 88821<br />
                      Email: cornerstonepetclinic@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3489!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjAnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cornerstone Pet Clinic Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose max-w-none space-y-6">
            <h2 className="text-3xl">About Cornerstone Pet Clinic - Best Veterinary Clinic in Hyderabad</h2>

            <p className="text-muted-foreground leading-relaxed">
              Cornerstone Pet Clinic is a premier <strong>veterinary clinic in Hyderabad</strong>, serving the Gachibowli, Khajaguda, and surrounding areas since 2017. Our clinic is dedicated to providing comprehensive healthcare services for all types of pets including dogs, cats, birds, rabbits, and exotic animals.
            </p>

            <h3 className="text-2xl mt-8">Expert Veterinary Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team is led by <Link to="/doctors/dr-abhishek-kalundia" className="text-primary hover:underline">Dr. Abhishek Kalundia</Link> (PhD Veterinary Medicine, 15+ years experience) and <Link to="/doctors/dr-neelima-kalundia" className="text-primary hover:underline">Dr. Neelima Prabha Kalundia</Link> (MVSc Surgery & Radiology, 14+ years experience). Their combined expertise ensures your pets receive the best possible medical care.
            </p>

            <h3 className="text-2xl mt-8">Comprehensive Veterinary Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              We offer a wide range of services including:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <Link to="/services/pet-emergency-hyderabad" className="text-primary hover:underline">Emergency veterinary care</Link> - available for urgent cases</li>
              <li>• <Link to="/services/dog-vaccination-hyderabad" className="text-primary hover:underline">Vaccination programs</Link> - complete immunization schedules</li>
              <li>• <Link to="/services/pet-surgery-hyderabad" className="text-primary hover:underline">Advanced surgical procedures</Link> - soft tissue, orthopedic, and neuro surgery</li>
              <li>• <Link to="/services/cat-treatment-hyderabad" className="text-primary hover:underline">Feline medicine</Link> - specialized cat healthcare</li>
              <li>• <Link to="/services/bird-vet-hyderabad" className="text-primary hover:underline">Avian medicine</Link> - expert bird treatment</li>
              <li>• Dental care and oral surgery</li>
              <li>• Dermatology and skin treatments</li>
              <li>• Gastroenterology services</li>
              <li>• Blood transfusion facilities</li>
              <li>• <Link to="/services/pet-grooming-hyderabad" className="text-primary hover:underline">Professional pet grooming</Link></li>
            </ul>

            <h3 className="text-2xl mt-8">Why Choose Us?</h3>
            <p className="text-muted-foreground leading-relaxed">
              As one of the most trusted <strong>pet hospitals in Hyderabad</strong>, we combine medical excellence with compassionate care. Our modern facility is equipped with advanced diagnostic and treatment equipment, ensuring accurate diagnoses and effective treatments. We understand that your pets are family members, and we treat them with the same love and care you would.
            </p>

            <h3 className="text-2xl mt-8">Serving Hyderabad Communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conveniently located in Khajaguda, we serve pet owners from Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Kondapur, and other nearby areas. Whether you're searching for a "vet near me" or need specialized veterinary services, Cornerstone Pet Clinic is your trusted partner in pet healthcare.
            </p>

            <div className="bg-accent/50 rounded-xl p-8 mt-8">
              <h3 className="text-2xl mb-4">Book Your Appointment Today</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our experienced veterinarians. Call us at +91 88974 88821 or book online.
              </p>
              <Button size="lg">Book Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
