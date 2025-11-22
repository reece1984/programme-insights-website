import React from 'react';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';

export const GatewayHero: React.FC = () => {
  const handleCTA = (action: string) => {
    console.log(`Gateway Success CTA: ${action}`);
    alert(`${action} - Coming Soon`);
  };

  return (
    <section className="relative min-h-screen flex items-center hero-bg">
      <Container className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center hero-text">
          <h1 className="heading-xl mb-6">
            Never Face Another Surprise RED Rating
          </h1>
          <p className="body-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Gateway Success predicts your review outcome 90 days in advance—and shows you exactly how to achieve GREEN
          </p>
          <p className="body-base text-gray-300 mb-12 max-w-2xl mx-auto">
            Built by practitioners who've been on both sides of the review table
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTA('Get Your Free Readiness Assessment')}
            >
              Get Your Free Readiness Assessment
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTA('Watch 2-Minute Demo')}
            >
              Watch 2-Minute Demo
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="pt-12 border-t border-gray-700">
            <p className="text-sm font-medium">
              Trusted by 3 Major UK Infrastructure Projects
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
