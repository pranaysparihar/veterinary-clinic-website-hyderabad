import { Link } from "react-router";
import { Button } from "../../components/Button";
import { AlertCircle } from "lucide-react";

export function ConditionTickFever() {
  return (
    <div>
      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Tick Fever in Dogs - Symptoms & Treatment</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Complete guide to tick fever (ehrlichiosis) in dogs. Expert treatment available at Cornerstone Pet Clinic, Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">What is Tick Fever?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Tick fever, also known as ehrlichiosis, is a bacterial disease transmitted by ticks. It's common in dogs in India, especially during monsoon season when tick populations increase.
          </p>

          <h2 className="text-3xl mb-6 mt-12">Symptoms of Tick Fever</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "High fever (103-105°F)",
              "Loss of appetite",
              "Lethargy and weakness",
              "Vomiting",
              "Weight loss",
              "Bleeding from nose or gums",
              "Pale gums",
              "Difficulty breathing",
              "Joint pain and lameness",
              "Swollen lymph nodes"
            ].map((symptom, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Treatment</h2>
          <p className="text-muted-foreground mb-6">
            Early detection and treatment are crucial for recovery. Treatment typically includes:
          </p>
          <ul className="space-y-3">
            {[
              "Antibiotics (Doxycycline) for 21-28 days",
              "IV fluids for dehydration",
              "Blood transfusion in severe cases",
              "Supportive care and nutrition",
              "Regular blood tests to monitor recovery"
            ].map((treatment, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-card rounded-lg p-4">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <span>{treatment}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Suspect Tick Fever in Your Dog?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get immediate veterinary care at <Link to="/" className="text-primary hover:underline">Cornerstone Pet Clinic</Link> in Hyderabad.
          </p>
          <Button size="lg" className="bg-destructive hover:bg-destructive/90">Emergency Consultation</Button>
        </div>
      </section>
    </div>
  );
}
