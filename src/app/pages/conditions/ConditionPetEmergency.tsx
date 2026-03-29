import { Link } from "react-router";
import { Button } from "../../components/Button";
import { AlertCircle } from "lucide-react";

export function ConditionPetEmergency() {
  return (
    <div>
      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Pet Emergency Symptoms - When to Rush to Vet</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Recognizing emergency symptoms can save your pet's life. Emergency veterinary care at Cornerstone Pet Clinic, Hyderabad.
          </p>
          <a href="tel:+918897488821">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90">Call Emergency: +91 88974 88821</Button>
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-8">Critical Emergency Symptoms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Difficulty Breathing", desc: "Gasping, choking, blue gums, extended neck" },
              { title: "Severe Bleeding", desc: "Uncontrolled bleeding from any body part" },
              { title: "Unconsciousness", desc: "Collapse, unresponsive to stimuli" },
              { title: "Seizures", desc: "Convulsions, tremors, loss of consciousness" },
              { title: "Suspected Poisoning", desc: "Ingestion of toxins, chemicals, or toxic plants" },
              { title: "Bloated Abdomen", desc: "Distended, hard stomach with distress" },
              { title: "Unable to Urinate", desc: "Straining without producing urine" },
              { title: "Eye Injury", desc: "Trauma, prolapsed eye, sudden blindness" },
              { title: "Heatstroke", desc: "Excessive panting, drooling, collapse in heat" },
              { title: "Fractures", desc: "Broken bones, inability to bear weight" },
              { title: "Severe Vomiting/Diarrhea", desc: "Multiple episodes, especially with blood" },
              { title: "Extreme Pain", desc: "Crying, aggression when touched, rigid posture" }
            ].map((emergency, idx) => (
              <div key={idx} className="bg-card border-2 border-destructive/20 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                  <h3 className="text-destructive">{emergency.title}</h3>
                </div>
                <p className="text-muted-foreground ml-9">{emergency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-destructive/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Pet Emergency? Act Fast</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Call immediately for <Link to="/services/pet-emergency-hyderabad" className="text-primary hover:underline">emergency veterinary care</Link> in Hyderabad.
          </p>
          <a href="tel:+918897488821">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90">Call Emergency: +91 88974 88821</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
