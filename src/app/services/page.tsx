import { Code, PenTool, BarChart, Search, Rocket, Smartphone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance websites and full-stack applications using the latest technologies.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful, and user-centric interfaces that provide an optimal user experience.",
  },
  {
    icon: BarChart,
    title: "Digital Strategy",
    description: "Crafting data-driven strategies to define your brand, engage your audience, and elevate your online presence.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your search engine ranking through technical SEO, content strategy, and backlink building to attract organic traffic.",
  },
  {
    icon: Rocket,
    title: "Performance Tuning",
    description: "Optimizing your web assets for lightning-fast load times and a seamless experience on all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Designing and developing cross-platform mobile apps that deliver rich functionality on iOS and Android.",
  },
];

export const metadata = {
  title: "Our Services | Diginex Studio",
  description: "Explore the digital services we offer to bring your vision to life.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
       <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We provide a comprehensive suite of digital services to bring your vision to life from concept to launch.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex h-full flex-col items-center text-center bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
            <CardHeader className="p-0">
              <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              <CardDescription className="mt-2 text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
