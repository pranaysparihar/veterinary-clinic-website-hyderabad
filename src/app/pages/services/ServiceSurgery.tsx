import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";

export function ServiceSurgery() {
  const faqs = [
    { question: "What types of surgeries do you perform?", answer: "We perform soft tissue surgeries (spay/neuter, tumor removal, etc.), orthopedic surgeries (fracture repair, ligament surgery), and specialized procedures including neurosurgery." },
    { question: "Is surgery safe for my pet?", answer: "We use modern anesthesia protocols and monitoring equipment to ensure safety. Pre-surgical blood work helps identify any risks. Our experienced surgeons have performed thousands of successful procedures." },
    { question: "What is the recovery time after surgery?", answer: "Recovery time varies by procedure. Minor surgeries may require 3-5 days rest, while major surgeries need 2-4 weeks. We provide detailed post-operative care instructions and follow-up appointments." }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Pet Surgery in Hyderabad</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Advanced surgical services at Cornerstone Pet Clinic. Expert surgeons with 14+ years of experience in Gachibowli, Hyderabad.
          </p>
          <Button size="lg">Schedule Surgery Consultation</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Advanced Surgical Care</h2>
          <div className="prose max-w-none space-y-4 text-muted-foreground">
            <p>Cornerstone Pet Clinic provides advanced <strong>pet surgery services in Hyderabad</strong> with state-of-the-art surgical facilities. Dr. Neelima Prabha Kalundia (MVSc Surgery & Radiology) leads our surgical team with 14+ years of specialized experience.</p>
            <h3 className="text-2xl text-foreground mt-8">Surgical Services</h3>
            <ul className="space-y-2">
              <li>• Spay and neuter procedures</li>
              <li>• Soft tissue surgery (tumor removal, wound repair)</li>
              <li>• Orthopedic surgery (fracture repair, cruciate ligament)</li>
              <li>• Neurosurgery</li>
              <li>• Dental surgery and extractions</li>
              <li>• Emergency surgery</li>
              <li>• Cesarean sections</li>
              <li>• Foreign body removal</li>
              <li>• Bladder stone surgery</li>
              <li>• Eye surgery</li>
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
    </div>
  );
}
