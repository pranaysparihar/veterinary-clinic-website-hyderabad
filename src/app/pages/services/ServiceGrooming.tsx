import { Button } from "../../components/Button";

export function ServiceGrooming() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Pet Grooming Services in Hyderabad</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Professional pet grooming services at Cornerstone Pet Clinic. Expert grooming for dogs and cats in Gachibowli, Hyderabad.
          </p>
          <Button size="lg">Book Grooming Appointment</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6">Professional Pet Grooming</h2>
          <div className="prose max-w-none space-y-4 text-muted-foreground">
            <p>Keep your pets clean, healthy, and looking their best with professional <strong>pet grooming services in Hyderabad</strong> at Cornerstone Pet Clinic. Regular grooming is essential for your pet's health and hygiene.</p>
            <h3 className="text-2xl text-foreground mt-8">Grooming Services</h3>
            <ul className="space-y-2">
              <li>• Full body bath and blow dry</li>
              <li>• Breed-specific haircuts and styling</li>
              <li>• Nail trimming and filing</li>
              <li>• Ear cleaning</li>
              <li>• Teeth brushing</li>
              <li>• De-shedding treatment</li>
              <li>• Flea and tick treatment</li>
              <li>• Sanitary trim</li>
              <li>• Coat conditioning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
