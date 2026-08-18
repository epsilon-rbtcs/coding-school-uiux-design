import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Are NukeSchool courses suitable for beginners?',
    answer:
      'Yes, absolutely! Our curriculum starts from the absolute fundamentals with no prior coding experience required. We guide you step-by-step from core programming concepts to advanced production architecture.',
  },
  {
    question: 'Does NukeSchool provide placement assistance?',
    answer:
      'Yes, we provide extensive placement assistance including resume building, GitHub portfolio reviews, 1-on-1 mock technical interviews, HR preparation, and direct referrals to top tech companies and hiring partners.',
  },
  {
    question: 'What programming languages and technologies are covered in the courses?',
    answer:
      'Our courses cover modern, in-demand industry stacks including JavaScript, TypeScript, React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, Python, Git, and scalable System Design.',
  },
  {
    question: 'Are the classes live or pre-recorded, and can I access recordings later?',
    answer:
      'We offer interactive live sessions along with high-definition pre-recorded modules. All live classes are recorded and made available immediately in your student dashboard with lifetime access.',
  },
  {
    question: 'Do students get real-world project experience during the course?',
    answer:
      'Yes! You will build full-stack production-grade applications, microservices, and interactive web tools. Every project is built from scratch adhering to industry coding best practices.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 font-sans-main border-t border-neutral-900/80 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="px-3.5 py-1 rounded border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 text-xs font-mono font-medium tracking-widest uppercase shadow-sm">
            FAQS
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl mx-auto mb-14 font-sans-main"
        >
          Frequently Asked Questions From Our Students
        </motion.h2>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-neutral-700 bg-[#0e0f12]'
                    : 'border-neutral-800/80 bg-[#09090b]/80 hover:border-neutral-700/90 hover:bg-[#0c0d10]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-7 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-normal text-neutral-200 tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-6 pt-1 text-sm sm:text-base text-neutral-400 font-light leading-relaxed border-t border-neutral-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
