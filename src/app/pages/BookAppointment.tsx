import { toast } from "sonner";
import { Button } from "../components/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Clock, Info } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  priceRaw: string;
  image: string;
}

const allServices: ServiceItem[] = [
  { 
    id: "s1", 
    name: "Emergency consultation", 
    duration: "30 min", 
    priceRaw: "₹500",
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05ef9?w=400&h=400&fit=crop"
  },
  { 
    id: "s2", 
    name: "Orthopaedic Conditions", 
    duration: "45 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop"
  },
  { 
    id: "s3", 
    name: "Laboratory Tests", 
    duration: "15 min", 
    priceRaw: "Varies w.r.t. tests",
    image: "https://images.unsplash.com/photo-1579152276508-410a5e2f7543?w=400&h=400&fit=crop"
  },
  { 
    id: "s4", 
    name: "Neutering Male Cat (Cat Castration)", 
    duration: "1 hr", 
    priceRaw: "₹4,000",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop"
  },
  { 
    id: "s5", 
    name: "Neutering Female Cats (Cat Spaying)", 
    duration: "1 hr 30 min", 
    priceRaw: "₹5,000",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop"
  },
  { 
    id: "s6", 
    name: "Dog/Cat Dental Scaling", 
    duration: "1 hr", 
    priceRaw: "₹4,500",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb0def?w=400&h=400&fit=crop"
  },
  { 
    id: "s7", 
    name: "Neutering Female Dogs (Dog Spaying)", 
    duration: "1 hr 30 min", 
    priceRaw: "₹6,000",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop"
  },
  { 
    id: "s8", 
    name: "Neutering Male Dog (Dog Castration)", 
    duration: "1 hr", 
    priceRaw: "₹4,500",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=400&fit=crop"
  },
  { 
    id: "s9", 
    name: "Exclusive Cat consultation", 
    duration: "20 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1513245538863-170dec82c827?w=400&h=400&fit=crop"
  },
  { 
    id: "s10", 
    name: "Emergency Care Services", 
    duration: "45 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=400&h=400&fit=crop"
  },
  { 
    id: "s11", 
    name: "Pet Wellness Exams", 
    duration: "20 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1612543167104-e350de241285?w=400&h=400&fit=crop"
  },
  { 
    id: "s12", 
    name: "Puppies/kitten care", 
    duration: "45 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop"
  },
  { 
    id: "s13", 
    name: "Care for Wildlife and Birds", 
    duration: "45 min", 
    priceRaw: "₹450",
    image: "https://images.unsplash.com/photo-1522850949506-585b584877fe?w=400&h=400&fit=crop"
  },
  { 
    id: "s14", 
    name: "Ultrasonography", 
    duration: "30 min", 
    priceRaw: "₹1,500",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&h=400&fit=crop"
  },
  { 
    id: "s15", 
    name: "2D Echocardiography", 
    duration: "30 min", 
    priceRaw: "₹1,800",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop"
  },
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
    <div className="grid gap-6 mt-8">
      {services.map((service) => (
        <div 
          key={service.id} 
          className="flex flex-col md:flex-row gap-6 p-4 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all group overflow-hidden"
        >
          <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden shrink-0">
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-accent/20 rounded-full">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </span>
                <span className="font-semibold text-primary py-1 px-3 bg-primary/10 rounded-full">
                  {service.priceRaw}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 rounded-full px-6"
                onClick={() => toast.info(`More information about ${service.name} will be available soon.`)}
              >
                <Info className="w-4 h-4" />
                Read More
              </Button>
              <Button 
                className="rounded-full px-8 shadow-lg shadow-primary/20"
                onClick={() => handleBookNow(service.name)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Book an Appointment</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Give your pet the premier care they deserve. Choose from our specialized services below.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1.5 bg-accent/20 rounded-2xl mb-12 shadow-inner">
            <TabsTrigger value="all" className="py-4 text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300">
              All Services
            </TabsTrigger>
            <TabsTrigger value="coe" className="py-4 text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300">
              Center Of Excellence
            </TabsTrigger>
            <TabsTrigger value="standard" className="py-4 text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300">
              Services We Provide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
            <ServiceList services={allServices} />
          </TabsContent>
          
          <TabsContent value="coe" className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
            <ServiceList services={centerOfExcellenceServices} />
          </TabsContent>
          
          <TabsContent value="standard" className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
            <ServiceList services={standardServices} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
