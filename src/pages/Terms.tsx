import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing or using ShebaCore's services, you agree to be
                  bound by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Use of Services
                </h2>
                <p className="text-muted-foreground">
                  Our services are designed to help businesses identify, source,
                  and implement technology solutions. You agree to use our
                  services only for lawful purposes and in accordance with these
                  Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  The content, features, and functionality of our services are
                  owned by ShebaCore and are protected by international
                  copyright, trademark, patent, trade secret, and other
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  ShebaCore shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from
                  your access to or use of, or inability to access or use, our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these Terms at any
                  time. It is your responsibility to check these Terms
                  periodically for changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please
                  contact us at legal@shebacore.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
