import { Link } from "react-router";
import { Button } from "../../components/Button";
import { AlertCircle } from "lucide-react";

export function ConditionCatVomiting() {
  return (
    <div>
      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Cat Vomiting - Causes & When to Worry</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding why cats vomit and when it requires veterinary attention. Expert advice from Cornerstone Pet Clinic, Hyderabad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Common Causes of Cat Vomiting</h2>
          <div className="space-y-4">
            {[
              { title: "Hairballs", desc: "Most common in long-haired cats, usually not serious" },
              { title: "Eating Too Fast", desc: "Rapid eating can cause regurgitation" },
              { title: "Dietary Indiscretion", desc: "Eating spoiled food, plants, or foreign objects" },
              { title: "Food Allergies", desc: "Intolerance to certain proteins or ingredients" },
              { title: "Gastrointestinal Disease", desc: "Inflammatory bowel disease, gastritis, or ulcers" },
              { title: "Kidney Disease", desc: "Common in older cats, causes chronic vomiting" },
              { title: "Hyperthyroidism", desc: "Overactive thyroid gland in senior cats" },
              { title: "Parasites", desc: "Intestinal worms causing digestive upset" }
            ].map((cause, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-2">{cause.title}</h3>
                <p className="text-muted-foreground">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-destructive/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">When to See a Veterinarian Immediately</h2>
          <div className="bg-card border-2 border-destructive rounded-xl p-8">
            <ul className="space-y-3">
              {[
                "Vomiting multiple times in 24 hours",
                "Blood in vomit",
                "Vomiting with diarrhea",
                "Lethargy or weakness",
                "Loss of appetite for 24+ hours",
                "Abdominal pain or bloating",
                "Dehydration (dry gums, sunken eyes)"
              ].map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Need Help with Your Cat?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit <Link to="/services/cat-treatment-hyderabad" className="text-primary hover:underline">Cornerstone Pet Clinic</Link> for specialized feline care in Hyderabad.
          </p>
          <Button size="lg">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
}
