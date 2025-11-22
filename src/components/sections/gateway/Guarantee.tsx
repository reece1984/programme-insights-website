import React from 'react';
import { Container } from '../../ui/Container';

export const Guarantee: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-theme-primary mb-8">
            The GREEN Confidence Guarantee
          </h2>

          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 mb-8">
            <p className="body-lg text-gray-800 mb-6">
              If Gateway Success doesn't improve your review outcome, we'll refund every penny.
              But in three years, no one has asked.
            </p>
          </div>

          <p className="body-lg text-gray-700 leading-relaxed">
            That's because we don't just prepare you for reviews—we transform how you think about them.
            From fear to confidence. From scramble to system. From RED risk to GREEN reality.
          </p>
        </div>
      </Container>
    </section>
  );
};
