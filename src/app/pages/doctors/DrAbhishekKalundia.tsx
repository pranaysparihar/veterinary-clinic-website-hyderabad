import { Button } from "../../components/Button";
import { Award, GraduationCap, Clock, Star } from "lucide-react";

export function DrAbhishekKalundia() {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?w=600&h=800&fit=crop"
                    alt="Dr. Abhishek Kalundia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">PhD Veterinary Medicine</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">4.3 Rating (500+ reviews)</span>
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
              <h1 className="text-4xl mb-2">Dr. Abhishek Kalundia</h1>
              <p className="text-xl text-primary mb-8">Veterinary Physician & PhD in Veterinary Medicine</p>

              <div className="prose max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Qualifications
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• BVSc & AH (Bachelor of Veterinary Science & Animal Husbandry)</li>
                    <li>• MVSc (Master of Veterinary Science)</li>
                    <li>• PhD in Veterinary Medicine</li>
                    <li>• Member, Indian Veterinary Association</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Experience & Expertise
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Abhishek Kalundia brings over 15 years of dedicated experience in veterinary medicine. With a PhD in Veterinary Medicine, he combines academic excellence with practical expertise to provide comprehensive healthcare for all types of pets.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As the founder of Cornerstone Pet Clinic in 2017, Dr. Abhishek has treated thousands of pets across Hyderabad, specializing in internal medicine, emergency care, and advanced diagnostics. His compassionate approach and commitment to animal welfare have made him one of the most trusted veterinarians in Gachibowli.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">Specializations</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Internal Medicine",
                      "Emergency & Critical Care",
                      "Diagnostic Medicine",
                      "Infectious Disease Management",
                      "Preventive Healthcare",
                      "Avian Medicine",
                      "Exotic Pet Care",
                      "Nutritional Counseling"
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
                        <h4 className="mb-1">Founder & Chief Veterinarian</h4>
                        <p className="text-sm text-muted-foreground">Cornerstone Pet Clinic, Hyderabad</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-primary font-semibold">2010 - 2017</div>
                      <div>
                        <h4 className="mb-1">Senior Veterinarian</h4>
                        <p className="text-sm text-muted-foreground">Various veterinary hospitals in Hyderabad</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-primary font-semibold">2007 - 2010</div>
                      <div>
                        <h4 className="mb-1">PhD Research</h4>
                        <p className="text-sm text-muted-foreground">Veterinary Medicine specialization</p>
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
                        "Dr. Abhishek saved my dog's life during an emergency. His expertise and calm demeanor gave us confidence during a very stressful time. Highly recommend!"
                      </p>
                      <p className="text-sm font-medium">- Priya Sharma, Owner of Rocky</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3">
                        "Best veterinarian in Hyderabad! Dr. Abhishek takes time to explain everything and genuinely cares about the animals. My cat has been under his care for 3 years."
                      </p>
                      <p className="text-sm font-medium">- Rajesh Kumar, Owner of Whiskers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
                  <h2 className="text-2xl mb-4">Schedule a Consultation</h2>
                  <p className="text-muted-foreground mb-6">
                    Book an appointment with Dr. Abhishek Kalundia for expert veterinary care. Available Tuesday through Sunday, 1:00 PM - 7:30 PM.
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
