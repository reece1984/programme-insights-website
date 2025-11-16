import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '../components/ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left hover:text-theme-accent transition-colors"
      >
        <span className="heading-sm text-navy-primary pr-8">{item.question}</span>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-theme-accent transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="body-base text-gray-600 pr-12">{item.answer}</p>
      </div>
    </motion.div>
  );
};

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'Is this secure enough for Official Sensitive data?',
      answer:
        'Yes. Programme Insights is built on Azure UK South infrastructure with ISO 27001 certification and Cyber Essentials Plus accreditation. All data remains within UK borders, and we use the same Azure OpenAI UK South service that powers IPA Scout. We maintain comprehensive audit trails and implement role-based access controls to ensure data security and compliance with government standards.',
    },
    {
      question: 'How is this different from hiring traditional consultants?',
      answer:
        'Traditional consultants provide periodic point-in-time assessments at £200K+ per engagement with 6-12 month timelines. Programme Insights delivers continuous, on-demand intelligence at a fraction of the cost. You maintain control of your data and insights, with the ability to run assessments whenever needed. Our platform augments rather than replaces your team, providing them with powerful tools to deliver better outcomes faster.',
    },
    {
      question: 'Do you use the same technology as IPA Scout?',
      answer:
        'Yes. We use Azure OpenAI UK South, the same enterprise AI service that powers the Infrastructure and Projects Authority\'s Scout platform. This gives you confidence in the technology maturity, security posture, and government alignment. However, Programme Insights is purpose-built for programme directors managing delivery, whereas IPA Scout serves the assurance community.',
    },
    {
      question: 'Can we start with one module and add others later?',
      answer:
        'Absolutely. Our modular architecture is designed for exactly this approach. Most clients start with Gateway Success to address their most immediate need—NISTA/PAR readiness. Once you\'ve uploaded your programme documentation for one module, that same data powers all other modules you subsequently activate. There are no penalties for starting small and expanding as you see value.',
    },
    {
      question: 'How long does implementation take?',
      answer:
        'Gateway Success can be operational within 48 hours. The process is straightforward: create your account, configure user access, upload your programme documentation, and start receiving insights. There\'s no complex integration or change management required. Our team provides onboarding support to ensure you\'re getting maximum value from day one.',
    },
    {
      question: 'What\'s your experience with NISTA and PAR reviews?',
      answer:
        'Our founding team has direct experience leading government PMOs through NISTA and PAR reviews on programmes exceeding £1Bn in value. We\'ve seen what works, what doesn\'t, and where programmes typically struggle. This practitioner knowledge is embedded throughout the platform—from the assessment criteria we prioritize to the action plans we generate. We understand the difference between theoretical compliance and practical readiness.',
    },
    {
      question: 'Do we still need consulting firms if we use Programme Insights?',
      answer:
        'Programme Insights doesn\'t replace consulting firms—it makes them more effective and accountable. Use our platform for continuous health monitoring and pre-assessment preparation, then bring in specialist consultants for deep-dive reviews and specific capability gaps. This hybrid approach reduces your consulting spend while improving outcomes. Several major consulting firms are exploring partnerships with us to enhance their own service delivery.',
    },
    {
      question: 'What happens to our data if we stop using the platform?',
      answer:
        'You retain full ownership of your data at all times. If you decide to stop using Programme Insights, you can export all your programme documentation, assessment results, and historical analytics in standard formats. We provide a 90-day data retention period after subscription ends, giving you ample time to retrieve everything. No lock-in, no hostage data—it\'s your programme information.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-navy-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
            <p className="body-lg text-gray-200">
              Everything you need to know about Programme Insights and how we help major
              infrastructure programmes succeed.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} item={faq} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-light-grey">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-navy-primary mb-6">Still have questions?</h2>
            <p className="body-base text-gray-600 mb-8">
              Our team is here to help. Schedule a consultation to discuss your specific programme
              needs and how Programme Insights can support your success.
            </p>
            <a
              href="/#"
              className="inline-block px-8 py-4 bg-theme-accent text-white font-medium rounded-md hover:bg-theme-accent transition-colors shadow-sm hover:shadow-md"
            >
              Schedule Consultation
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};
