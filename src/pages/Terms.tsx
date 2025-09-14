import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Terms of
              <span className="block text-secondary-brand">Use</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              These terms govern your use of AIQRA services and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant">
              <h2 className="text-3xl font-bold font-display mb-6 text-gradient">
                Terms and Conditions
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to AIQRA. These Terms of Use ("Terms") govern your access to and use of our website, 
                  services, and AI solutions. By accessing or using our services, you agree to be bound by these Terms.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By using AIQRA services, you acknowledge that you have read, understood, and agree to be bound 
                    by these Terms and our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h3>
                  <p>
                    AIQRA provides artificial intelligence and robotics solutions, including but not limited to 
                    PrimeLead, Velocity, and Project Pulse platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h3>
                  <p>
                    Users are responsible for maintaining the confidentiality of their account information and for all 
                    activities that occur under their account.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h3>
                  <p>
                    All content, features, and functionality of our services are owned by AIQRA and are protected by 
                    international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Contact Information</h3>
                  <p>
                    For questions about these Terms, please contact us through our Contact page or at legal@aiqra
                  </p>
                </div>

                <p className="text-sm text-muted-foreground/70 border-t border-border pt-6 mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;