export const metadata = {
  title: "Terms of Service | Diginex Studio",
  description: "Read our Terms of Service.",
};

export default function TermsOfServicePage() {
  return (
    <article className="prose prose-invert max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-headings:text-glow prose-a:text-primary prose-a:transition-colors hover:prose-a:text-primary/80 prose-strong:text-foreground">
      <h1>Terms of Service</h1>
      <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Diginex Studio! These Terms of Service ("Terms") govern your use of our website located at [Your Website URL] (the "Service") and any related services provided by Diginex Studio.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide web design, development, and digital strategy services. The specifics of services for each project will be outlined in a separate project agreement.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        You are responsible for providing accurate and complete information required for the project. You agree not to use our services for any unlawful purpose.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        Upon final payment, we grant you a license to the final website design and code. We retain the right to use the project for promotional purposes.
      </p>
      
      <h2>5. Limitation of Liability</h2>
      <p>
        Our liability is limited to the amount paid for our services. We are not liable for any indirect, incidental, or consequential damages.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at [Your Contact Email].
      </p>
    </article>
  );
}
