import { Link } from "react-router";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { DoctorCard } from "../components/DoctorCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Stethoscope, Siren, Syringe, PawPrint, Bird, Scissors, Heart, Award, ArrowRight } from "lucide-react";

export function Home() {
  const services = [
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent pet health situations",
      link: "/services/pet-emergency-hyderabad"
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description: "Complete vaccination schedules for dogs, cats, and other pets",
      link: "/services/dog-vaccination-hyderabad"
    },
    {
      icon: Stethoscope,
      title: "Surgery",
      description: "Advanced surgical procedures including soft tissue and orthopedic surgery",
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
      title: "Bird Care",
      description: "Expert treatment for birds and exotic avian species",
      link: "/services/bird-vet-hyderabad"
    },
    {
      icon: Scissors,
      title: "Grooming",
      description: "Professional pet grooming services for hygiene and appearance",
      link: "/services/pet-grooming-hyderabad"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      petName: "Rocky",
      rating: 5,
      text: "Dr. Abhishek saved my dog's life during an emergency. His expertise and compassionate care are unmatched. Highly recommend Cornerstone Pet Clinic!",
      image: "https://images.unsplash.com/photo-1553322378-eb94e5966b0c?w=100&h=100&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      petName: "Whiskers",
      rating: 5,
      text: "Best veterinary clinic in Hyderabad! Dr. Neelima treated my cat with such care. The staff is friendly and the facility is very clean.",
      image: "https://images.unsplash.com/photo-1651409701894-420edc9c1bd2?w=100&h=100&fit=crop"
    },
    {
      name: "Ananya Reddy",
      petName: "Bruno",
      rating: 5,
      text: "I've been bringing my pets here for years. The doctors are knowledgeable, caring, and always available for emergencies. Truly the best in Gachibowli!",
      image: "https://images.unsplash.com/photo-1553322378-eb94e5966b0c?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Premier Veterinary Care in Hyderabad
                <span className="sr-only">, Best Veterinary Clinic in Hyderabad</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert veterinary care with 15+ years of experience. Compassionate treatment for dogs, cats, birds, and exotic pets in Gachibowli, Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book-appointment">
                  <Button size="lg">
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+918897488821">
                    Call +91 88974 88821
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-semibold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Pets</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-primary mb-1">4.3</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?w=800&h=1000&fit=crop"
                  alt="Veterinarian with dog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Emergency Care Available</div>
                    <div className="text-sm text-muted-foreground">24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Doctors */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm">
              <Award className="w-4 h-4" />
              <span>Expert Veterinarians</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Experienced Doctors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of highly qualified veterinarians brings decades of combined experience in animal healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <DoctorCard
              name="Dr. Abhishek Kalundia"
              role="Veterinary Physician"
              experience="15+ Years Experience"
              qualifications={["BVSc & AH", "MVSc", "PhD Veterinary Medicine"]}
              image="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?w=400&h=500&fit=crop"
              link="/doctors/dr-abhishek-kalundia"
            />
            <DoctorCard
              name="Dr. Neelima Prabha Kalundia"
              role="Veterinary Surgeon"
              experience="14+ Years Experience"
              qualifications={["BVSc & AH", "MVSc (Surgery & Radiology)", "Advanced Surgical Training"]}
              image="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?w=400&h=500&fit=crop"
              link="/doctors/dr-neelima-kalundia"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Comprehensive Veterinary Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine check-ups to emergency care, we provide complete healthcare solutions for your beloved pets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/book-appointment">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Cornerstone Pet Clinic</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest standard of veterinary care in Hyderabad
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Experienced Veterinarians</h3>
              <p className="text-muted-foreground">
                15+ years of combined expertise in treating all types of pets with advanced medical knowledge
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                We treat every pet with love and care, ensuring their comfort throughout treatment
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Advanced Treatment</h3>
              <p className="text-muted-foreground">
                State-of-the-art medical equipment and modern treatment protocols for optimal care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Pet Owners Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of happy pet parents across Hyderabad
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Veterinary Clinic in Hyderabad - Cornerstone Pet Clinic</h2>
          <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              Looking for <strong>comprehensive veterinary services in Hyderabad</strong>? Cornerstone Pet Clinic, located in Gachibowli, offers expert veterinary care with over 15 years of experience. Our expert team, led by Dr. Abhishek Kalundia (PhD Veterinary Medicine) and Dr. Neelima Prabha Kalundia (MVSc Surgery & Radiology), provides specialized care for dogs, cats, birds, and exotic pets.
            </p>
            <p>
              We are recognized as one of the top <strong>pet hospitals in Hyderabad</strong>, offering emergency care, advanced surgery, vaccination programs, dental care, grooming services, and specialized treatments. Our state-of-the-art facility in Khajaguda ensures your pets receive the highest quality medical attention in a compassionate environment.
            </p>
            <p>
              Whether you need routine check-ups, emergency veterinary services, or specialized treatments like soft tissue surgery, orthopedic care, or dermatology, Cornerstone Pet Clinic is your trusted partner in pet health. Visit us Tuesday through Sunday from 1:00 PM to 7:30 PM, or call +91 88974 88821 for appointments and emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Book an Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Give your pet the expert care they deserve. Our experienced veterinarians are here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="secondary" size="lg">
                Book an Appointment
              </Button>
            </Link>
            <a href="tel:+918897488821">
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                Call +91 88974 88821
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
