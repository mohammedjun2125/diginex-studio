"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CodeXml, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

function NavMenuLinks({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const LinkComponent = isMobile ? SheetClose : 'div';

  return (
    <>
      {navLinks.map((link) => (
        <LinkComponent key={link.href} asChild={isMobile}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
                isMobile && "block py-2 text-lg"
              )}
            >
              {link.label}
            </Link>
        </LinkComponent>
      ))}
    </>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold text-foreground">
            Diginex Studio
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavMenuLinks />
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                    <div className="flex h-full flex-col">
                        <div className="border-b p-4">
                          <SheetClose asChild>
                            <Link href="/" className="flex items-center gap-2">
                              <CodeXml className="h-6 w-6 text-primary" />
                              <span className="font-headline text-lg font-bold text-foreground">
                                Diginex Studio
                              </span>
                            </Link>
                          </SheetClose>
                        </div>
                        <nav className="flex flex-col gap-4 p-4">
                          <NavMenuLinks isMobile={true} />
                        </nav>
                        <div className="mt-auto p-4">
                            <SheetClose asChild>
                              <Button asChild className="w-full">
                                  <Link href="/contact">Get a Quote</Link>
                              </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
