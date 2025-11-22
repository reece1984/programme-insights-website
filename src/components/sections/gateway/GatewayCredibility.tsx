import React from 'react';
import { Container } from '../../ui/Container';

export const GatewayCredibility: React.FC = () => {
  const testimonials = [
    {
      role: 'SRO, £2B Transport Programme',
      quote: 'First time in 20 years I\'ve slept well before a gateway review. Knowing our predicted rating 90 days out changed everything.'
    },
    {
      role: 'PMO Director, Major Defence Project',
      quote: 'Replaced £150K of consultants with £40K software that actually tells us where we stand.'
    },
    {
      role: 'Head of Assurance, Infrastructure Portfolio',
      quote: 'Our last three projects achieved GREEN. The trajectory visualization motivated teams to act early.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-6">
          Built by Practitioners, For Practitioners
        </h2>

        <p className="body-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
          Born from 15+ years of infrastructure megaproject experience. We've prepared reviews at HS2 and GDF. We've sat on both sides of the table.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="body-base text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-sm font-semibold text-theme-primary">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
