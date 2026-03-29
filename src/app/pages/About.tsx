import { Award, Heart, Stethoscope } from "lucide-react";
import { Button } from "../components/Button";

export function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">About Cornerstone Pet Clinic</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Your trusted partner in pet healthcare since 2017
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cornerstone Pet Clinic was founded in 2017 by Dr. Abhishek Kalundia and Dr. Neelima Prabha Kalundia with a vision to provide world-class veterinary care to pets in Hyderabad. Located in the heart of Gachibowli, we have grown to become one of the most trusted pet hospitals in the region.
                </p>
                <p>
                  With over 29 years of combined experience, our veterinary team brings expertise in internal medicine, surgery, radiology, and emergency care. We believe in treating every pet with compassion and providing personalized healthcare solutions.
                </p>
                <p>
                  Over the years, we have treated more than 10,000 pets, building lasting relationships with pet parents across Hyderabad. Our commitment to excellence, advanced medical facilities, and compassionate care sets us apart.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?w=800&h=600&fit=crop"
                alt="Cornerstone Pet Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                We treat every pet with love and care, understanding that they are beloved family members.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to providing the highest standard of veterinary medicine with continuous learning and improvement.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Trust</h3>
              <p className="text-muted-foreground">
                Building trust through transparency, honest communication, and always putting pet welfare first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Visit Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the Cornerstone difference. Schedule an appointment with our expert veterinarians.
          </p>
          <Button size="lg">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
}
