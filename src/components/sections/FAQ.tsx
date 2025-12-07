import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How Can I Use Playo To Book Sports Venues Or To Join Sports Activities?',
    answer: 'You can browse available venues and games on our platform, select your preferred time slot, and complete the booking process. For joining activities, simply find games that match your skill level and interests, then book your slot.',
  },
  {
    question: 'What Is The Playo Partner App, And How Does It Help Venue Owners?',
    answer: 'The Partner App allows venue owners to manage their listings, track bookings, set availability, and communicate with players. It provides tools to maximize your venue\'s visibility and streamline operations.',
  },
  {
    question: 'Can I Reschedule Or Cancel A Booking Made On Playo? How Does It Work?',
    answer: 'Yes, you can reschedule or cancel bookings through your account dashboard. Cancellations made within 24 hours may be subject to our cancellation policy. Please check the specific terms for your booking.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-text">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

