import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Build Your Vision?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's partner up to create something extraordinary. Reach out today for a free consultation and see how we can help your business grow.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          <div className="hidden lg:block relative w-full aspect-square rounded-xl bg-primary/10 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
             <Image 
                src="https://picsum.photos/seed/contact/600/600" 
                data-ai-hint="abstract geometric" 
                alt="Abstract art" 
                fill
                sizes="(max-width: 1024px) 400px, 600px"
                className="object-cover opacity-30 mix-blend-soft-light"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
