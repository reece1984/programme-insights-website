import React from 'react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';

export const Pricing: React.FC = () => {
  const handleCTA = (action: string) => {
    console.log(`Gateway Success Pricing CTA: ${action}`);
    alert(`${action} - Coming Soon`);
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          Invest in Certainty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Pricing */}
          <div className="bg-white border-2 border-theme-primary rounded-lg p-8">
            <h3 className="heading-md text-theme-primary mb-4">
              Gateway Success Platform
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-theme-primary">£40,000</span>
              <span className="text-gray-600 ml-2">per year</span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Unlimited users from your project',
                'All gateway reviews covered (Gates 0-5)',
                'Daily readiness updates',
                'AI review simulator',
                'Success pattern library',
                'Quarterly expert reviews'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-theme-accent mt-1">✓</span>
                  <span className="body-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => handleCTA('Start Your Free Assessment')}
            >
              Start Your Free Assessment
            </Button>
          </div>

          {/* Success-Based Pricing */}
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8">
            <h3 className="heading-md text-theme-primary mb-4">
              Success-Based Pricing
            </h3>
            <div className="mb-6">
              <div className="mb-2">
                <span className="text-2xl font-bold text-theme-primary">£20,000</span>
                <span className="text-gray-600 ml-2">base</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-theme-primary">+ £30,000</span>
                <span className="text-gray-600 ml-2">for achieving GREEN</span>
              </div>
            </div>

            <p className="body-lg text-center font-semibold text-theme-accent mb-8 py-4 bg-white rounded">
              "We only win when you win"
            </p>

            <Button
              variant="secondary"
              size="md"
              className="w-full"
              onClick={() => handleCTA('Discuss Success-Based Pricing')}
            >
              Discuss This Option
            </Button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          14-day trial. No credit card required.
        </p>
      </Container>
    </section>
  );
};
