import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts, Post } from "@/lib/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Diginex Studio Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function ShareButtons({ post }: { post: Post }) {
  const url = `https://your-domain.com/blog/${post.slug}`; // Replace with your actual domain
  const text = `Check out this article: ${post.title}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Share:</span>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8">
        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.image.imageHint}
          />
        </div>
        <Badge variant="outline" className="mb-2">{post.category}</Badge>
        <h1 className="font-headline text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </header>

      <div
        className="prose prose-invert max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-headings:text-glow prose-a:text-primary prose-a:transition-colors hover:prose-a:text-primary/80 prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-12 border-t pt-8 flex justify-between items-center">
        <ShareButtons post={post} />
        <Button variant="outline" asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    </article>
  );
}
