import React from 'react';
import { Container } from '../../ui/Container';

export const SuccessVision: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-8">
          What Programme Directors Want
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="body-lg text-gray-700 mb-6">
            Achieve GREEN ratings consistently. Sleep soundly before every gateway review. Walk into reviews with complete confidence, knowing exactly where you stand.
          </p>

          <p className="body-lg text-gray-700 mb-8">
            Imagine knowing your gateway outcome 90 days in advance. No surprises. No panic. No weekend scrambles. Just calm, continuous readiness and predictable success.
          </p>

          <p className="text-xl font-bold text-theme-primary mb-8">
            From fear to confidence. From scramble to system. From RED risk to GREEN reality.
          </p>

          <p className="body-lg text-gray-800 font-medium">
            Gateway Success makes this your reality.
          </p>
        </div>
      </Container>
    </section>
  );
};
