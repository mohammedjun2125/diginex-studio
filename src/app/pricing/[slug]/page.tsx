import { notFound } from "next/navigation";
import Link from "next/link";
import { plans } from "@/lib/pricing-plans";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const plan = plans.find((p) => p.slug === params.slug);
  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }
  return {
    title: `${plan.name} Plan | Diginex Studio`,
    description: `Details about our ${plan.name} pricing plan. ${plan.description}`,
  };
}

export async function generateStaticParams() {
  return plans.map((plan) => ({
    slug: plan.slug,
  }));
}

export default function PricingPlanPage({ params }: Props) {
  const plan = plans.find((p) => p.slug === params.slug);

  if (!plan) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl">
          {plan.name} Plan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {plan.description}
        </p>
      </div>

      <Card className="max-w-2xl mx-auto border-primary/50 shadow-lg shadow-primary/5">
        <CardHeader className="items-center text-center pb-4">
            <CardTitle className="font-headline text-5xl font-bold">{plan.price}</CardTitle>
            {plan.name !== 'Enterprise' && <CardDescription className="text-base">per project</CardDescription>}
        </CardHeader>
        <CardContent>
            <h3 className="font-headline text-xl font-semibold mb-6 text-center text-primary">What's Included:</h3>
            <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className="flex-col gap-4 pt-6">
            <p className="text-sm text-muted-foreground text-center px-6">
              This plan is a great starting point. We can customize it to fit your exact needs.
            </p>
            <Button asChild size="lg" className="w-full">
                 <Link href="/contact">
                  {plan.name === "Enterprise" ? "Contact for a Custom Quote" : "Get Started Today"}
                  <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </CardFooter>
      </Card>

       <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/pricing">
              <ArrowLeft className="mr-2" />
              Back to All Plans
            </Link>
          </Button>
        </div>
    </div>
  );
}
