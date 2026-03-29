import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/Button";

export function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Get in touch with Cornerstone Pet Clinic. We're here to help with all your pet healthcare needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Flat no. 18-21, Sri Sampada Arcade-1<br />
                      Khajaguda Village, Serilingampally Mandal<br />
                      Ranga Reddy, Telangana - 500019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Call Us</h3>
                    <a href="tel:+918897488821" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 88974 88821
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email Us</h3>
                    <a href="mailto:cornerstonepetclinic@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      cornerstonepetclinic@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Clinic Hours</h3>
                    <p className="text-muted-foreground">
                      Tuesday - Sunday: 1:00 PM - 7:30 PM<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="mb-6">Send Us a Message</h3>
                <form 
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const pet = formData.get('pet');
                    const message = formData.get('message');
                    
                    const subject = `Website Inquiry from ${name}`;
                    const customBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPet Type: ${pet}\n\nMessage:\n${message}`;
                    
                    window.location.href = `mailto:cornerstonepetclinic@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(customBody)}`;
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="pet" className="block mb-2 text-sm">Pet Type</label>
                    <select
                      id="pet"
                      name="pet"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background"
                    >
                      <option>Select pet type</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background resize-none"
                      placeholder="Tell us about your pet's concern..."
                    />
                  </div>
                  <Button type="submit" className="w-full">Open Email Client to Send</Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-8">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3489!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjAnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cornerstone Pet Clinic Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Book an Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your visit online or call us directly for immediate assistance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/book-appointment">
              <Button variant="secondary" size="lg">Book an Appointment</Button>
            </a>
            <a href="tel:+918897488821">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Call +91 88974 88821
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
