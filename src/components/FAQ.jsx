import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What are your hours?', answer: 'We are open Monday to Friday, 9 AM to 5 PM.' },
    { question: 'Do you accept insurance?', answer: 'Yes, we accept most major insurance plans.' },
    { question: 'How often should I visit?', answer: 'We recommend a check-up every 6 months.' },
    { question: 'What is teeth whitening?', answer: 'A cosmetic procedure to brighten your smile.' },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" aria-label="Frequently Asked Questions">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
            className="faq-question"
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div id={`faq-answer-${index}`} className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;