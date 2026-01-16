import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { posts } from '@/lib/blog-posts';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


export function FeaturedWorkSection() {
    return (
        <section className="container max-w-7xl">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Insights
                </h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Check out our latest articles and case studies from the blog.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post) => (
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
                            <CardContent className="flex flex-1 flex-col p-6">
                                <Badge variant="outline" className="mb-2 w-fit">{post.category}</Badge>
                                <h3 className="font-headline text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground flex-1">{post.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="mt-12 text-center">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                        View All Posts <ArrowRight className="ml-2" />
                    </Link>
                 </Button>
            </div>
        </section>
    )
}
