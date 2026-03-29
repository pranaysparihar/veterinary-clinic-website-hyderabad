import { toast } from "sonner";
import { Button } from "../components/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Clock, Info } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  priceRaw: string;
}

const allServices: ServiceItem[] = [
  { id: "s1", name: "Emergency consultation", duration: "30 min", priceRaw: "₹500" },
  { id: "s2", name: "Orthopaedic Conditions", duration: "45 min", priceRaw: "₹450" },
  { id: "s3", name: "Laboratory Tests", duration: "15 min", priceRaw: "Varies w.r.t. tests" },
  { id: "s4", name: "Neutering Male Cat (Cat Castration)", duration: "1 hr", priceRaw: "₹4,000" },
  { id: "s5", name: "Neutering Female Cats (Cat Spaying)", duration: "1 hr 30 min", priceRaw: "₹5,000" },
  { id: "s6", name: "Dog/Cat Dental Scaling", duration: "1 hr", priceRaw: "₹4,500" },
  { id: "s7", name: "Neutering Female Dogs (Dog Spaying)", duration: "1 hr 30 min", priceRaw: "₹6,000" },
  { id: "s8", name: "Neutering Male Dog (Dog Castration)", duration: "1 hr", priceRaw: "₹4,500" },
  { id: "s9", name: "Exclusive Cat consultation", duration: "20 min", priceRaw: "₹450" },
  { id: "s10", name: "Emergency Care Services", duration: "45 min", priceRaw: "₹450" },
  { id: "s11", name: "Pet Wellness Exams", duration: "20 min", priceRaw: "₹450" },
  { id: "s12", name: "Puppies/kitten care", duration: "45 min", priceRaw: "₹450" },
  { id: "s13", name: "Care for Wildlife and Birds", duration: "45 min", priceRaw: "₹450" },
  { id: "s14", name: "Ultrasonography", duration: "30 min", priceRaw: "₹1,500" },
  { id: "s15", name: "2D Echocardiography", duration: "30 min", priceRaw: "₹1,800" },
];

const centerOfExcellenceIds = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

const centerOfExcellenceServices = allServices.filter(s => centerOfExcellenceIds.includes(s.id));
const standardServices = allServices.filter(s => !centerOfExcellenceIds.includes(s.id));

export function BookAppointment() {
  const handleBookNow = (serviceName: string) => {
    toast.success(`Successfully booked: ${serviceName}!`, {
      description: "We will contact you shortly to confirm the appointment.",
    });
  };

  const ServiceList = ({ services }: { services: ServiceItem[] }) => (
    <div className="grid gap-4 mt-6">
      {services.map((service) => (
        <div 
          key={service.id} 
          className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-foreground mb-2">{service.name}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {service.duration}
              </span>
              <span className="font-medium text-foreground py-1 px-2 bg-accent/30 rounded-md">
                {service.priceRaw}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => toast.info(`More information about ${service.name} will be available soon.`)}
            >
              <Info className="w-4 h-4" />
              Read More
            </Button>
            <Button onClick={() => handleBookNow(service.name)}>
              Book Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl text-muted-foreground">
            Select a service category below to find the right care for your pet.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1 bg-accent/20 rounded-xl mb-8">
            <TabsTrigger value="all" className="py-3 text-base rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              All Services
            </TabsTrigger>
            <TabsTrigger value="coe" className="py-3 text-base rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              Center Of Excellence
            </TabsTrigger>
            <TabsTrigger value="standard" className="py-3 text-base rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              Services We Provide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 mt-4">
              <img src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb0def?w=1200&h=400&fit=crop" alt="All our veterinary services" className="w-full h-full object-cover" />
            </div>
            <ServiceList services={allServices} />
          </TabsContent>
          
          <TabsContent value="coe" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 mt-4">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&h=400&fit=crop" alt="Center of Excellence specialized procedures" className="w-full h-full object-cover" />
            </div>
            <ServiceList services={centerOfExcellenceServices} />
          </TabsContent>
          
          <TabsContent value="standard" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 mt-4">
              <img src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=1200&h=400&fit=crop" alt="Standard veterinary services for your pets" className="w-full h-full object-cover" />
            </div>
            <ServiceList services={standardServices} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
