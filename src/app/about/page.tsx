import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Target, Eye } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Lead Designer",
    avatar: "https://i.pravatar.cc/150?u=jane",
    bio: "Jane is the visionary behind Diginex, with a passion for creating beautiful and intuitive user experiences.",
  },
  {
    name: "John Smith",
    role: "CTO & Lead Developer",
    avatar: "https://i.pravatar.cc/150?u=john",
    bio: "John is the technical mastermind, turning complex problems into elegant, high-performance web solutions.",
  },
  {
    name: "Emily White",
    role: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?u=emily",
    bio: "Emily drives our growth strategy, connecting our work with the businesses that need it most.",
  },
];

export const metadata = {
  title: "About Us | Diginex Studio",
  description: "Learn about the team, mission, and vision behind Diginex Studio.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl">
          We Are Diginex Studio
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          A passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences.
        </p>
      </header>

      <section className="mb-24">
        <div className="relative mb-12 h-80 w-full overflow-hidden rounded-lg">
          <Image
            src="https://picsum.photos/seed/about-us/1200/400"
            alt="Diginex Studio Team"
            fill
            className="object-cover"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-headline text-2xl font-bold">Our Team</h2>
            <p className="mt-2 text-muted-foreground">
              A collective of creative minds driven by a shared passion for innovation and quality in the digital space.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Target className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-headline text-2xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To empower businesses by building bespoke web solutions that merge cutting-edge technology with stunning design.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Eye className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-headline text-2xl font-bold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              To be a leading digital agency known for our commitment to excellence, client success, and pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Meet the Experts
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:text-lg">
            The talented individuals who make it all happen.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center rounded-lg bg-card/50 p-6">
              <Avatar className="mb-4 h-24 w-24 border-2 border-primary">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-headline text-xl font-bold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
