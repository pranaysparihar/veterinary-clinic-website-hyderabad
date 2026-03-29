import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";

export function ServiceBirdVet() {
  const faqs = [
    { question: "What types of birds do you treat?", answer: "We treat all types of birds including parrots, cockatiels, budgerigars, lovebirds, finches, canaries, pigeons, and other avian species. We also handle wildlife bird emergencies." },
    { question: "How often should birds have health check-ups?", answer: "Birds should have annual wellness exams. Since birds hide illness well, regular check-ups help detect problems early. New birds should be examined within the first few weeks of acquisition." },
    { question: "What are common health issues in birds?", answer: "Common issues include respiratory infections, nutritional deficiencies, parasites, feather problems, egg binding, and beak/nail overgrowth. Early detection through regular check-ups is crucial." }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Bird Veterinarian in Hyderabad</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Expert avian medicine at Cornerstone Pet Clinic. Specialized care for pet birds and wildlife in Gachibowli, Hyderabad.
          </p>
          <Button size="lg">Book Bird Consultation</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Specialized Avian Healthcare</h2>
          <div className="prose max-w-none space-y-4 text-muted-foreground">
            <p>Cornerstone Pet Clinic offers expert <strong>bird veterinary services in Hyderabad</strong> with specialized knowledge in avian medicine. Birds require specialized care due to their unique physiology and healthcare needs.</p>
            <h3 className="text-2xl text-foreground mt-8">Avian Services</h3>
            <ul className="space-y-2">
              <li>• Complete health examinations</li>
              <li>• Diagnostic testing and blood work</li>
              <li>• Respiratory disease treatment</li>
              <li>• Nutritional counseling</li>
              <li>• Parasite treatment</li>
              <li>• Feather and skin conditions</li>
              <li>• Beak and nail trimming</li>
              <li>• Egg binding treatment</li>
              <li>• Emergency care for injured birds</li>
              <li>• Wildlife bird treatment</li>
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
          <h2 className="text-3xl mb-4">Expert Bird Care</h2>
          <p className="text-xl text-muted-foreground mb-8">Specialized avian medicine from experienced veterinarians. Consultation fee: ₹450</p>
          <Button size="lg">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
}
