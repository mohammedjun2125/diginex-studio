import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog-posts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog | Diginex Studio",
  description: "Insights and articles on web development, design, and digital strategy.",
};

export default function BlogPage() {
  return (
    <div>
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-glow sm:text-5xl md:text-6xl">
          Digital Insights
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Explore our latest articles, tutorials, and thoughts on the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <Card className="flex h-full transform-gpu flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative h-56 w-full">
                <Image
                  src={post.image.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={post.image.imageHint}
                />
              </div>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">{post.category}</Badge>
                <CardTitle className="font-headline text-xl leading-snug transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
