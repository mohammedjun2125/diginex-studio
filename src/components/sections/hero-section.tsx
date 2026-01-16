"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const InteractiveHeroObject = dynamic(() => import('../3d/interactive-hero-object').then(mod => mod.InteractiveHeroObject), {
  ssr: false,
  loading: () => <Skeleton className="absolute inset-0 z-0 h-full w-full opacity-50" />,
});


export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <InteractiveHeroObject />
      <div className="container relative z-10 flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl lg:text-7xl">
          Crafting Digital Excellence
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-base text-muted-foreground sm:text-lg md:text-xl">
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
