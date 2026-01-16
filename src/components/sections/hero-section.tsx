import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { InteractiveHeroObject } from "../3d/interactive-hero-object";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <InteractiveHeroObject />
      <div className="container relative z-10 flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-6xl md:text-7xl lg:text-8xl">
          Crafting Digital Excellence
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Diginex Studio builds bespoke web solutions that merge cutting-edge
          technology with stunning design, delivering experiences that captivate
          and convert.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/blog">Explore Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
