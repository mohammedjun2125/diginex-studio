export type Plan = {
  name: "Starter" | "Business" | "Enterprise";
  slug: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    slug: "starter",
    price: "$499",
    description: "For small projects and startups.",
    features: [
      "Custom Designed Landing Page",
      "Basic On-Page SEO",
      "Contact Form Integration",
      "Fully Mobile Responsive Design",
      "1 Month of Technical Support",
    ],
    isPopular: false,
  },
  {
    name: "Business",
    slug: "business",
    price: "$1299",
    description: "For growing businesses and professionals.",
    features: [
      "Multi-page Website (up to 10 pages)",
      "Advanced SEO & Keyword Strategy",
      "Headless CMS Integration (e.g., Sanity, Contentful)",
      "3 Months of Priority Support",
      "Google Analytics Setup & Integration",
      "Social Media Feed Integration",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    price: "Custom",
    description: "For large-scale applications and custom needs.",
    features: [
      "Bespoke Solution Design & Architecture",
      "Dedicated Project Manager & Development Team",
      "24/7 Priority Support & Maintenance Plan",
      "Advanced Security Hardening & Audits",
      "Custom Third-Party API Integrations",
      "Scalable Cloud Infrastructure on Vercel/AWS",
      "Ongoing Performance Monitoring & A/B Testing",
    ],
    isPopular: false,
  },
];
