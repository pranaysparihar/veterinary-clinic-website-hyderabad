import { Link } from "react-router";

interface DoctorCardProps {
  name: string;
  role: string;
  experience: string;
  qualifications: string[];
  image: string;
  link: string;
}

export function DoctorCard({ name, role, experience, qualifications, image, link }: DoctorCardProps) {
  return (
    <Link to={link} className="group">
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[3/4] overflow-hidden bg-accent">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-1">{name}</h3>
          <p className="text-primary mb-2">{role}</p>
          <p className="text-sm text-muted-foreground mb-3">{experience}</p>
          <div className="space-y-1">
            {qualifications.slice(0, 3).map((qual, idx) => (
              <p key={idx} className="text-xs text-muted-foreground">• {qual}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
