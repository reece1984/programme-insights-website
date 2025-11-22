import React from 'react';
import { Container } from '../../ui/Container';

export const Comparison: React.FC = () => {
  const comparisons = [
    { traditional: '3-month scramble', gateway: 'Daily monitoring' },
    { traditional: 'Surprise outcomes', gateway: '90-day predictions' },
    { traditional: 'Generic templates', gateway: 'Specific actions' },
    { traditional: '£150K consultants', gateway: '£40K platform' },
    { traditional: 'Weekend working', gateway: 'Calm confidence' },
    { traditional: 'Hope for the best', gateway: 'Know you\'re ready' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          The Old Way vs. The Gateway Success Way
        </h2>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-4 px-6 body-lg font-semibold text-gray-700">
                  Traditional Approach
                </th>
                <th className="text-left py-4 px-6 body-lg font-semibold text-theme-primary">
                  Gateway Success
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-6 body-base text-gray-600">
                    {comparison.traditional}
                  </td>
                  <td className="py-4 px-6 body-base text-theme-primary font-medium">
                    {comparison.gateway}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
