import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";

export function ServiceCatTreatment() {
  const faqs = [
    { question: "What makes cat treatment different from dog treatment?", answer: "Cats have unique physiological and behavioral differences. They metabolize medications differently, have specific nutritional needs, and require specialized handling techniques. Our veterinarians are trained in feline-specific medicine." },
    { question: "How often should I bring my cat for check-ups?", answer: "Adult cats should have annual wellness exams. Senior cats (7+ years) benefit from bi-annual check-ups. Kittens need more frequent visits for vaccinations and development monitoring." },
    { question: "What are common health issues in cats?", answer: "Common feline health issues include urinary tract problems, kidney disease, dental disease, thyroid disorders, diabetes, and respiratory infections. Regular check-ups help detect these early." }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Cat Treatment in Hyderabad</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Specialized feline healthcare at Cornerstone Pet Clinic. Expert diagnosis and treatment for all cat health conditions in Gachibowli, Hyderabad.
          </p>
          <Button size="lg">Book Cat Consultation</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Comprehensive Feline Healthcare</h2>
          <div className="prose max-w-none space-y-4 text-muted-foreground">
            <p>At Cornerstone Pet Clinic, we provide specialized <strong>cat treatment in Hyderabad</strong> with over 14 years of experience in feline medicine. Our veterinarians understand the unique healthcare needs of cats and provide compassionate, expert care.</p>
            <h3 className="text-2xl text-foreground mt-8">Services for Cats</h3>
            <ul className="space-y-2">
              <li>• Wellness examinations and preventive care</li>
              <li>• Feline vaccination programs</li>
              <li>• Dental care and oral surgery</li>
              <li>• Urinary tract disease management</li>
              <li>• Kidney and liver disease treatment</li>
              <li>• Diabetes management</li>
              <li>• Dermatology and skin conditions</li>
              <li>• Respiratory infection treatment</li>
              <li>• Soft tissue and orthopedic surgery</li>
              <li>• Behavioral consultations</li>
            </ul>
          </div>
        </div>
      </section>

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

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Schedule a Cat Consultation</h2>
          <p className="text-xl text-muted-foreground mb-8">Expert feline care from experienced veterinarians. Consultation fee: ₹450</p>
          <Button size="lg">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
}
