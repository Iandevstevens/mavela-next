import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ text, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed line-clamp-6">{text}</p>
        {/* <div className="flex items-center gap-3 pt-4 border-t border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">Guest</p>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
