import React from 'react';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              AI Solutions – Built Fast. Deployed Faster.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              This is just a snapshot. With AIQRA, you can deploy multiple AI agents — in minutes, not months.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Need a custom agent? A turnkey bundle? A full orchestration layer? We've got the tools to build, train, and launch exactly what your business needs. Let us help you go live — faster than you thought possible.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PrimeLead */}
            <div className="card-elegant">
              <h3 className="text-2xl font-bold mb-4 text-primary">PrimeLead</h3>
              <p className="text-muted-foreground leading-relaxed">
                Close deals faster. AI that finds, scores, and sends the hottest leads straight to your CRM.
              </p>
            </div>

            {/* Velocity */}
            <div className="card-elegant">
              <h3 className="text-2xl font-bold mb-4 text-secondary-brand">Velocity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never type another reply. Your AI inbox assistant writes human-level emails in English & Arabic — instantly.
              </p>
            </div>

            {/* Project Pulse */}
            <div className="card-elegant">
              <h3 className="text-2xl font-bold mb-4 text-accent-brand">Project Pulse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Give robots a sense of touch. The first open-source tactile AI library powering smarter machines today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Each agent is powered by the AIQRA core platform: dashboards, memory, human handover, WhatsApp and web integration — all included.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">
              One platform. Infinite possibilities. Built to scale. Built for you.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;