import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { Syringe, Shield, Calendar, CheckCircle } from "lucide-react";

export function ServiceVaccination() {
  const faqs = [
    {
      question: "When should I start vaccinating my puppy?",
      answer: "Puppies should receive their first vaccination at 6-8 weeks of age, followed by booster shots every 3-4 weeks until they are 16 weeks old. We provide a complete vaccination schedule during your first visit."
    },
    {
      question: "What vaccines are essential for dogs in India?",
      answer: "Core vaccines for dogs include Distemper, Parvovirus, Hepatitis (DHPP), Rabies, and Leptospirosis. We also recommend Kennel Cough vaccine for dogs that socialize frequently."
    },
    {
      question: "How often do adult dogs need vaccination boosters?",
      answer: "Adult dogs typically need annual booster shots for most vaccines. Rabies vaccine is legally required annually in India. We'll create a personalized vaccination schedule for your dog."
    },
    {
      question: "Are there any side effects of vaccination?",
      answer: "Most dogs experience no side effects. Some may have mild lethargy, slight fever, or soreness at injection site for 24-48 hours. Serious reactions are rare. We monitor pets after vaccination."
    },
    {
      question: "What is the cost of dog vaccination in Hyderabad?",
      answer: "Vaccination costs vary depending on the type of vaccine. Individual vaccines range from ₹500-₹1500. We offer vaccination packages at discounted rates. Consultation fee is ₹450."
    }
  ];

  const dogVaccineSchedule = [
    { age: "6-8 weeks", vaccines: "DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)" },
    { age: "10-12 weeks", vaccines: "DHPP booster + Leptospirosis" },
    { age: "14-16 weeks", vaccines: "DHPP booster + Leptospirosis + Rabies" },
    { age: "1 year", vaccines: "DHPP + Leptospirosis + Rabies booster" },
    { age: "Annual", vaccines: "DHPP + Leptospirosis + Rabies (yearly boosters)" }
  ];

  const catVaccineSchedule = [
    { age: "6-8 weeks", vaccines: "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)" },
    { age: "10-12 weeks", vaccines: "FVRCP booster" },
    { age: "14-16 weeks", vaccines: "FVRCP booster + Rabies" },
    { age: "1 year", vaccines: "FVRCP + Rabies booster" },
    { age: "Annual", vaccines: "FVRCP + Rabies (yearly boosters)" }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm">
              <Shield className="w-4 h-4" />
              <span>Preventive Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">Dog & Cat Vaccination in Hyderabad</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your pets with comprehensive vaccination programs at Cornerstone Pet Clinic. Expert immunization services for dogs, cats, and other pets in Gachibowli, Hyderabad.
            </p>
            <Button size="lg">Book Vaccination Appointment</Button>
          </div>
        </div>
      </section>

      {/* Why Vaccination is Important */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Why Vaccination is Essential</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="mb-3">Disease Prevention</h3>
              <p className="text-muted-foreground">
                Vaccines protect against life-threatening diseases like Parvovirus, Distemper, Rabies, and Feline Panleukopenia.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="mb-3">Legal Requirement</h3>
              <p className="text-muted-foreground">
                Rabies vaccination is legally mandated in India for all dogs and cats to protect public health.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Syringe className="w-12 h-12 text-primary mb-4" />
              <h3 className="mb-3">Cost-Effective</h3>
              <p className="text-muted-foreground">
                Prevention through vaccination is far less expensive than treating serious infectious diseases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Vaccination Schedule */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Dog Vaccination Schedule</h2>
          <div className="space-y-4">
            {dogVaccineSchedule.map((schedule, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2">{schedule.age}</h3>
                    <p className="text-muted-foreground">{schedule.vaccines}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cat Vaccination Schedule */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Cat Vaccination Schedule</h2>
          <div className="space-y-4">
            {catVaccineSchedule.map((schedule, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2">{schedule.age}</h3>
                    <p className="text-muted-foreground">{schedule.vaccines}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diseases Prevented */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Diseases Prevented by Vaccination</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6">
              <h3 className="mb-4 text-primary">For Dogs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Canine Distemper:</strong> Highly contagious viral disease affecting respiratory, gastrointestinal, and nervous systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Parvovirus:</strong> Deadly virus causing severe vomiting, diarrhea, and dehydration, especially in puppies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Rabies:</strong> Fatal viral disease transmissible to humans, legally required vaccination
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Hepatitis:</strong> Liver disease caused by Canine Adenovirus
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Leptospirosis:</strong> Bacterial disease affecting kidneys and liver, can spread to humans
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h3 className="mb-4 text-primary">For Cats</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Feline Panleukopenia:</strong> Highly contagious and often fatal viral disease
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Feline Calicivirus:</strong> Causes respiratory infections and oral disease
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Feline Viral Rhinotracheitis:</strong> Upper respiratory infection caused by herpesvirus
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Rabies:</strong> Fatal viral disease transmissible to humans, legally required
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Vaccination Pricing</h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h3 className="mb-1">Consultation Fee</h3>
                  <p className="text-sm text-muted-foreground">Initial assessment and vaccination guidance</p>
                </div>
                <p className="text-2xl font-semibold text-primary">₹450</p>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h3 className="mb-1">Individual Vaccines</h3>
                  <p className="text-sm text-muted-foreground">Per vaccine dose</p>
                </div>
                <p className="text-2xl font-semibold text-primary">₹500 - ₹1500</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-1">Vaccination Packages</h3>
                  <p className="text-sm text-muted-foreground">Complete vaccination program with discounts</p>
                </div>
                <Button variant="outline">Contact for Details</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Protect Your Pet Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a vaccination appointment and keep your pet healthy and protected.
          </p>
          <Button size="lg">Book Vaccination Appointment</Button>
        </div>
      </section>
    </div>
  );
}
