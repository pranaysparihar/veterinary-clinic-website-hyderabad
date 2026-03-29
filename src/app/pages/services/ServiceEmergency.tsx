import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { AlertCircle, Clock, Stethoscope, Phone } from "lucide-react";

export function ServiceEmergency() {
  const faqs = [
    {
      question: "What constitutes a pet emergency?",
      answer: "Emergency situations include difficulty breathing, severe bleeding, loss of consciousness, seizures, suspected poisoning, inability to urinate, severe vomiting or diarrhea, eye injuries, broken bones, or any life-threatening condition."
    },
    {
      question: "Are you available 24/7 for emergencies?",
      answer: "Yes, we provide emergency veterinary services. For urgent cases outside clinic hours, please call +91 88974 88821 immediately for guidance and emergency assistance."
    },
    {
      question: "What should I do while bringing my pet for emergency care?",
      answer: "Stay calm, call us immediately, handle your pet gently to avoid further injury, bring any relevant medical records, and if possible, have someone call ahead while you're on the way to the clinic."
    },
    {
      question: "How much does emergency veterinary care cost in Hyderabad?",
      answer: "Emergency care costs vary depending on the condition and treatment required. We provide transparent pricing and will discuss all costs before proceeding with treatment. Basic consultation starts at ₹450."
    },
    {
      question: "Do you handle exotic pet emergencies?",
      answer: "Yes, we have expertise in treating emergencies for dogs, cats, birds, rabbits, and other exotic pets. Our veterinarians are trained in handling various species."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Emergency Care Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">Pet Emergency Care in Hyderabad</h1>
            <p className="text-xl text-muted-foreground mb-8">
              24/7 emergency veterinary services at Cornerstone Pet Clinic. Expert care for critical and urgent pet health situations in Gachibowli, Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Phone className="w-5 h-5" />
                Call Emergency: +91 88974 88821
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">When to Seek Emergency Veterinary Care</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Difficulty breathing or choking",
              "Severe bleeding or injury",
              "Loss of consciousness or collapse",
              "Seizures or tremors",
              "Suspected poisoning or toxin ingestion",
              "Unable to urinate or defecate",
              "Severe vomiting or diarrhea (especially with blood)",
              "Eye injuries or sudden blindness",
              "Broken bones or severe limping",
              "Extreme pain or distress",
              "Heatstroke or hypothermia",
              "Severe allergic reactions"
            ].map((symptom, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Our Emergency Care Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary mb-4">1</div>
              <h3 className="mb-2">Immediate Assessment</h3>
              <p className="text-sm text-muted-foreground">Quick triage to evaluate the severity and prioritize treatment</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary mb-4">2</div>
              <h3 className="mb-2">Stabilization</h3>
              <p className="text-sm text-muted-foreground">Emergency interventions to stabilize vital signs and control pain</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary mb-4">3</div>
              <h3 className="mb-2">Diagnosis</h3>
              <p className="text-sm text-muted-foreground">Diagnostic tests including X-rays, blood work, ultrasound as needed</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary mb-4">4</div>
              <h3 className="mb-2">Treatment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive treatment plan including surgery if required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Emergency Services We Provide</h2>
          <div className="space-y-4">
            {[
              { title: "Critical Care", desc: "24/7 monitoring and intensive care for critically ill pets" },
              { title: "Emergency Surgery", desc: "Immediate surgical intervention for life-threatening conditions" },
              { title: "Trauma Care", desc: "Treatment for accidents, falls, and physical injuries" },
              { title: "Toxicology", desc: "Poisoning management and decontamination" },
              { title: "Respiratory Support", desc: "Oxygen therapy and ventilation for breathing difficulties" },
              { title: "Blood Transfusion", desc: "Emergency blood transfusion services" },
              { title: "Pain Management", desc: "Immediate pain relief and comfort care" },
              { title: "Diagnostic Imaging", desc: "Emergency X-rays and ultrasound" }
            ].map((service, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Stethoscope className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Emergency Care Pricing</h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="mb-2">Consultation Fee</h3>
                <p className="text-3xl font-semibold text-primary mb-2">₹450</p>
                <p className="text-muted-foreground">
                  Initial emergency consultation and assessment. Additional costs for diagnostics, medications, and procedures will be discussed before treatment.
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                * Emergency care costs vary based on the condition and treatment required. We provide transparent pricing and discuss all costs before proceeding. Payment options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
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
      <section className="py-16 bg-destructive/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Need Emergency Care?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait. Call us immediately for emergency veterinary assistance.
          </p>
          <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Phone className="w-5 h-5" />
            Call Emergency: +91 88974 88821
          </Button>
        </div>
      </section>
    </div>
  );
}
