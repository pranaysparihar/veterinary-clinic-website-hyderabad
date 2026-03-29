import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { VeterinaryClinicHyderabad } from "./pages/VeterinaryClinicHyderabad";
import { ServiceEmergency } from "./pages/services/ServiceEmergency";
import { ServiceVaccination } from "./pages/services/ServiceVaccination";
import { ServiceCatTreatment } from "./pages/services/ServiceCatTreatment";
import { ServiceBirdVet } from "./pages/services/ServiceBirdVet";
import { ServiceGrooming } from "./pages/services/ServiceGrooming";
import { ServiceSurgery } from "./pages/services/ServiceSurgery";
import { DrAbhishekKalundia } from "./pages/doctors/DrAbhishekKalundia";
import { DrNeelimaPrabhaKalundia } from "./pages/doctors/DrNeelimaPrabhaKalundia";
import { Doctors } from "./pages/Doctors";
import { ConditionDogNotEating } from "./pages/conditions/ConditionDogNotEating";
import { ConditionCatVomiting } from "./pages/conditions/ConditionCatVomiting";
import { ConditionTickFever } from "./pages/conditions/ConditionTickFever";
import { ConditionPetEmergency } from "./pages/conditions/ConditionPetEmergency";
import { BookAppointment } from "./pages/BookAppointment";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "veterinary-clinic-hyderabad", Component: VeterinaryClinicHyderabad },

      // Services
      { path: "services/pet-emergency-hyderabad", Component: ServiceEmergency },
      { path: "services/dog-vaccination-hyderabad", Component: ServiceVaccination },
      { path: "services/cat-treatment-hyderabad", Component: ServiceCatTreatment },
      { path: "services/bird-vet-hyderabad", Component: ServiceBirdVet },
      { path: "services/pet-grooming-hyderabad", Component: ServiceGrooming },
      { path: "services/pet-surgery-hyderabad", Component: ServiceSurgery },

      // Doctors
      { path: "doctors", Component: Doctors },
      { path: "doctors/dr-abhishek-kalundia", Component: DrAbhishekKalundia },
      { path: "doctors/dr-neelima-kalundia", Component: DrNeelimaPrabhaKalundia },

      // Conditions
      { path: "conditions/dog-not-eating", Component: ConditionDogNotEating },
      { path: "conditions/cat-vomiting", Component: ConditionCatVomiting },
      { path: "conditions/tick-fever-dogs", Component: ConditionTickFever },
      { path: "conditions/pet-emergency-symptoms", Component: ConditionPetEmergency },

      // Other pages
      { path: "book-appointment", Component: BookAppointment },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },

      // 404
      { path: "*", Component: NotFound },
    ],
  },
]);
