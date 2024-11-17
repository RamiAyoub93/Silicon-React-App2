import React, { useState } from 'react';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    // Toggle active index or close all
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="question-section">
        <div className="question-container">
          <div className="question-header">
            <h1 className="h1">Any Questions? <br />Check out the FAQs</h1>
            <p>Still have unanswered questions and need to&nbsp;get in&nbsp;touch?</p>
          </div>
          <div className="q-card">
            <div className="question-card">
              <div className="icon-container">
                <img src="/icon-phone.svg" alt="" />
              </div>
              <p>Still have questions?</p>
              <button className="btn-questions">
                <p>Contact us</p>
                <img src="/icon-r (1).svg" alt="" />
              </button>
            </div>
            <div className="question-card">
              <div className="icon-container">
                <img src="/icon-message.svg" alt="" />
              </div>
              <p>Don´t like phone calls?</p>
              <button className="btn-questions-1">
                <p>Contact us</p>
                <img src="/icon-r (2).svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <div className="accordion">
            {[
              "Is any of my personal information stored in the App?",
              "What formats can I download my transaction history in?",
              "Can I schedule future transfers?",
              "When can I use Banking App services?",
              "Can I create my own password that is easy for me to remember?",
              "What happens if I forget or lose my password?",
            ].map((question, index) => (
              <div
                key={index}
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              >
                <h3 onClick={() => handleAccordionClick(index)}>{question}</h3>
                {activeIndex === index && (
                  <p className="accordion-content">
                    Answer to question {index + 1}.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
