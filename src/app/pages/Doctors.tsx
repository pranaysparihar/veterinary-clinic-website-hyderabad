import { DoctorCard } from "../components/DoctorCard";
import { Award } from "lucide-react";

export function Doctors() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-medium">
            <Award className="w-5 h-5" />
            <span>Expert Veterinarians</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Experienced Doctors</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of highly qualified veterinarians brings decades of combined experience in comprehensive animal healthcare.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <DoctorCard
            name="Dr. Abhishek Kalundia"
            role="Veterinary Physician"
            experience="15+ Years Experience"
            qualifications={["BVSc & AH", "MVSc", "PhD Veterinary Medicine"]}
            image="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?w=800&h=1000&fit=crop"
            link="/doctors/dr-abhishek-kalundia"
          />
          <DoctorCard
            name="Dr. Neelima Prabha Kalundia"
            role="Veterinary Surgeon"
            experience="14+ Years Experience"
            qualifications={["BVSc & AH", "MVSc (Surgery & Radiology)", "Advanced Surgical Training"]}
            image="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?w=800&h=1000&fit=crop"
            link="/doctors/dr-neelima-kalundia"
          />
        </div>
      </div>
    </div>
  );
}
