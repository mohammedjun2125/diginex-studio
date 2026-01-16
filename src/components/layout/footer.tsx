import { CodeXml, Github, Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2">
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold text-foreground">
                        Diginex Studio
                    </span>
                </Link>
                <p className="text-sm text-muted-foreground">
                    Crafting Digital Excellence.
                </p>
                 <div className="mt-4 flex items-center gap-4">
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="GitHub">
                        <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="Dribbble">
                        <Dribbble className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 md:col-span-3 gap-8">
                <div>
                    <h4 className="font-headline font-semibold text-foreground">Pages</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                        <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
                        <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                        <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                        <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-headline font-semibold text-foreground">Legal</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        <li><Link href="/legal/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Diginex Studio. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
