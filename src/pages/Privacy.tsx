import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as
                  when you create an account, request a consultation, or contact
                  us. This may include your name, email address, phone number,
                  company name, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and
                  improve our services, to communicate with you about products,
                  services, and events, and to respond to your comments,
                  questions, and requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground">
                  We do not share your personal information with third parties
                  except as described in this policy. We may share information
                  with vendors, consultants, and other service providers who
                  need access to such information to carry out work on our
                  behalf.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We take reasonable measures to help protect information about
                  you from loss, theft, misuse, unauthorized access, disclosure,
                  alteration, and destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@shebacore.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
