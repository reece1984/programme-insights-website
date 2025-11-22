import React from 'react';
import { Container } from '../../ui/Container';

export const ConfidentExperience: React.FC = () => {
  const timeline = [
    {
      title: '90 Days Before',
      description: 'You open Gateway Success and see your predicted rating: AMBER trending to GREEN. Your roadmap shows exactly what needs attention. No panic—just a clear plan.'
    },
    {
      title: '30 Days Before',
      description: 'Your readiness score has climbed from 68% to 89%. Evidence gaps are closed. You\'ve practiced with AI reviewers and refined your answers. You\'re ready.'
    },
    {
      title: 'Review Day',
      description: 'You walk in calm and confident. Every question was anticipated. Every piece of evidence is fresh and relevant. The reviewers nod approvingly. GREEN is inevitable.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          The Confident Gateway Review Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border-l-4 border-theme-accent">
              <h3 className="heading-sm text-theme-primary mb-4">
                {item.title}
              </h3>
              <p className="body-base text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center body-lg font-medium text-theme-primary mt-12">
          This is how gateway reviews should feel.
        </p>
      </Container>
    </section>
  );
};
