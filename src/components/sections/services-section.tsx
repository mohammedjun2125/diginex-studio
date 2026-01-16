import { motion } from "framer-motion";
import { Code, PenTool, BarChart, Search, Rocket } from "lucide-react";
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
    description: "Building responsive, high-performance websites and applications.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces for optimal experience.",
  },
  {
    icon: BarChart,
    title: "Digital Strategy",
    description: "Crafting data-driven strategies to elevate your online presence.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your search engine ranking to attract organic traffic.",
  },
  {
    icon: Rocket,
    title: "Performance Tuning",
    description: "Optimizing your web assets for lightning-fast load times.",
  },
];

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function ServicesSection() {
  return (
    <section className="container max-w-7xl">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          We provide a comprehensive suite of digital services to bring your vision to life.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full transform-gpu bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
