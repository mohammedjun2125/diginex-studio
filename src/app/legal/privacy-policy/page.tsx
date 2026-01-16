export const metadata = {
  title: "Privacy Policy | Diginex Studio",
  description: "Read our Privacy Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-invert max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-headings:text-glow prose-a:text-primary prose-a:transition-colors hover:prose-a:text-primary/80 prose-strong:text-foreground">
      <h1>Privacy Policy</h1>
      <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you fill out a contact form. This may include your name, email address, and any message you send.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to respond to your inquiries, provide our services, and improve our website.
      </p>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. Please contact us to make such a request.
      </p>
      
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].
      </p>
    </article>
  );
}
