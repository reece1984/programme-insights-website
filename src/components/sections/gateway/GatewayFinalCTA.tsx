import React from 'react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';

export const GatewayFinalCTA: React.FC = () => {
  const handleCTA = (action: string) => {
    console.log(`Gateway Success Final CTA: ${action}`);
    alert(`${action} - Coming Soon`);
  };

  return (
    <section className="section-padding bg-theme-primary">
      <Container>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="heading-lg mb-6">
            Your Next Gateway Review Starts Today
          </h2>
          <p className="body-lg mb-12 text-gray-200">
            Every day without Gateway Success is a day closer to an unpredictable review. Your next gateway review is coming—start preparing with confidence today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              onClick={() => handleCTA('Schedule Live Demo')}
            >
              Schedule Live Demo
            </Button>
          </div>

          <p className="body-base text-gray-300">
            Join the SROs who sleep soundly
          </p>
        </div>
      </Container>
    </section>
  );
};
