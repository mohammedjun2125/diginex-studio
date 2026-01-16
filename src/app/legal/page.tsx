import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";

export const metadata = {
    title: "Legal Information | Diginex Studio",
    description: "Our Terms of Service and Privacy Policy.",
};

export default function LegalPage() {
    return (
        <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl">
                Legal Center
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Here you'll find important legal documents that govern your use of our services.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button asChild size="lg" variant="outline">
                    <Link href="/legal/terms-of-service">
                        <FileText className="mr-2"/>
                        Terms of Service
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/legal/privacy-policy">
                        <Shield className="mr-2"/>
                        Privacy Policy
                    </Link>
                </Button>
            </div>
        </div>
    );
}
