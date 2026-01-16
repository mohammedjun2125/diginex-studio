import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "For small projects and startups.",
    features: [
      "Landing Page",
      "Basic SEO",
      "Contact Form",
      "Mobile Responsive",
    ],
    isPopular: false,
  },
  {
    name: "Business",
    price: "$1299",
    description: "For growing businesses and professionals.",
    features: [
      "Multi-page Website",
      "Advanced SEO",
      "CMS Integration",
      "Priority Support",
      "Analytics",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications and custom needs.",
    features: [
      "Custom Solution",
      "Dedicated Team",
      "24/7 Support",
      "Advanced Security",
      "API Integration",
    ],
    isPopular: false,
  },
];

export const metadata = {
  title: "Pricing Plans | Diginex Studio",
  description: "Flexible and transparent pricing plans for your business needs.",
};


export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl">
          Flexible Pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Choose a plan that fits your needs. All plans are fully customizable to match your project's scope.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col",
              plan.isPopular && "border-primary shadow-lg shadow-primary/10"
            )}
          >
            {plan.isPopular && (
              <div className="w-full bg-primary py-1.5 text-center text-sm font-semibold text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader className="items-center text-center">
              <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="font-headline text-4xl font-bold">{plan.price}</span>
                {plan.name !== 'Enterprise' && <span className="text-muted-foreground">/project</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.isPopular ? "default" : "secondary"}>
                <Link href="/contact">
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
