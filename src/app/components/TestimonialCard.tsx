import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  petName: string;
  rating: number;
  text: string;
  image?: string;
}

export function TestimonialCard({ name, petName, rating, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">{text}</p>
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">Owner of {petName}</p>
        </div>
      </div>
    </div>
  );
}
