import { Button } from "../../components/Button";
import { Award, GraduationCap, Clock, Star } from "lucide-react";

export function DrNeelimaPrabhaKalundia() {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?w=600&h=800&fit=crop"
                    alt="Dr. Neelima Prabha Kalundia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">14+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">MVSc Surgery & Radiology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">4.3 Rating (450+ reviews)</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-2xl font-semibold text-primary mb-2">₹450</p>
                    <p className="text-sm text-muted-foreground mb-4">Consultation Fee</p>
                    <Button className="w-full">Book Appointment</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-4xl mb-2">Dr. Neelima Prabha Kalundia</h1>
              <p className="text-xl text-primary mb-8">Veterinary Surgeon & Radiology Specialist</p>

              <div className="prose max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Qualifications
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• BVSc & AH (Bachelor of Veterinary Science & Animal Husbandry)</li>
                    <li>• MVSc in Surgery & Radiology (Master of Veterinary Science)</li>
                    <li>• Advanced Surgical Training</li>
                    <li>• Certified in Radiology & Diagnostic Imaging</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Experience & Expertise
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Neelima Prabha Kalundia is a highly skilled veterinary surgeon with 14+ years of specialized experience in surgery and radiology. Her MVSc degree in Surgery & Radiology reflects her advanced training in complex surgical procedures and diagnostic imaging.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As co-founder of Cornerstone Pet Clinic, Dr. Neelima has performed thousands of successful surgeries ranging from routine spay/neuter procedures to complex soft tissue and orthopedic surgeries. Her expertise in radiology ensures accurate diagnoses and precise surgical planning.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">Specializations</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Soft Tissue Surgery",
                      "Orthopedic Surgery",
                      "Neurosurgery",
                      "Radiology & Imaging",
                      "Emergency Surgery",
                      "Dental Surgery",
                      "Cesarean Sections",
                      "Tumor Removal"
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-accent/50 rounded-lg p-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">Professional Timeline</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-primary font-semibold">2017 - Present</div>
                      <div>
                        <h4 className="mb-1">Co-Founder & Chief Surgeon</h4>
                        <p className="text-sm text-muted-foreground">Cornerstone Pet Clinic, Hyderabad</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-primary font-semibold">2011 - 2017</div>
                      <div>
                        <h4 className="mb-1">Veterinary Surgeon</h4>
                        <p className="text-sm text-muted-foreground">Leading veterinary hospitals in Hyderabad</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-primary font-semibold">2008 - 2011</div>
                      <div>
                        <h4 className="mb-1">MVSc Studies</h4>
                        <p className="text-sm text-muted-foreground">Surgery & Radiology specialization</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">Patient Reviews</h2>
                  <div className="space-y-4">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3">
                        "Dr. Neelima performed surgery on my cat with such care and precision. The recovery was smooth and she followed up regularly. Excellent surgeon!"
                      </p>
                      <p className="text-sm font-medium">- Ananya Reddy, Owner of Mittens</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3">
                        "My dog had a complex fracture and Dr. Neelima handled it expertly. Her surgical skills are outstanding and she truly cares about her patients."
                      </p>
                      <p className="text-sm font-medium">- Vikram Singh, Owner of Bruno</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
                  <h2 className="text-2xl mb-4">Schedule a Consultation</h2>
                  <p className="text-muted-foreground mb-6">
                    Book an appointment with Dr. Neelima Prabha Kalundia for expert surgical care. Available Tuesday through Sunday, 1:00 PM - 7:30 PM.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg">Book Appointment</Button>
                    <a href="tel:+918897488821">
                      <Button variant="outline" size="lg">Call +91 88974 88821</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
