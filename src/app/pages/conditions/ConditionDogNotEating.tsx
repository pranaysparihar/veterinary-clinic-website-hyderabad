import { Link } from "react-router";
import { Button } from "../../components/Button";
import { FAQItem } from "../../components/FAQItem";
import { AlertCircle } from "lucide-react";

export function ConditionDogNotEating() {
  const faqs = [
    { question: "How long can a dog go without eating?", answer: "A healthy adult dog can survive 3-5 days without food, but puppies and senior dogs are at higher risk. If your dog hasn't eaten for 24 hours, consult a veterinarian." },
    { question: "Should I force my dog to eat?", answer: "No, never force-feed your dog. This can cause stress and aspiration. Instead, try offering different foods or warming the food slightly to increase appeal. If refusal continues, see a vet." },
    { question: "Can stress cause loss of appetite in dogs?", answer: "Yes, stress, anxiety, changes in routine, or environmental changes can cause temporary loss of appetite. However, prolonged anorexia requires veterinary attention." }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Health Concern</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">Dog Not Eating - Causes & Treatment</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn why your dog may have lost appetite and when to seek veterinary care. Expert guidance from Cornerstone Pet Clinic, Hyderabad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Common Symptoms</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Complete refusal to eat",
              "Eating less than usual",
              "Eating only treats, not meals",
              "Lethargy and weakness",
              "Weight loss",
              "Vomiting or diarrhea",
              "Drooling or difficulty chewing",
              "Bad breath"
            ].map((symptom, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-2 h-2 bg-destructive rounded-full shrink-0" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Possible Causes</h2>
          <div className="space-y-4">
            {[
              { title: "Illness or Infection", desc: "Infections, fever, kidney disease, liver disease, cancer, or other systemic illnesses" },
              { title: "Dental Problems", desc: "Tooth decay, gum disease, broken teeth, or oral pain making eating uncomfortable" },
              { title: "Gastrointestinal Issues", desc: "Upset stomach, gastritis, pancreatitis, foreign body obstruction" },
              { title: "Stress or Anxiety", desc: "Changes in environment, routine, or household dynamics" },
              { title: "Food Issues", desc: "Spoiled food, sudden diet change, or food aversion" },
              { title: "Medications", desc: "Side effects from medications causing nausea or appetite suppression" },
              { title: "Pain", desc: "Arthritis, injury, or other painful conditions reducing activity and appetite" }
            ].map((cause, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-2">{cause.title}</h3>
                <p className="text-muted-foreground">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">When to Visit a Veterinarian</h2>
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8">
            <h3 className="mb-4 text-destructive">Seek immediate veterinary care if:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>Your dog hasn't eaten for 24+ hours (12 hours for puppies)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>Loss of appetite accompanied by vomiting or diarrhea</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>Lethargy, weakness, or difficulty standing</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>Signs of pain (whimpering, aggression when touched)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>Pale gums or difficulty breathing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Treatment Options</h2>
          <p className="text-muted-foreground mb-6">
            Treatment depends on the underlying cause. At Cornerstone Pet Clinic, our veterinarians will:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Perform complete physical examination",
              "Conduct blood tests and diagnostic imaging",
              "Identify the underlying cause",
              "Provide appropriate medications",
              "Recommend dietary changes",
              "Prescribe appetite stimulants if needed",
              "Offer nutritional support or IV fluids",
              "Create a follow-up care plan"
            ].map((treatment, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-card rounded-lg p-4">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span>{treatment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Is Your Dog Not Eating?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit <Link to="/" className="text-primary hover:underline">Cornerstone Pet Clinic</Link> for expert diagnosis and treatment. Our experienced veterinarians in Hyderabad are here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Book Appointment</Button>
            <a href="tel:+918897488821">
              <Button variant="outline" size="lg">Call +91 88974 88821</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
