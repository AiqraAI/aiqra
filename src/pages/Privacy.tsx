import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Privacy
              <span className="block text-secondary-brand">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your privacy and data security are our top priorities at AIQRA
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
                Privacy Policy
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At AIQRA, we are committed to protecting your privacy and ensuring the security of your personal 
                  information. This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our AI services. This may include your name, email address, company information, 
                    and usage data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                  <p>
                    We use your information to provide and improve our AI and robotics services, communicate with you, 
                    and ensure the security and functionality of our platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h3>
                  <p>
                    We implement industry-standard security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without 
                    your consent, except as described in this policy or as required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h3>
                  <p>
                    You have the right to access, update, or delete your personal information. You may also opt out 
                    of certain communications from us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h3>
                  <p>
                    If you have questions about this Privacy Policy, please contact us through our Contact page 
                    or at privacy@aiqra
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

export default Privacy;