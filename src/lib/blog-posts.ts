import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: ImagePlaceholder;
};

const findImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback image
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/1200/800',
            imageHint: 'abstract'
        };
    }
    return img;
};

export const posts: Post[] = [
  {
    slug: 'the-future-of-ai-in-web-design',
    title: 'The Future of AI in Web Design',
    description: 'Exploring how artificial intelligence is revolutionizing the way we create and interact with websites.',
    content: `
      <p>Artificial intelligence is no longer a concept of science fiction; it's a tangible tool that's reshaping industries, and web design is no exception. From automated design systems to personalized user experiences, AI is paving the way for a smarter, more efficient web.</p>
      <h2>Generative Design</h2>
      <p>One of the most exciting frontiers is generative design, where AI algorithms create countless design variations based on a set of predefined rules. This allows designers to explore a vast landscape of possibilities in a fraction of the time.</p>
      <h2>Personalization at Scale</h2>
      <p>AI can analyze user behavior in real-time to tailor content, layouts, and recommendations. This level of personalization was once impossible to achieve at scale, but now it's becoming a standard for engaging user experiences.</p>
    `,
    author: 'Jane Doe',
    date: '2024-07-20',
    category: 'Technology',
    tags: ['AI', 'Web Design', 'Future Tech'],
    image: findImage('blog-ai-future'),
  },
  {
    slug: 'top-5-ui-ux-design-trends-for-2025',
    title: 'Top 5 UI/UX Design Trends for 2025',
    description: 'Stay ahead of the curve with these upcoming trends in user interface and user experience design.',
    content: `
      <p>The digital landscape is ever-evolving, and with it, the principles of good design. As we look towards 2025, several key trends are emerging that promise to define the next generation of digital products.</p>
      <ol>
        <li><strong>Immersive 3D Interfaces:</strong> Leveraging technologies like WebGL and Three.js to create engaging, interactive 3D worlds.</li>
        <li><strong>Hyper-Personalization:</strong> Using AI to create experiences that are uniquely tailored to each user.</li>
        <li><strong>Advanced Microinteractions:</strong> Small, delightful animations that provide feedback and enhance usability.</li>
        <li><strong>Glassmorphism and Aurora UI:</strong> Continuing the trend of layered, translucent interfaces with vibrant, blended colors.</li>
        <li><strong>Voice User Interface (VUI):</strong> Integrating voice commands and interactions for hands-free navigation.</li>
      </ol>
    `,
    author: 'John Smith',
    date: '2024-07-15',
    category: 'Design',
    tags: ['UI', 'UX', 'Trends'],
    image: findImage('blog-design-trends'),
  },
  {
    slug: 'a-deep-dive-into-seo-mastery',
    title: 'A Deep Dive into SEO Mastery',
    description: 'Unlock the secrets to dominating search engine rankings and driving organic traffic to your website.',
    content: `
      <p>Search Engine Optimization (SEO) is a complex and multifaceted discipline, but mastering its core principles is essential for any online business. This guide will walk you through the key pillars of modern SEO.</p>
      <h2>On-Page SEO</h2>
      <p>This refers to optimizing individual web pages to rank higher. Key elements include keyword research, high-quality content, title tags, and meta descriptions.</p>
      <h2>Off-Page SEO</h2>
      <p>This involves actions taken outside of your own website to impact your rankings, primarily through building high-quality backlinks from reputable sources.</p>
      <h2>Technical SEO</h2>
      <p>Technical SEO ensures that a website meets the technical requirements of modern search engines. This includes site speed, mobile-friendliness, site architecture, and structured data.</p>
    `,
    author: 'Emily White',
    date: '2024-07-10',
    category: 'Marketing',
    tags: ['SEO', 'Digital Marketing', 'Growth'],
    image: findImage('blog-seo-mastery'),
  },
   {
    slug: 'why-web-performance-matters',
    title: 'Why Web Performance Matters',
    description: 'Discover how website speed and performance directly impact user experience, conversion rates, and SEO.',
    content: `
      <p>In today's fast-paced digital world, a slow website is a losing website. Users expect pages to load almost instantly, and even a one-second delay can lead to a significant drop in conversions and user satisfaction.</p>
      <h2>The Impact on User Experience</h2>
      <p>Slow load times create frustration and can cause users to abandon your site before they even see your content. A fast, responsive site feels professional and reliable.</p>
      <h2>Conversion Rates and Revenue</h2>
      <p>Studies have consistently shown a direct correlation between page speed and conversion rates. Faster sites sell more, generate more leads, and have higher ad revenue.</p>
      <h2>SEO and Search Rankings</h2>
      <p>Google has made page speed a direct ranking factor for both mobile and desktop searches. A faster website is more likely to rank higher than its slower competitors, leading to more organic traffic.</p>
    `,
    author: 'Michael Brown',
    date: '2024-07-05',
    category: 'Development',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
    image: findImage('blog-web-performance'),
  },
];
